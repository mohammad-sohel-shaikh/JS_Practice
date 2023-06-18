class Employee{
    constructor(givenName,givenExperience,givenCity){
        this.name=givenName
        this.experience=givenExperience
        this.city=givenCity
    }
    slogen(){
        return `Hello this is Name of user :${this.name}`

    }
}
emp= new Employee('sohel',35,'Ahemedabad');
console.log(emp.slogen());

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenCity,Age,Address){
        super(givenName,givenExperience,givenCity)
        this.age=Age
        this.adrees=Address
    }
    static Mul(a,b){
        return a*b;
    }

}
pro=new Programmer('Zaid',23,'Gandhinagar','15','abcdef')
console.log(pro);