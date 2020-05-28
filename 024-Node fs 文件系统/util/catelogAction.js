const fs = require('fs');

// 创建
const create = (catalog) => {
  // 判断没有目录则生成
  if (!fs.existsSync(catalog)) {
    const result = fs.mkdirSync(catalog);
    console.log('---创建成功：');
    console.log(result);
  }
};;

// 修改
const rename = (prevName, nextName) => {
  if (!fs.existsSync(nextName)) {
    const result = fs.renameSync(prevName, nextName);
    console.log('---修改成功：');
    console.log(result);
  }
};

// 读取
const readdir = (catalog) => {
  const result = fs.readdirSync(catalog);
  console.log('---读取成功：');
  console.log(result);
};

// 删除（空文件夹/目录）
const rmdir = (catalog) => {
  if (fs.existsSync(catalog)) {
    const result = fs.rmdirSync(catalog);
    console.log('---删除成功');
    console.log(result);
  }
};

// 判断文件或者目录是否存在
const exists = (catalog) => {
  console.log('---是否存在：', fs.existsSync(catalog));
  return fs.existsSync(catalog);
}

// 获取文件或者目录的详细信息
const stat = (catelog) => {
  const result = fs.statSync(catelog);
  console.log('---获取成功：');
  console.log(result);
}

// 判断是文件还是目录
const isFileOrCatalog = (catalog) => {
  if (fs.existsSync(catalog)) {
    const statResult = fs.statSync(catalog);
    if (statResult.isFile()) {
      console.log('判断：文件');
    } else if (statResult.isDirectory()) {
      console.log('判断：目录');
    }
  }
}

module.exports = {
  create,
  rename,
  readdir,
  rmdir,
  exists,
  stat,
  isFileOrCatalog,
};