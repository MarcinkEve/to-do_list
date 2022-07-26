# TO DO List app

This CRUD app is created with React.
App runs on it's own server at http://localhost:3000

It's data is saved to local storage.

Using this app, you can enter a task and when it should be done ( "Today", "Tomorrow" , "Upcoming").

#### It also is possible to:

- edit entries,
- delete entries,
- mark entries as done,
- mark entries as important.

#### It automatically sorts:

- marked as completed tasks and push them to the bottom of the list
- marked as important tasks and push them to the top of the list

If you preffer to see all tasks not sorted according when it should be done, just click the button "List view" (this button toggles back to previous list view).

This app has a function to delete complete list of tasks (button "Clear list").

### Live demo:
https://to-do-list-marcinkeve.vercel.app/


## Run app

To run this app it is necessary to instal npm package.

1. Find frontend directory- in command line (or terminal) write:

   > cd to-do-list

2. Install npm package:

   > npm i

3. Run the app:

   > npm start