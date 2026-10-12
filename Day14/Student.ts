
/*
1. class
2. Read only properties
3.Optional property

4.Static variables and method
// 1) static properties /methods are common /shared across all the objects
   2) Static properties can be accessed thorugh class name directly.
   3) Static properties /method can be modified using any object 





 */

class Student
{
    readonly studentId:number; //Read-only property (Can only be assigneonce, inside constructor
    name:string;  //Regular property
    email?:string //Optional property (can be undefined)
    static schoolName:string="Greenwood High";  //Static variable shared among all instances/objects


// Constructor
constructor (sid:number,sname:string,email?:string)
{
    this.studentId=sid;
    this.name=sname;
    this.email=email; //If you dont pass email then it is undefined

}

// Method
 displayInfo():void{
    console.log("Student ID:",this.studentId);
    console.log("Student Name:",this.name);

    if(this.email)
    {
        console.log("Email:",this.email);
    }
     else
     {
        console.log("Email is not provided");
     }
     console.log("School Name:",Student.schoolName);
 }



// Static method to change the school name
static changeSchoolName(newName:string):void
{
    Student.schoolName=newName;
}
}

//Usage
let s1=new Student(101,"John");
let s2=new Student(102,"Bob","bob@gmail.com");

//Display student infor

s1.displayInfo();
s2.displayInfo();


//Try to modify the studentId of s1 object .
// s1.studentId=111; //Cannot assign to 'studentId' because it os as read-only property.


// chnage the school Name using staic method
Student.changeSchoolName("Sunrise Academy");

console.log("Displying studnt info after chnaging scholl name ....")
s1.displayInfo();
s2.displayInfo();




