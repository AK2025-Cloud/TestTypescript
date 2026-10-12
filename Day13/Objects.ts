// object - object contains properties and behaviour, object contains varibales & methods
// object is collection of key and value pairs 


// Ex: 
// Employee --name ,design ,sal dep
// bonus(),getemdetails(),setdetails()

// student - name ,sid ,grade 
// getdeatils(), setdeatils()


// Diffrent ways to crate an object in js/TS
// 1.using 'object' type -Directly define the values for variable (JS/TS)
// 2.Inline Type Object-We also define the datatype of the keys(TS)
// 3.Using type aliases(Js/Ts)
// 4.Using the classes (Js ES16/TS)

// 1. Using 'object' type -Directly define the values for variable
// The Typescript 'object' type represents all values that are not in primitive types.

/* let employee:object ={
    name:"John",
    age:30,
    salary:50000,
    job:"Engineer"
} */

let employee ={
    name:"John",
    salary:50000,
    job:"Engineer",
    getDetails:function():string{
        // console.log(this.name,this.salary,this.job);
        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }
}

console.log(typeof  employee); //object

// accessing object - appraoch1 (using.notation)

console.log(employee.name,employee.salary,employee.job); //John 50000 Engineer
console.log(employee.getDetails()); //John is a Engineer earning 50000

//Accessing Object - appraoch2 (using bracket notatin)
console.log(employee["name"],employee["salary"],employee["job"]);
console.log(employee["getDetails"]());


//Modify the value
employee.job="Manager"; //employee["job"]="Manager";
console.log("Modified job is :",employee.job); //Manager

//========================================================================================

//2. Inline Type Object - We also define the datatype of the keys (TS)

let student:{
    name:string,
    age:number,
    grade:string,
    getSummary: ()=>string
} = 
{
    name:"Scott",
    age:15,
    grade:"A",
    getSummary: function()
    {
    return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
}
console.log(student.getSummary()); //Scott is 15 years old and scored grade A



let student1:{
    name:string,
    age:number,
    grade:string,
    getSummary: ()=>string
} = 
{
    name:"Marry",
    age:16,
    grade:"B",
    getSummary: function()
    {
    return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
};
console.log(student1.getSummary()); //Marry is 16 years old and scored grade B

// ===========================================================
// 3. Using  'type' aliases (TS): allows creatinmg a new name for an exsiting type

// Examples 1:

type Product={
    name :string,
    price:number,
    getInfo: ()=> String
};

let book1:Product=
{
    name:"learn Java",
    price: 300,
    getInfo : function()
    {
        return `${this.name} costs ${this.price}`;
    }
}


let book2:Product=
{
    name:"learn Python",
    price: 500,
    getInfo : function()
    {
        return `${this.name} costs ${this.price}`;
    }
}

let book3:Product=
{
    name:"learn JS",
    price: 600,
    getInfo : function()
    {
        return `${this.name} costs ${this.price}`;
    }
}
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());


// Example 2 : INtersection Types 
 type Personal={
    name:string,
    age:number
 };

 type contact ={
    email:string,
    phone: number
 }

 type Candidate = Personal & contact & 
{
    getContactInfo:()=>string;
}

let cand:Candidate={
    name:"Scott",
    age:25,
    email:"abc@gmail.com",
    phone: 1234567890,
    getContactInfo: function(){
        return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
    }
}

console.log(cand.getContactInfo());


// ====================================================
// 4.Using the classess (Js/TS)

class Person{
    ssn:string;
    firstName:string;
    lastName:string;

constructor(ssn:string,firstName:string,lastName:string)
{
    this.ssn=ssn;
    this.firstName=firstName;
    this.lastName=lastName;
}

getFullName():string{
    return `${this.firstName} ${this.lastName}`;
}

getDetails():string{
return `SSN:${this.ssn},Name:${this.getFullName()}`;    
}

}

// object creation
let person1=new Person('11111111',"'Johnn","Kenedy");
console.log(person1.getDetails());

let person2=new Person('22222222',"'David","D");
console.log(person2.getDetails());

let person3=new Person('3333333',"'Young","Joy");
console.log(person3.getDetails());










// =======================================================
// 4. Using the classes (JS/TS)





