import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections';
import { Accounts } from 'meteor/accounts-base';

// Accounts config
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});


import './main.html';

Template.body.helpers({
  notes() {
    return Notes.find({}, {sort: {createdAt: -1}});
  }
});

Template.themodal.events({
  // 'shown': function () {
  //   $('#notetext').focus();
  //   return false;
  // }​,
  'submit .addnoteform': function(event) {
    event.preventDefault();
    console.log('clicked submit!');
    // get the note's text
    const newtext = event.target.notetext.value;
    console.log(newtext);
    // save to db
    Notes.insert({
      text: newtext,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
    // clear form
    event.target.notetext.value = '';
    // close modal
    $(function () {
      $('.modal').modal('hide');
    });
    return false;
  }
});


Template.note.events({
  'click .deletenote': function() {
    console.log('clicked delete!');
    // remove from db
    Notes.remove(this._id);
    return false;
  }
});
