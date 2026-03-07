// ===============================
// SECTION 1 – If / If Else
// ===============================

// 1
let num = 15
if(num > 10){
console.log("Number is big")
}

// 2
let age = 20
if(age >= 18){
console.log("Eligible to vote")
}else{
console.log("Not eligible")
}

// 3
let temperature = 32
if(temperature > 30){
console.log("Hot")
}else{
console.log("Cool")
}

// 4
let number = -5
if(number >= 0){
console.log("Positive number")
}else{
console.log("Negative number")
}

// 5
let n = 8
if(n % 2 == 0){
console.log("Even number")
}else{
console.log("Odd number")
}



// ===============================
// SECTION 2 – Else If
// ===============================

// 1
let marks = 85

if(marks >= 90){
console.log("Grade A")
}
else if(marks >= 70){
console.log("Grade B")
}
else if(marks >= 50){
console.log("Grade C")
}
else{
console.log("Fail")
}


// 2
let hour = 14

if(hour < 12){
console.log("Morning")
}
else if(hour < 16){
console.log("Afternoon")
}
else if(hour < 20){
console.log("Evening")
}
else{
console.log("Night")
}


// 3
let numCheck = 0

if(numCheck > 0){
console.log("Positive")
}
else if(numCheck < 0){
console.log("Negative")
}
else{
console.log("Zero")
}


// 4
let score = 75

if(score >= 100){
console.log("Winner")
}
else if(score >= 50){
console.log("Good")
}
else{
console.log("Try again")
}


// 5 Largest of 3 numbers
let a = 12
let b = 25
let c = 18

if(a > b && a > c){
console.log("A is largest")
}
else if(b > a && b > c){
console.log("B is largest")
}
else{
console.log("C is largest")
}



// ===============================
// SECTION 3 – Switch Statement
// ===============================

// 1
let day = 1

switch(day){
case 1:
console.log("Monday")
break

case 2:
console.log("Tuesday")
break

case 3:
console.log("Wednesday")
break

default:
console.log("Invalid day")
}


// 2
let trafficLight = "Red"

switch(trafficLight){

case "Red":
console.log("Stop")
break

case "Yellow":
console.log("Ready")
break

case "Green":
console.log("Go")
break

}


// 3
let month = 12

switch(month){

case 12:
case 1:
case 2:
console.log("Winter")
break

case 3:
case 4:
case 5:
console.log("Summer")
break

default:
console.log("Rainy")
}


// 4
let role = "Admin"

switch(role){

case "Admin":
console.log("Full access")
break

case "User":
console.log("Limited access")
break

case "Guest":
console.log("View only")
break

}


// 5
let grade = "A"

switch(grade){

case "A":
console.log("Excellent")
break

case "B":
console.log("Good")
break

case "C":
console.log("Average")
break

default:
console.log("Needs improvement")

}



// ===============================
// SECTION 4 – For Loop
// ===============================

// 1
for(let i=1;i<=10;i++){
console.log(i)
}

// 2
for(let i=10;i>=1;i--){
console.log(i)
}

// 3
for(let i=2;i<=20;i+=2){
console.log(i)
}

// 4
for(let i=1;i<=20;i+=2){
console.log(i)
}

// 5 Table of 5
for(let i=1;i<=10;i++){
console.log("5 x " + i + " = " + (5*i))
}



// ===============================
// SECTION 5 – While Loop
// ===============================

// 1
let i = 1
while(i<=5){
console.log(i)
i++
}

// 2
i = 5
while(i>=1){
console.log(i)
i--
}

// 3
i = 2
while(i<=10){
console.log(i)
i += 2
}

// 4 Sum 1 to 10
let sum = 0
i = 1

while(i<=10){
sum = sum + i
i++
}

console.log("Sum =",sum)


// 5 Squares
i = 1
while(i<=5){
console.log(i*i)
i++
}



// ===============================
// SECTION 6 – Do While
// ===============================

// 1
i = 1
do{
console.log(i)
i++
}while(i<=5)


// 2
i = 5
do{
console.log(i)
i--
}while(i>=1)


// 3 Multiples of 3
i = 3
do{
console.log(i)
i += 3
}while(i<=30)


// 4 Divisible by 4
i = 4
do{
console.log(i)
i += 4
}while(i<=20)


// 5 Until value reaches 10
i = 1
do{
console.log(i)
i++
}while(i<=10)



// ===============================
// SECTION 7 – For Of
// ===============================

// 1
let text = "javascript"

for(let char of text){
console.log(char)
}


// 2
let fruits = ["apple","banana","orange"]

for(let fruit of fruits){
console.log(fruit)
}


// 3 Count characters
let count = 0

for(let char of text){
count++
}

console.log("Total characters:",count)


// 4 Print vowels
let str = "javascript"

for(let ch of str){

if("aeiou".includes(ch)){
console.log(ch)
}

}


// 5 Sum array
let arr = [10,20,30]

let total = 0

for(let num of arr){
total += num
}

console.log("Sum =",total)



// ===============================
// SECTION 8 – For In (Object)
// ===============================

// 1
let student = {

name:"Sudeer",
age:23,
department:"IT"

}

for(let key in student){
console.log(student[key])
}


// 2 Print keys
for(let key in student){
console.log(key)
}


// 3 Key + value
for(let key in student){
console.log(key + " : " + student[key])
}



// ===============================
// SECTION 9 – Functions
// ===============================

// 1
function add(a,b){

return a + b

}

console.log(add(5,7))


// 2
function square(num){

return num * num

}

console.log(square(6))
