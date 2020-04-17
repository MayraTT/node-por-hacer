// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('Crear por hacer');
        break;
    case 'listar':
        let listado = porHacer.getListado();
        // console.log(listado);
        for (let tarea of listado) {
            console.log('====== Tarea por hacer ======'.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        console.log('Actualiza las tareas por hacer');
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no es reconocido');
}