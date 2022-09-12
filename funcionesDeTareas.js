const fs = require('fs');

const tareas = require('./tareas.json');

module.exports = {

    listarTarea : () =>{
        tareas.forEach((tarea,index) =>{
            console.log(`${index + 1} - ${tarea.titulo} - estado: ${tarea.estado} - ID ${tarea.id}`)
        });
        
        return null
    },
    
     
    guardarTarea : (tarea) => {

        tareas.push(tarea);
        fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,3))

        return console.log('Tarea agregada')
    },
    actualizarTarea : (id) => {
           
        let tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.estado = 'completado';
                return tarea
            }
            return tarea
        })
        
        fs.writeFileSync('./tareas.json',JSON.stringify(tareasActualizadas,null,3))


        return console.log('Tarea actualizada')
    },
    eliminarTarea : (id) => {

        let tareasFiltradas = tareas.filter(tarea => {
            return tarea.id !== id
        })

        fs.writeFileSync('./tareas.json',JSON.stringify(tareasFiltradas,null,3))

        return console.log('Tarea eliminada')
    }, 
    filtrarPorEstado : (estado) => {

        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado === estado

        });
        tareasFiltradas.forEach((tarea,index) =>{
            console.log(`${index + 1} - ${tarea.titulo} - estado: ${tarea.estado} - ID ${tarea.id}`)
        });
            
    }

}


