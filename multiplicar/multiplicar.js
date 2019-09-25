const fs = require("fs");
const color = require("colors");

let listarTabla = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    } else if (!Number(limite)) {
      reject(`El valor introducido ${limite} no es un número`);
      return;
    }
    for (let i = 1; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}`.magenta);
    }
  });
};

let createFile = base => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido "${base}" no es un número`);
      return;
    }

    let data = "";

    for (let index = 1; index <= 10; index++) {
      console.log(`${base} * ${index} = ${base * index}`.green);
      data += `${base} * ${index} = ${base * index}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  createFile,
  listarTabla
};
