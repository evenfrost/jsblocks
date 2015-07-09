'use strict';
'format es6';

import blocks from 'jsblocks';

// class Human {
//   constructor (firstName = 'John', lastName = 'Doe', age = 30) {
//     this.firstName = blocks.observable(firstName).on('changing', this.onFirstNameChanging);
//     this.lastName = blocks.observable(lastName);
//     this.age = blocks.observable(age);
//   }

//   get fullName () {
//     return this.firstName() + ' ' + this.lastName();
//   }

//   onFirstNameChanging (newValue, oldValue) {
//     // if (newValue && newValue.length > 5) return false;
//   }

// }

// let human = new Human();

// human.fullName.on('changing', (newValue, oldValue) => console.log(newValue));

// blocks.query(human);



// const app = blocks.Application();

// app.extend({
//   hello: 'Hello world'
// });

// let article = app.Model({
//   content: app.Property({
//     defaultValue: 'no content'
//   })
// });
// let articles = app.Collection(article);
// let profile = app.Model({
//   username: app.Property({
//     required: true,
//     errorMessage: 'username is not valid'
//   }),
//   email: app.Property({
//     email: true
//   })
// });

// app.View('signup', {
//   articles: articles([{
//     content: 'first article'
//   }, {
//     content: 'second article'
//   }]),

//   profile: profile()
// });

blocks.query({
  items: [1, 2, 3]
});

if (document.readyState === 'complete') {
  document.body.style.opacity = 1;
} else {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 1;
  });
}
