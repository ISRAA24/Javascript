
// Problem 1

let x = 5;
let y = 4;

console.log("Given: x = 5, y = 4");
console.log("");
console.log("1. x + y =", x + y);                    
console.log("2. x - y =", x - y);                    
console.log("3. x * y + 3 =", x * y + 3);            
console.log("4. x + y * 2 =", x + y * 2);            
console.log("5. (x + y) * 2 =", (x + y) * 2);        
console.log("6. x / y =", x / y);                    
console.log("7. x % y =", x % y);                    
console.log("8. (x - 2) * (y + 1) =", (x - 2) * (y + 1)); 
console.log("===============================");


//Problem 2
let a = 10;
let b = "Hello";
let c = true;
let d = {name: "Backend"};

console.log("Variable a =", a, "-> Type:", typeof a);         // number
console.log("Variable b =", b, "-> Type:", typeof b);         // string
console.log("Variable c =", c, "-> Type:", typeof c);         // boolean
console.log("Variable d =", d, "-> Type:", typeof d);         // object
console.log("===============================");

//Problem 3
x = 7;
y = 10;

console.log("Given: x = 7, y = 10");
console.log("");
console.log("1. x > y =", x > y);           
console.log("2. x >= y =", x >= y);         
console.log("3. x < y =", x < y);           
console.log("4. x <= y =", x <= y);         
console.log("5. x == y =", x == y);         
console.log("6. x === y =", x === y);       
console.log("7. x != y =", x != y);         
console.log("8. x !== y =", x !== y);       
console.log("===============================");


//problem 4
a = true;
b = false;

console.log("Given: a = true, b = false");
console.log("");
console.log("1. a && b =", a && b);         
console.log("2. a || b =", a || b);         
console.log("3. !a =", !a);                 
console.log("4. (a && !b) =", (a && !b));   
console.log("5. (!a || b) =", (!a || b));   
console.log("===============================");


//Problem 5
let num = 20;
let str = " years old";

console.log("Given: num = 20, str = ' years old'");
console.log("");
console.log('1. num + str =', num + str);                           
console.log('2. "Age: " + num =', "Age: " + num);                   
console.log('3. "Result = " + (num + 5) =', "Result = " + (num + 5)); 
console.log('4. "20" + 10 =', "20" + 10);                           
console.log('5. (20 + 10) + " days" =', (20 + 10) + " days");       
console.log('6. "JS" + " " + "Course" =', "JS" + " " + "Course");   
console.log("===============================");


//Problem 6
let n = 10;
console.log("Initial value: n =", n);

n += 5;
console.log("1. n += 5 -> n =", n);    

n -= 3;
console.log("2. n -= 3 -> n =", n);    

n *= 2;
console.log("3. n *= 2 -> n =", n);    

n /= 5;
console.log("4. n /= 5 -> n =", n);    

n %= 4;
console.log("5. n %= 4 -> n =", n);    
console.log("===============================");


//Problem 7
x = 8;
console.log("Initial value: x =", x);
console.log("");

console.log("1. ++x =", ++x);           
console.log("   x is now:", x);

let temp = x++;
console.log("2. x++ =", temp);          
console.log("   x is now:", x);         
console.log("3. --x =", --x);           
console.log("   x is now:", x);

temp = x--;
console.log("4. x-- =", temp);          
console.log("   x is now:", x);         
console.log("===============================");


//Problem 8
a = 4;
b = 2;
c = "3";

console.log("Given: a = 4, b = 2, c = '3'");
console.log("");
console.log("1. a + b + c =", a + b + c);                    
console.log("2. a + (b + c) =", a + (b + c));                
console.log("3. (a + b) * Number(c) =", (a + b) * Number(c)); 
console.log("4. a + b * c =", a + b * c);                    