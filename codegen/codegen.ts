type ExData = [number, string, Deno.DirEntry];
const homeDir = new URL("..", import.meta.url).pathname;
const exerciseDir = `${homeDir}exercises`;

const getExercsiseFolders = (): Deno.DirEntry[] => {
  const exerciseEntries = Array.from(Deno.readDirSync(exerciseDir));
  return exerciseEntries.filter((i) => i.isDirectory);
};

const getExercsiseData = (folder: Deno.DirEntry): ExData => {
  const [exNumber, exName] = folder.name.split("-");
  return [parseInt(exNumber), exName, folder];
};

const shouldChangeName = ([exNumber, exName]: ExData, idx: number): boolean => {
  if (exName === undefined) {
    return false;
  }
  if (isNaN(exNumber) || exNumber < 0) {
    return false;
  }

  return exNumber >= idx;
};

const changeFolderNames = async (
  folders: ExData[],
  isCreate: boolean,
): Promise<[string, string][]> => {
  const modified: [string, string][] = [];

  try {
    for (const [idx, name, data] of folders) {
      const newIndex = isCreate ? idx + 1 : idx - 1;
      const newName = `${exerciseDir}/${newIndex}-${name}`;
      const oldName = `${exerciseDir}/${data.name}`;
      await Deno.rename(oldName, newName);
      modified.push([oldName, newName]);
    }
  } catch (err) {
    for (const [oldName, newName] of modified) {
      await Deno.rename(newName, oldName);
    }
    console.log(err);
    Deno.exit(1);
  }

  return modified;
};

const createExerciseFile = async (
  dirname: string,
  filename: string,
): Promise<void> => {
  const file = `${dirname}/${filename}.ts`;
  const contents = `/**
 * 
 * 
 * 
 * Example: 
 * 
 */

export const ${filename} = (s: any) => {
  return s;
}  
`;
  await Deno.writeTextFile(file, contents);
};

const createTestFile = async (
  dirname: string,
  filename: string,
): Promise<void> => {
  const file = `${dirname}/${filename}.test.ts`;
  const contents =
    `import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { ${filename} } from "./${filename}.ts";

Deno.test("${filename}", () => {
  assertEquals(${filename}(), []);
});
`;
  await Deno.writeTextFile(file, contents);
};

const handleRequest = async (
  index: number,
  filename: string,
  isCreate: boolean,
): Promise<void> => {
  const toModify = getExercsiseFolders()
    .map((i) => getExercsiseData(i))
    .filter((i) => shouldChangeName(i, index));

  const modifiedFiles = await changeFolderNames(toModify, isCreate);

  if (isCreate) {
    try {
      const newDir = `${exerciseDir}/${index}-${filename}`;

      await Deno.mkdir(newDir);
      await createExerciseFile(newDir, filename);
      await createTestFile(newDir, filename);
    } catch (err) {
      for (const [oldName, newName] of modifiedFiles) {
        await Deno.rename(newName, oldName);
        console.log(err);
        Deno.exit(1);
      }
    }
  } else {
    const [, toDelete] = modifiedFiles[modifiedFiles.length - 1];
    await Deno.remove(toDelete, { recursive: true });
  }
};

const main = async (args: string[]): Promise<void> => {
  const [mode, indexStr, filename] = args;
  const index = parseInt(indexStr);
  const isCreate = mode === "--create";

  if (mode !== "--create" && mode !== "--delete" && mode !== "--help") {
    console.log(`Invalid flag ${mode} . Must be either --create or --delete`);
    console.log("User codegen --help for additional info");
    Deno.exit(1);
  }

  if (mode === "--help") {
    console.log("Usage: ");
    console.log("codegen --create exercise_name index");
    console.log("codegen --delete index");
    Deno.exit(0);
  }

  if (isNaN(index) || index < 0) {
    console.log("File index is not a valid positive number");
    Deno.exit(1);
  }

  if (!/^[a-zA-Z]{1}[a-zA-Z0-9]+$/.test(filename) && isCreate) {
    console.log(
      "Filename must begin with a letter and contain only letters and numbers",
    );
    Deno.exit(1);
  }

  console.log(mode);
  await handleRequest(index, filename, isCreate);
};

main(Deno.args);
