const descripcion = {
    alias: 'd',
    demand: true,
    dec: 'descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'crear una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado o contenido de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'para eliminar una tarea existente', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}