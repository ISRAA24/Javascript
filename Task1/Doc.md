# JavaScript Task 1 - Documentation

---

## Introduction

JavaScript is a high-level, interpreted programming language that is one of the core technologies of the web. This documentation covers fundamental concepts including data types, variables, and operators.

---

## Data Types

JavaScript has two categories of data types:

### Primitive Data Types
- **Number**: Represents numeric values (integers and floating-point)
- **String**: Represents textual data
- **Boolean**: Represents true/false values
- **Undefined**: Variable declared but not assigned
- **Null**: Intentional absence of value
- **Symbol**: Unique identifier (ES6)
- **BigInt**: Large integers (ES2020)

### Non-Primitive Data Types
- **Object**: Collection of key-value pairs
- **Array**: Ordered list of values
- **Function**: Callable objects

---

## Variables

JavaScript has three ways to declare variables:

### `var`
- Function-scoped or globally-scoped
- Can be redeclared and updated
- Hoisted to the top

```javascript
var x = 10;
var x = 20; // Valid
```

### `let`
- Block-scoped
- Can be updated but not redeclared in same scope
- Not hoisted

```javascript
let y = 10;
y = 20; // Valid
let y = 30; // Error
```

### `const`
- Block-scoped
- Cannot be updated or redeclared
- Must be initialized at declaration

```javascript
const z = 10;
z = 20; // Error
```

---

## Operators

### Arithmetic Operators
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (remainder)
- `**` Exponentiation

### Comparison Operators
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal
- `<=` Less than or equal
- `==` Equal (type coercion)
- `===` Strict equal (no type coercion)
- `!=` Not equal
- `!==` Strict not equal

### Logical Operators
- `&&` AND
- `||` OR
- `!` NOT

### Assignment Operators
- `=` Assignment
- `+=` Add and assign
- `-=` Subtract and assign
- `*=` Multiply and assign
- `/=` Divide and assign
- `%=` Modulus and assign

### Increment/Decrement Operators
- `++x` Pre-increment (increment first, then use)
- `x++` Post-increment (use first, then increment)
- `--x` Pre-decrement
- `x--` Post-decrement

---

## Type Conversion

### Implicit Conversion (Type Coercion)
JavaScript automatically converts types when needed:

```javascript
"5" + 2    // "52" (number to string)
"5" - 2    // 3 (string to number)
true + 1   // 2 (boolean to number)
```

### Explicit Conversion
Manual type conversion:

```javascript
Number("123")   // 123
String(123)     // "123"
Boolean(1)      // true
parseInt("123") // 123
parseFloat("12.34") // 12.34
```

---

## Number Object

The Number object has useful properties and methods:

```javascript
Number.MAX_VALUE        
Number.MIN_VALUE        
Number.POSITIVE_INFINITY 
Number.NEGATIVE_INFINITY 
Number.NaN              
Number.isInteger(5)     
Number.isNaN(NaN)       
Number.parseFloat("12.34") 
```

---



