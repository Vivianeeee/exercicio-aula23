//unshift()
console.clear();
const pessoas4 = [ 'Joaquim', 'Jose', 'Silva', 'Xavier'];
let w = pessoas4.unshift('Amanda'); // w = 3

console.log(pessoas4);
console.log(w);

// Remover e inserir elementos 
// pop() 
console.clear();
const nomes1 = ['Amanda','Joaquim','Jose','Silva','Xavier'];
let x = nomes1.pop(); // x = "xavier"

console.log(nomes1);
console.log(x);

// inserir  e amanda
//unshift
const frutas2= ['Joaquim', 'José', 'Silva', 'Xavier'];
let w= frutas2.unshift('Amanda')
let t= frutas2.pop(); // w = 3
let k= frutas2.push('Zuleica');
let o= frutas2.shift();
let v = delete frutas[2];
frutas2[2] = 'Silvana';

console.log(frutas2);

// Remover e Amanda
//mudança
const  frutas3  =  [ 'Amanda' ,  'Joaquim' ,  'José' ,  'Silva' ,  'Xavier' ] ;
let z  =  frutas3 . shift ( ) ;  // z = 'Amanda'

console . log ( frutas3 ) ;

// Remover e Xavier
// pop ()
const  frutas4  =  [ 'Joaquim' ,  'José' ,  'Silva' ,  'Xavier' ] ;
let  x  =  frutas4 . pop ( ) ;  // x = "Xavier saiu"

console . log ( frutas4 ) ;



// Inserir e Zuleica
// Empurre()
const  frutas5  =  [ 'Joaquim' ,  'José' ,  'Silva' ] ;
let  y  =  frutas5 . push ( 'Zuleica' ) ;  // y = Zuleica

console . log ( frutas5 ) ;


// Remover Silva e inserir uma Silvana
//excluir
const  frutas6  =  [ 'Joaquim' ,  'José' ,  'Silva' ,  'Zuleica' ] ;
delete frutas6 ( 2 ) ;

console . log ( frutas6 ) ;


const  frutas7  =  [ 'Joaquim' ,  'José' ,  'Silvana' ,  'Zuleica' ] ;
let  b  =  frutas7

console . log ( frutas7 ) ;