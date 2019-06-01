const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puede grabar', err);
    })

}

const cargarDB = () => {
    
    try{
        // saco la informacion que esta en el archivo
        listadoPorHacer = require('../db/data.json');
    }catch{
        listadoPorHacer = [];
    }    

}

const crear = ( descripcion ) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    console.log('index',index);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrado = ( descripcion ) => {

    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );

    if( listadoPorHacer.length  === nuevoListado.length ){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = { crear, getListado, actualizar, borrado }   