const colors = require('colors');

let empleados = [{
    id: 1,
    nombre: 'Fabio'
},{
    id: 2,
    nombre: 'Ana'
},{
    id: 3,
    nombre: 'Pedro'
}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find( empleado => empleado.id === id);

    if( !empleadoDB ) {
        callback(`No existe un empleado con el ID ${id}`);
    }else{
        callback(null,empleadoDB)
    }

}

let getSalarios = (empleado, callback) => {

    let salarioDB = salarios.find( salario => salario.id === empleado.id);

    if(!salarioDB){
        callback(`No se encontro un salario para el empleado ${ empleado.nombre }`);
    }else{
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario, id: empleado.id })
    }
};

getEmpleado(3, (err, empleado) => {

    if(err){
        return console.log(err);
    }
    //console.log(empleado);
    getSalarios(empleado, (err, resp) => {
        if(err){
            return console.log(err);
        }
        console.log(`El salario de ${ resp.nombre} es de $${ resp.salario}`);
    });

});


console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass


// outputs red text
console.log("this is an error".error);
 
// outputs yellow text
console.log("this is a warning".warn);