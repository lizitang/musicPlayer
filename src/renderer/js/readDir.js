const electron = require('electron');
const fs = require("fs");

function readFileList(path, filesList) {
  let files = fs.readdirSync(path);
  files.forEach(function (itm, index) {
    let stat = fs.statSync(path + itm);
    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + itm + "\\", filesList)
    } else {
      let obj = {};   //定义一个对象存放文件的路径和名字
      // obj.path = path.replace(/[\\\/]$/, "");    //路径
      obj.path = path + itm;    //路径
      obj.filename = itm;   //名字
      filesList.push(obj);
    }
  })
}


function getFileList(path) {
  let filesList = [];
  readFileList(path, filesList);
  return filesList;
}

export default getFileList;
