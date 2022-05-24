let Pizzas = [
    {
    id: '1',
    nombre: 'Muzza', 
    ingredientes : ['Salsa de tomate, Muzzarella y Oregano'], 
    precio: 'Su precio es: $500',
    },
    
    {
    id: '2',
    nombre: 'Especial', 
    ingredientes: ['Salsa de tomate, Muzzarella, Jamon Cocido y Oregano'], 
    precio: 'Su precio es: $800',
    },
    
    {
    id: '3', 
    nombre: 'Caprese',
    ingredientes: ["Salsa de tomate, Muzzarella, Tomate en Rodajas y Albahaca"],
    precio: 'Su precio es: $700',
    },
    
    { id: '4', 
    nombre: 'Americana',  
    ingredientes: ['Salsa de tomate, Muzzarella, Panceta y PapasPay'], 
    precio: 'Su precio es: $900',
    },
    
    {
    id: '5', 
    nombre: 'Provolone', 
    ingredientes: ['Salsa de tomate, Muzzarella, Queso Provolone'], 
    precio: 'Su precio es: $850',
    },
    
    {
    id: '6', 
    nombre: 'Rucula y crudo', 
    ingredientes: ['Salsa de tomate, Muzzarella, Rucula Fresca y Jamon Crudo'], 
    precio: 'Su precio es: $1000',
    },

]


const texto = document.getElementById ('texto');
const descripcion = document.getElementById ('descripcion');    
const boton = document.getElementById ('boton');
const input = document.getElementById ('input');
const titulo = document.getElementById ('titulo');
const precio = document.getElementById ('precio');
const error = document.getElementById ('error');



boton.addEventListener ('click', () => {
    
let existe = Pizzas.find(elemento => elemento.id == input.value);

     if (existe == null) {
        
        error.style.display= 'block';
        titulo.style.display= 'none';
        precio.style.display= 'none';        

    }

    else { titulo.style.display= 'block';
            precio.style.display= 'block';
             titulo.innerText=existe.nombre;
             precio.innerText= existe.precio;  
             error.style.display= 'none';

    }

});




