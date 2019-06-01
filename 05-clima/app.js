const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

const getinfo = async (direccion) => {
    try {
        const coords = await lugar.getLugatLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion.red } es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}
 
getinfo(argv.direccion)
    .then(console.log)
    .catch(err => {
        console.log('Error en la respuesta: ', err);
    });