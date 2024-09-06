# What happens when **new** keyword is used ?

## A new object is created
The new keyword initiates the creatin of new javascript object.

## A prototype is linked
A newly created object gets linked to prototype property of the constructor function. This means that it has access to properties and methods defined on a constructor's prototype.

## The constructor is called
The constructor function is called with the specified arguments and this is bound to newly created object. If no explicit return value is specified from the constructor, javascript assume this, newly created object, to the intended return value.

## The new object is returned
After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.