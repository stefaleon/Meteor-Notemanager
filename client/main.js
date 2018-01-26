import { Template } from 'meteor/templating';

import './main.html';

Template.body.helpers({
  notes: [
    { text: 'My Note 1'},
    { text: 'My Note 2'},
    { text: 'My Note 3'}
  ]
});
