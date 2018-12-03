# Javascript - OOP

* Encapsulation - the capability to store related information, whether data or methods, together in an object.
* Aggregation - the capability to store one object inside another object.
* Inheritance - the capability of a class to rely upon another class (or number of classes) for some 
    of its properties or methods.
* Polymorphism - the capability to write one function or method that works in a variety of ways.

Objects are composed of attributes.  If an attribute contains a function, it is considered to be a method of the object.  Otherwise, the attribute is considered a property.

## Object Properties
* `objectName.objectProperty = propertyValue` - syntax for adding a property to an object.
* `var str = document.title` - title property of the document object.

## Object Methods
Methods are functions that let the object do something or let something be done to it.  There is a small difference between a function and a method.  Function is a standalone unit of statements and a method is attached to an object and can be referenced by the `this` keyword.

## The Object() Constructor
A constructor is a function that creates and initalizes an object.  Javascript provides a special constructor function called `Object()` to build the object.  The return value of the `Object()` constructor is assigned to a variable.

```javascript
var book = new Object(); //Create the object
book.subject = "Perl"; //Assign properties to an object
book.author = "Vuk";
```

```Javascript
//Define a function which will work as a method

```


