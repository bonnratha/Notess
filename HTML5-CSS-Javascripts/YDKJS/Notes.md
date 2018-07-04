JavaScript Display Possibilities
JavaScript can "display" data in different ways:
Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().

Objects
Var ob = { a: , b: , c: }
Ob.a; ob.b; ob.c;

\*\* an array is an object that hold values (of any types) in numerically indexed position

Var arr = [ , , ,];

Example of built-in type methods -----
Obj.length;
obj.toUpperCase();
obj.toFixed(2);

Explicit coercion vs. implicit coercion

== checks value equality and === checks both value and type equality
=== checks for value equality without allowing coercion  aka “strict equality”

If, else if, else / switch / () ? : - ternary operator

Strict Mode

It disallows the implicit auto-global variable declaration from omitting the var

(function IIFE() {}) - Immediately Invoked Function Expression

\*\* be careful with object comparison, because == and === will simply check whether the references match, not anything about the underlying values.

\*\* when string is compared to a number variable, it is being coerced to the “invalid number value” NaN

\*\* variable names must be valid identifiers. They must start with a - z, A-Z, $ or \_ (0-9) ?

Global scope
Function scope
Nested Scope

Hoisting = wherever a var appears inside a scope, that declaration is taken to belong the entire scope and accessible everywhere throughout.

Closure - a way to remember and continue to access a function’s scope (its variables) even once the function has finished running.

Modules let you define private implementation details (variables, functions) that are hidden from the outside world as well as a public API that is accessible from the outside.

If a function has a this reference inside it, that this reference usually points to an object. But which object it points to depends on how the function was called.

Prototypes -

When you reference a property on a object, if that property does not exist, JavaScript will automatically use that object’s internal prototype reference to find another object to look for the property on.

 Try to emulate/fake a “class” mechanism with “inheritance”

Polyfill - refer to taking the definition of a new feature and producing a piece of code that’s equivalent to the behavior, but is able to run in older JS environment.

Transpiling - transforming and compiling
