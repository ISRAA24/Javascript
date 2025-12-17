
// Problem 1

let x = 5;
let y = 4;

console.log("x + y =", x + y);                    
console.log("x - y =", x - y);                    
console.log("x * y + 3 =", x * y + 3);            
console.log("x + y * 2 =", x + y * 2);            
console.log("(x + y) * 2 =", (x + y) * 2);        
console.log("x / y =", x / y);                    
console.log("x % y =", x % y);                    
console.log("(x - 2) * (y + 1) =", (x - 2) * (y + 1)); 
console.log("===============================");


//Problem 2
let a = 10;
let b = "Hello";
let c = true;
let d = {name: "Backend"};

console.log( "Type of :", a , typeof a);         
console.log( "Type of :", b , typeof b);         
console.log( "Type of :", c , typeof c);         
console.log( "Type of :", d , typeof d);         
console.log("===========================================");

//Problem 3
x = 7;
y = 10;


console.log("x > y =", x > y);           
console.log("x >= y =", x >= y);         
console.log("x < y =", x < y);           
console.log("x <= y =", x <= y);         
console.log("x == y =", x == y);         
console.log("x === y =", x === y);       
console.log("x != y =", x != y);         
console.log("x !== y =", x !== y);       
console.log("===============================");


//problem 4
a = true;
b = false;

console.log("a && b =", a && b);         
console.log("a || b =", a || b);         
console.log("!a =", !a);                 
console.log("(a && !b) =", (a && !b));   
console.log("(!a || b) =", (!a || b));   
console.log("===============================");


//Problem 5
let num = 20;
let str = " years old";


console.log('num + str =', num + str);                           
console.log('"Age: " + num =', "Age: " + num);                   
console.log('"Result = " + (num + 5) =', "Result = " + (num + 5)); 
console.log('"20" + 10 =', "20" + 10);                           
console.log('(20 + 10) + " days" =', (20 + 10) + " days");       
console.log('"JS" + " " + "Course" =', "JS" + " " + "Course");   
console.log("===========================");


//Problem 6
let n = 10;
console.log("Initial value: n =", n);
n += 5;
console.log(" n += 5 -> n =", n);    
n -= 3;
console.log(" n -= 3 -> n =", n);    
n *= 2;
console.log(" n *= 2 -> n =", n);    
n /= 5;
console.log(" n /= 5 -> n =", n);    
n %= 4;
console.log(" n %= 4 -> n =", n);    
console.log("=================================");


//Problem 7
x = 8;

console.log("++x =", ++x);           
console.log("x is now:", x);

let temp = x++;
console.log("x++ =", temp);          
console.log("x is now:", x);         
console.log("--x =", --x);           
console.log("x is now:", x);

temp = x--;
console.log("x-- =", temp);          
console.log("x is now:", x);         
console.log("===============================");


//Problem 8
a = 4;
b = 2;
c = "3";
console.log(" a + b + c =", a + b + c);                    
console.log(" a + (b + c) =", a + (b + c));                
console.log(" (a + b) * Number(c) =", (a + b) * Number(c)); 
console.log(" a + b * c =", a + b * c);                    