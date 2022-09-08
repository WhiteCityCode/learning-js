type ExData = [number, string, Deno.DirEntry];
const homeDir = new URL("..", import.meta.url).pathname;
const exerciseDir = `${homeDir}exercises`;
const codegenDir = `${homeDir}codegen`;

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
  isCreate: boolean
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
    console.error(err);
    Deno.exit(1);
  }
  return modified;
};

const createExerciseFile = async (
  dirname: string,
  filename: string
): Promise<void> => {
  const file = `${dirname}/${filename}.ts`;
  const testBoilerplateLocation = `${codegenDir}/exercise.txt`;
  const testBoilerplate = await Deno.readTextFile(testBoilerplateLocation);
  const contents = testBoilerplate.replaceAll("${filename}", filename);
  await Deno.writeTextFile(file, contents);
};

const createTestFile = async (
  dirname: string,
  filename: string
): Promise<void> => {
  const file = `${dirname}/${filename}.test.ts`;
  const exerciseBoilerplateLocation = `${codegenDir}/test.txt`;
  const exerciseBoilerplate = await Deno.readTextFile(
    exerciseBoilerplateLocation
  );
  const contents = exerciseBoilerplate.replaceAll("${filename}", filename);
  await Deno.writeTextFile(file, contents);
};

const getFoldersToChange = (index: number): ExData[] => {
  return getExercsiseFolders()
    .map((i) => getExercsiseData(i))
    .filter((i) => shouldChangeName(i, index));
};

const isValidExerciseNb = (n: number): boolean => {
  return !(isNaN(n) || n < 0);
};

const isValidFileName = (fileName: string): boolean => {
  return /^[a-zA-Z]{1}[a-zA-Z0-9]+$/.test(fileName);
};

const getHelp = async (): Promise<void> => {
  const helpFileLocation = `${codegenDir}/help.txt`;
  const helpText = await Deno.readTextFile(helpFileLocation);
  console.info(helpText);
};

const handleCreate = async (args: string[]): Promise<void> => {
  const [numberStr, fileName] = args;
  const exerciseNumber = parseInt(numberStr);

  if (!isValidExerciseNb(exerciseNumber)) {
    console.error("File index is not a valid positive number");
    Deno.exit(1);
  }

  if (!isValidFileName(fileName)) {
    console.error(
      "Filename must begin with a letter and contain only letters and numbers"
    );
    Deno.exit(1);
  }

  const toModify = getFoldersToChange(exerciseNumber);
  const modifiedFiles = await changeFolderNames(toModify, true);

  try {
    const newDir = `${exerciseDir}/${exerciseNumber}-${fileName}`;

    await Deno.mkdir(newDir);
    await createExerciseFile(newDir, fileName);
    await createTestFile(newDir, fileName);
  } catch (err) {
    for (const [oldName, newName] of modifiedFiles) {
      await Deno.rename(newName, oldName);
      console.error(err);
      Deno.exit(1);
    }
  }
};

const handleInsert = async (args: string[]): Promise<void> => {
  const [numberStr, fileName] = args;
  const exerciseNumber = parseInt(numberStr);

  if (!isValidExerciseNb(exerciseNumber)) {
    console.error("File index is not a valid positive number");
    Deno.exit(1);
  }

  if (!isValidFileName(fileName)) {
    console.error(
      "Filename must begin with a letter and contain only letters and numbers"
    );
    Deno.exit(1);
  }

  const newDir = `${exerciseDir}/${exerciseNumber}-${fileName}`;

  await Deno.mkdir(newDir);
  await createExerciseFile(newDir, fileName);
  await createTestFile(newDir, fileName);
};

const findFolderByIndex = (index: number): ExData => {
  return findFoldersByIndex([index])[0];
};

const findFoldersByIndex = (indices: number[]): ExData[] => {
  const folders = getExercsiseFolders();
  const data: ExData[] = [];

  for (const folder of folders) {
    const [idx, name] = folder.name.split("-");
    const index = parseInt(idx);
    if (isNaN(index)) {
      continue;
    }
    if (indices.includes(index)) {
      data.push([index, name, folder]);
    }
  }

  return data;
};

