/**
 * deconstructure of array
 */

var [a, b, c] = [1, 2, 3];
var [, , c] = [1, 2, 3];
var [a, ...rest] = [1, 2, 3];
var [a, [b], [[c]]] = [1, [2], [[3]]];

/**
 * deconstructure of an iterater
 */
function* fibs() {
  var a = 0;
  var b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var [a, b, c, d, e] = fibs();

/**
 * deconstructure of objects
 */
var obj = {
  a: 1,
  b: 2,
  c: 3,
};

var { a } = obj;
var { a, b, c } = obj;
var { a, ...others } = obj;
var { a: aliasA } = obj;

var { a: { b: c } } = { a: { b: { c: 1 } } }
var { a: { b: c } } = { a: { b: { c: 1 } } }

var { a = 'default' } = {};
