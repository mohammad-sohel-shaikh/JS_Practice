
// class Name{
    
//     hike=1000;
//     constructor(name,age,id){
//         this.name1=name;
//         this.age=age;
//         this.id=id;
//     }
//     all(){
//         alert(`hi ${this.name1} your age ${this.age} and your id is ${this.id}`);
//         console.log(`hi ${this.name1} your age ${this.age} and your id is ${this.id}`);
//     }
// }

// class Student extends Name{

//     constructor(name,age,id,add){
//         super(name,age,id)
//         this.add=add;

//     }
//     show(){
//         alert(`hi ${this.name1} your age ${this.age} and your id is ${this.id} and your address ${this.add} `);
//     }

// }
//  let name=new Name('sohel',22,10)
//  name.all();
//  alert(name.hike);

//  let stu=new Student("Zishan",21,8,"fatevadi")
//  stu.all();
//  stu.show();
//  stu.show();
// -------------------------------------------------------

class Animal {
    name = 'animal';
  
    constructor() {
        alert(this.name) // (*)
    }
  }
  
  class Rabbit extends Animal {
    name = 'rabbit';
    constructor() {
        super();
        alert(this.name); // (*)
      }
    
  }
  
  new Animal(); // animal
  new Rabbit(); // animal
