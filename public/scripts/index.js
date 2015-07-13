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



const App = blocks.Application({
  history: 'pushState'
});

let features = blocks.observable([{
  name: 'Feature 1',
  type: 'feature'
}, {
  name: 'Feature 2',
  type: 'feature'
}]);

App.extend({
  inputValue: blocks.observable(''),
  filterValue: blocks.observable(''),
  features: features.extend('filter', value => {
    let filter = App.filterValue().toLowerCase();
    return value.name.indexOf(filter) > -1 || value.type.indexOf(filter) > -1;
  }),
  setFilter: () => {
    App.filterValue(App.inputValue());
  }
});

// let Article = App.Model({
//   content: App.Property({
//     defaultValue: 'no content'
//   })
// });

// let Articles = App.Collection(Article);

// let Profile = App.Model({
//   username: App.Property({
//     required: true,
//     errorMessage: 'username is not valid'
//   }),
//   email: App.Property({
//     email: true
//   })
// });

// views
// App.View('Home', {
//   options: {
//     route: '/'
//   }
// });

// App.View('Contacts', {
//   options: {
//     route: 'contacts'
//   }
// });

// App.View('Signup', {
//   Articles: new Articles([{
//     content: 'first Article'
//   }, {
//     content: 'second Article'
//   }]),

//   profile: new Profile({
//     username: 'john'
//   }),

//   init: function () {
//     this.description = 'A signup view';
//   }
// });

// let Users = App.Collection({
//   count: blocks.observable(function () {
//     return this().length;
//   })
// });

// App.View('Profiles', {
//   users: new Users([{ username: 'admin' }]).extend('sort', 'username'),
//   // users: new Users([{ username: 'admin' }]).extend('skip', 2),
//   username: blocks.observable(),
//   addNewUser: () => {
//     let view = App.Profiles;

//     view.users.push({
//       username: view.username()
//     });

//     view.username('');
//   }
// });

// let User = App.Model({
//   username: App.Property({
//     required: 'Username is required!'
//   }),

//   email: App.Property({
//     email: 'Please provide a valid email!'
//   })
// });

// let user = new User({
//   username: '',
//   email: 'email@email'
// });

// user.validate();

// blocks.query({
//   items: [1, 2, 3]
// });

if (document.readyState === 'complete') {
  document.body.style.opacity = 1;
} else {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 1;
  });
}
