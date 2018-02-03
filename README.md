# Notemanager
[Build A Meteor.js App In 45 Minutes](https://www.youtube.com/watch?v=9494-2E4riQ)

by [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)

&nbsp;
## 00

```
> meteor create notemanager
```



&nbsp;
## 01 notes list

```
> meteor add twbs:bootstrap
```

&nbsp;
## 02 notes collection

```
> meteor mongo
```
```
db.notes.insert({ text: "Created Database.", createdAt: new Date() });
```

&nbsp;
## 03 Navbar & Modal

* Bootstrap 3

&nbsp;
## 04 add notes

* Customize the modal and add the logic for the submit event.


&nbsp;
## 05 delete notes

* Add remove links and add the logic for the delete event.


&nbsp;
## 06 accounts

```
> meteor add accounts-ui accounts-password
```

* Add a span on the Navbar


&nbsp;
## 07 login with username

* Configure accounts for signing in with username.

&nbsp;
## 08 login to manage

* Add conditionals that restrict note viewing and editing to logged users only.


&nbsp;
## 09 relate notes to users

* Add owners to notes and display the owner in the note.


&nbsp;
## 10 secure methods

```
> meteor remove insecure
```

* Move the methods for inserting and removing notes from *main.js* to *collections.js*.
* Add checks.
* Call the secure methods in *main.js*.
