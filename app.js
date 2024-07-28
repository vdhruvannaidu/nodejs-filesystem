const fs = require("fs/promises");
// const { buffer } = require("stream/consumers");
import { unlink } from 'node:fs';
const unlink = require('node:fs')
(async () => {
  //commands
  const CREATE_FILE = "create a file";
  const DELETE_FILE = "delete a file";
  const RENAME_FILE = "rename a file";
  const ADDTOFILE_FILE = "delete a file";

  const commandFileHandler = await fs.open("./command.txt", "r");

  commandFileHandler.on("change", async () => {

    //create a file
    const createFile = async (path) => {
      try {
        //we want to check whether the file already exists
        const existingFileHandle = await fs.open(path, "r");
        existingFileHandle.close();
        return console.log(`The file ${path} already exists`);
      } catch (e) {
        //we don have a file we should create it...
        const newFileHandle = await fs.open(path, "w");
        console.log("new file was created");
        newFileHandle.close();
      }
    };

    //delete a file
    const deleteFile = async (path ) => {
      try {
        //we want to check whether the file already exists
        const existingFileHandle = await fs.open(path, "w");
        existingFileHandle.close();
        return console.log(`The file ${path} doesn't exists`);
      } catch (e) {
        //we don have a file we should create it...
        const deleteFileHandle = await unlink(path, "w");
        console.log("new file was created");
        deleteFileHandle.close();
      }
    };

    //rename a file

    const renameFile = async(oldPath, newPath)=>{
      console.log(`Rename file ${path}`);
    }
    //read a file

    const addToFile = async(Path, content)=>{
      console.log(`addToFile file ${path}`);
    }

    const size = (await commandFileHandler.stat()).size;
    const buff = Buffer.alloc(size);
    const offset = 0;
    const length = buff.byteLength;
    const position = 0;
    await commandFileHandler.read(buff, offset, length, position);
    const command = buff.toString("utf-8");
    //  create a file;
    // create a file <path>
    if (command.includes(CREATE_FILE)) {
      const filePath = command.substring(CREATE_FILE.length + 1);
      createFile(filePath);
    }

    //delete a file
    //delete a file <path>
    if (command.includes(DELETE_FILE)) {
      const filePath = command.substring(DELETE_FILE.length + 1);
      deleteFile(filePath);
    }

    console.log(buff.toString("utf-8"));
  });

  const watcher = fs.watch("./command.txt");
  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();

// const { unlink } = require('node:fs/promises');

// (async function(path) {
//   try {
//     await unlink(path);
//     console.log(`successfully deleted ${path}`);
//   } catch (error) {
//     console.error('there was an error:', error.message);
//   }
// })('command.txt');
