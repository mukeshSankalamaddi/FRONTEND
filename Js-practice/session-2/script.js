const person ={
    firstName :"mukesh",
    LastName :"Sankalamaddi",
    age:21,
    fullName: function(){
        return this.firstName+" "+this.LastName;
    }
}

console.log(person)
console.log(person.fullName)
console.log(person.fullName())

let name1="Mukesh Reddy"
let len= name1.length;

let x="john"
console.log(typeof(x))

let y=new String("john")
console.log(typeof(y))

const obj1={a:"1",b:"2"}
const obj2=obj1
const obj3={a:"1",b:"2"}

str="apple, banana, kiwi"
part=str.slice(7,11);
console.log(part)

let text1="mukesh"
let text2="Reddy"
let text3="Sankalamaddi"
console.log(text1.concat(" ",text2," ",text3))

let nameStatement="hey my name is mukesh"
let nameArray=nameStatement.split(" ")
let charArray=nameStatement.split("")
console.log(charArray)
console.log(nameArray)

const myFirstName = "mukesh"
const mySecondName = "Reddy"
console.log(`My name is ${myFirstName} ${mySecondName}`)

let price = 10
let vat =0.5123
let total =`total: ${(price*(1+vat)).toFixed(1)}`
console.log(total)