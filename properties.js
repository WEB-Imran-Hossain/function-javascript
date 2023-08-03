var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// console.log(shoppingCart);
// when you know the property name, use dot notation to get the property value
var penCount = shoppingCart.pen;

// alternative system
// when you know the property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

var properties = Object.keys(shoppingCart);

var propertyValues = Object.values(shoppingCart);

console.log(properties);
console.log(propertyValues);
console.log(shoppingCart);


// onek somoy proyojon hole babohar korbo
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// set property values
// 1st way
shoppingCart.mouse = 15;
console.log(shoppingCart);
// 2nd way
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
// 3rd way
var propertyName = 'mouse';
shoppingCart[propertyName] = 89;
console.log(shoppingCart);