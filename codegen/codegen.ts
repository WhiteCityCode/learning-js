type ExData = [number, string, Deno.DirEntry];

const getExercsiseFolders = (): Deno.DirEntry[] => {
  const exerciseEntries = Array.from(Deno.readDirSync("../exercises"));
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
  folders: ExData[]
): Promise<[string, string][]> => {
  const modified: [string, string][] = [];

  try {
    for (const [idx, name, data] of folders) {
      const newName = `../exercises/${idx + 1}-${name}`;
      const oldName = `../exercises/${data.name}`;
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
  filename: string
): Promise<void> => {
  const file = `../exercises/${dirname}/${filename}.ts`;
  await Deno.writeTextFile(file, "test");
};

const createTestFile = async (
  dirname: string,
  filename: string
): Promise<void> => {
  const file = `../exercises/${dirname}/${filename}.test.ts`;
  await Deno.writeTextFile(file, "test");
};

const main = async (args: string[]): Promise<void> => {
  const [filename, indexStr] = args;
  const index = parseInt(indexStr);

  if (isNaN(index) || index < 0) {
    console.log("File index is not a valid positive number");
    Deno.exit(1);
  }

  if (!/^[a-zA-Z]{1}[a-zA-Z0-9]+$/.test(filename)) {
    console.log(
      "Filename must begin with a letter and contain only letters and numbers"
    );
    Deno.exit(1);
  }

  const toModify = getExercsiseFolders()
    .map((i) => getExercsiseData(i))
    .filter((i) => shouldChangeName(i, index));

  const modifiedFiles = await changeFolderNames(toModify);

  try {
    const newDir = `../exercises/${index}-${filename}`;

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
};

main(Deno.args);