const handleDelete = async (args: string[]): Promise<void> => {
  const [numberStr] = args;
  const exerciseNumber = parseInt(numberStr);

  if (!isValidExerciseNb(exerciseNumber)) {
    console.error("File index is not a valid positive number");
    Deno.exit(1);
  }
  const [, , { name }] = findFolderByIndex(exerciseNumber);
  const toDelete = `${exerciseDir}/${name}`;
  await Deno.remove(toDelete, { recursive: true });

  const toModify = getFoldersToChange(exerciseNumber);
  await changeFolderNames(toModify, false);
};

const handleRemove = async (args: string[]): Promise<void> => {
  const [numberStr] = args;
  const exerciseNumber = parseInt(numberStr);

  if (!isValidExerciseNb(exerciseNumber)) {
    console.error("File index is not a valid positive number");
    Deno.exit(1);
  }

  const [_idx, _name, data] = findFolderByIndex(exerciseNumber);

  if (data) {
    const fileName = `${exerciseDir}/${data.name}`;
    await Deno.remove(fileName, { recursive: true });
    return;
  }

  console.error(`Unable to find file with index ${exerciseNumber}`);
  Deno.exit(1);
};

const handleSwap = async (args: string[]): Promise<void> => {
  const [fromIdx, toIdx] = args;
  const fIndex = parseInt(fromIdx);
  const tIndex = parseInt(toIdx);

  if (!isValidExerciseNb(fIndex)) {
    console.error("From index is not a valid positive number");
    Deno.exit(1);
  }

  if (!isValidExerciseNb(tIndex)) {
    console.error("To index is not a valid positive number");
    Deno.exit(1);
  }

  const [from, to] = findFoldersByIndex([fIndex, tIndex]);
  const [fromIndex, fromName, fromData] = from;
  const [toIndex, toName, toData] = to;

  if (!fromIndex || !toIndex) {
    console.error("Unable to find both exercise indices");
    Deno.exit(1);
  }

  const oldFrom = `${exerciseDir}/${fromData.name}`;
  const newFrom = `${exerciseDir}/${toIndex}-${fromName}`;

  const oldTo = `${exerciseDir}/${toData.name}`;
  const newTo = `${exerciseDir}/${fromIndex}-${toName}`;

  await Deno.rename(oldFrom, newFrom);
  await Deno.rename(oldTo, newTo);
};

const handleRename = async (args: string[]): Promise<void> => {
  const [idx, newN] = args;
  const index = parseInt(idx);

  if (!isValidExerciseNb(index)) {
    console.error("File index is not a valid positive number");
    Deno.exit(1);
  }

  if (!isValidFileName(newN)) {
    console.error(
      "Filename must begin with a letter and contain only letters and numbers"
    );
    Deno.exit(1);
  }

  const [exerciseNumber, , { name }] = findFolderByIndex(index);

  if (!exerciseNumber) {
    console.error(`Unable to find exercise number ${index}`);
    Deno.exit(1);
  }

  const newName = `${exerciseDir}/${exerciseNumber}-${newN}`;
  const oldName = `${exerciseDir}/${name}`;
  await Deno.rename(oldName, newName);
};

const commands = [
  "create",
  "insert",
  "delete",
  "remove",
  "swap",
  "rename",
  "help",
] as const;
type Commands = typeof commands[number];
const checkCommands = (s: string): s is Commands => {
  return commands.includes(s as Commands);
};

const main = async (args: string[]): Promise<void> => {
  const [mode, ...rest] = args;

  if (!checkCommands(mode)) {
    await getHelp();
    console.error(`Invalid flag ${mode} \r\n`);
    Deno.exit(1);
  }

  switch (mode) {
    case "create":
      await handleCreate(rest);
      break;
    case "insert":
      await handleInsert(rest);
      break;
    case "delete":
      await handleDelete(rest);
      break;
    case "remove":
      await handleRemove(rest);
      break;
    case "swap":
      await handleSwap(rest);
      break;
    case "rename":
      await handleRename(rest);
      break;
    case "help":
      await getHelp();
      break;
    default:
      getHelp();
      break;
  }

  Deno.exit(0);
};

main(Deno.args);
