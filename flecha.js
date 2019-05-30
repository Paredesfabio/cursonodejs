let deadpool = {
    nombre: 'Fabio', 
    apellidos: 'Paredes', 
    poder: 'Programar', 
    getNombre() { return `${this.nombre} ${this.apellidos} - poder ${this.poder}`}
};

console.log(deadpool.getNombre() );

