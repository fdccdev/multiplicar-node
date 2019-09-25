const argv = require("./config/yargs").argv;
const color = require("colors");

const { createFile, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;
  case "crear":
    createFile(argv.base)
      .then(archivo => console.log(`Archivo creado: ${archivo}`.yellow))
      .catch(err => {
        console.log(err);
      });
    break;
  default:
    console.log("Comando no reconocido!");
    break;
}
