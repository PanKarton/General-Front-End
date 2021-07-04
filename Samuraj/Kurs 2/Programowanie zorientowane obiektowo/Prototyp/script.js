// ======================
//       PROTOTYP
// ======================

// Prototyp to obiekt w funkcji konstruktora 

const Person = function(name, height) {
    this.name = name;
    this.height = height;
    this.children = [];
}

Person.prototype.addChild = function(name) {
    this.children.push(name)
}

const lukasz = new Person(`Łukasz`, 173);
const kasia = new Person(`Kasia`, 165);

// -===-
// Operator sprawdzajacy czy dany obiekt jest instancja danego konstruktora
// -===-


// Instanceof
// Zwraca true/false

const arr = [2, 3, 2, 6, 1];


// True, bo tablica jest instancją konstruktora Array 
console.log(arr instanceof Array);
// True, bo konstruktor Array jest instancją Object
console.log(arr instanceof Object);


// -===-
// Object,getPrototypeOf
// -===-

// Zwraca prototyp konstruktora argumentu

console.log(Object.getPrototypeOf(arr))

// Dopiero poprzez prototyp do którego dostęp ma obiekt mozna przedostac sie do konstruktora owego obiektu

arr.__proto__.constructor;
// lub
Object.getPrototypeOf(arr).constructor;