'use strict';
'format es6';

import blocks from 'jsblocks';

class Human {
  constructor (firstName = 'John', lastName = 'Doe', age = 30) {
    this.firstName = blocks.observable(firstName);
    this.lastName = blocks.observable(lastName);
    this.age = blocks.observable(age);
  }

  get fullName () {
    return this.firstName + ' ' + this.lastName;
  }
}

let human = new Human();

console.log(human.firstName());

blocks.query(human);

// blocks.query({
//   field: blocks.observable(''),
//   firstName: blocks.observable('John'),
//   items: ['first', 'second', 'last'],
//   className: 'green',
//   handler: event => console.log(event.type)
// });

document.body.style.opacity = 1;
