// ===============================
// 1. Functions (1–6)
// ===============================

// 1
function greetUser(name){
console.log("Welcome to Stackly, " + name)
}
greetUser("Sudeer")

// 2
function calculateSalary(basic, bonus){
return basic + bonus
}
console.log(calculateSalary(20000, 5000))

// 3
function checkEvenOdd(num){
if(num % 2 === 0){
return "Even"
}else{
return "Odd"
}
}
console.log(checkEvenOdd(7))

// 4
function findMax(a,b,c){
return Math.max(a,b,c)
}
console.log(findMax(10,25,15))

// 5
function calculateGST(price){
return price + (price * 0.18)
}
console.log(calculateGST(1000))

// 6
function login(username,password){
if(username === "admin" && password === "1234"){
console.log("Login Successful")
}else{
console.log("Invalid Login")
}
}
login("admin","1234")



// ===============================
// 2. Default Parameters (7–9)
// ===============================

// 7
function createEmployee(name, role="Trainee"){
console.log("Employee:",name,"Role:",role)
}
createEmployee("Rahul")

// 8
function calculateDiscount(price, discount=10){
let final = price - (price * discount / 100)
console.log("Price after discount:",final)
}
calculateDiscount(1000)

// 9
function orderFood(item, quantity=1){
console.log("Order:",item,"Quantity:",quantity)
}
orderFood("Pizza")



// ===============================
// 3. Scope (10–12)
// ===============================

// 10
let company = "Stackly"

function showCompany(){
console.log(company)
}
showCompany()

// 11
if(true){
var x = 10
let y = 20
const z = 30
}

console.log(x) 
// console.log(y) -> error
// console.log(z) -> error

// 12
function secret(){
let password = "12345"
}
secret()
// console.log(password) -> error



// ===============================
// 4. Hoisting (13–15)
// ===============================

// 13
console.log(testVar)
var testVar = 10

// 14
// console.log(testLet)
let testLet = 20

// 15
sayHello()

function sayHello(){
console.log("Hello from hoisting")
}



// ===============================
// 5. Function Types (16–18)
// ===============================

// 16
function example(){
console.log("Named Function Example")
}
example()

// 17
let multiply = function(a,b){
return a*b
}
console.log(multiply(4,5))

// 18
let square = (num) => num*num
console.log(square(6))



// ===============================
// 6. Callback & Higher Order (19–22)
// ===============================

// 19
function processData(callback){
callback()
}

function showMessage(){
console.log("Processing completed")
}

processData(showMessage)


// 20
function calculate(a,b,operation){
return operation(a,b)
}

function add(a,b){
return a+b
}

function sub(a,b){
return a-b
}

console.log(calculate(10,5,add))
console.log(calculate(10,5,sub))


// 21
function finishTask(){
console.log("Task Completed")
}

function doWork(callback){
console.log("Doing work...")
callback()
}

doWork(finishTask)


// 22
function getUserData(callback){
let user = {name:"Sudeer", role:"Developer"}
callback(user)
}

getUserData(function(data){
console.log(data)
})



// ===============================
// 7. Currying (23–24)
// ===============================

// 23
function addCurried(a){
return function(b){
return function(c){
return a+b+c
}
}
}

console.log(addCurried(2)(3)(4))


// 24
function multiplyCurried(a){
return function(b){
return function(c){
return a*b*c
}
}
}

console.log(multiplyCurried(2)(3)(4))



// ===============================
// 8. IIFE (25–26)
// ===============================

// 25
(function(){
console.log("Website Loaded")
})()

// 26
(function(price){
let discountPrice = price - price*0.1
console.log("Discount price:",discountPrice)
})(1000)



// ===============================
// 9. Generator Functions (27–28)
// ===============================

// 27
function* couponGenerator(){
yield "SAVE10"
yield "STACK20"
yield "WELCOME5"
}

let coupons = couponGenerator()
console.log(coupons.next().value)
console.log(coupons.next().value)
console.log(coupons.next().value)


// 28
function* motivation(){
yield "Keep Coding!"
yield "Practice Daily!"
yield "Never Give Up!"
}

let msg = motivation()
console.log(msg.next().value)
console.log(msg.next().value)
console.log(msg.next().value)



// ===============================
// 10. Spread Operator (29–31)
// ===============================

// 29
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let merged = [...arr1,...arr2]
console.log(merged)

// 30
let arr = [10,20,30]
let clone = [...arr]
console.log(clone)

// 31
let obj1 = {name:"John"}
let obj2 = {role:"Developer"}
let mergedObj = {...obj1,...obj2}
console.log(mergedObj)



// ===============================
// 11. Rest Operator (32–34)
// ===============================

// 32
function sumAll(...numbers){
let total = 0
for(let n of numbers){
total += n
}
return total
}
console.log(sumAll(1,2,3,4))


// 33
function showArgs(first,...rest){
console.log("First:",first)
console.log("Rest:",rest)
}

showArgs(1,2,3,4)


// 34
function totalBill(...prices){
let total = 0
for(let p of prices){
total += p
}
return total
}
console.log(totalBill(100,200,300))



// ===============================
// 12. Destructuring (35–38)
// ===============================

// 35
let numbers = [10,20,30,40]
let [a,b,c,d] = numbers
console.log(a,b,c,d)

// 36
let emp = {name:"Naveen",role:"Developer",salary:40000}
let {name,role,salary} = emp
console.log(name,role,salary)

// 37
let data = [5,10,15,20]
let [first,,,last] = data
console.log(first,last)

// 38
let nested = [1,2,[3,4]]
let [n1,n2,[n3,n4]] = nested
console.log(n3,n4)



// ===============================
// 13. Array Manipulation (39–40)
// ===============================

// 39
let arrTest = [1,2,3,4,5]

arrTest.push(6)
arrTest.pop()
arrTest.shift()
arrTest.unshift(0)

console.log(arrTest)


// 40
let list = [1,2,3,40,50,6]
list.splice(3,2,4,5)

console.log(list)