const process = require('process')

const {listarTarea,guardarTarea,actualizarTarea,eliminarTarea,filtrarPorEstado,} = require('./funcionesDeTareas');

const accion = process.argv[2];

switch (accion) {
    case 'listar':
        listarTarea()
        break
    case 'agregar':
        let titulo = process.argv[3];
        let nuevaTarea = {
            id : new Date().getTime(),
            titulo,
            estado : 'pendiente'
        }
        guardarTarea(nuevaTarea)
        break
    case 'actualizar':
        actualizarTarea(+process.argv[3])
        break
    case 'eliminar':
        eliminarTarea(+process.argv[3])
        break
    case 'filtrar':
        filtrarPorEstado(process.argv[3])
        break
    case undefined :
        console.log('Tienes que pasar una acción');
        break
    default:
        console.log('No entiendo que quieres hacer');
        break;
 }