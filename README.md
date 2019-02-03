# Pearls of Wisdom

## Description
This app provides a personalized way for book collectors to create and keep a digital database of their home library. Not only is it a tool for catologing your books, but a user can connect to a community of other book lovers through the discussion forum.

## User Stories
- *I need a way to keep my books digitally organized so I can track the quantity and category of books that I have in my library*. 
    * User can search an API and quickly upload their book to their personal collection. 
    * User can add personal notes about that book to their database. 
    * User can edit and delete any book entry

- *I want to purchase another book by my favorite author, but I can't remember which books of this author that I already own*.
    * User can add new categories to their database.
    * User can filter books in their database by category, author, or title. 

- *I want to read reviews and comments by other users on books I own or plan to buy*.
    * User can read discussion posts by other app users in the discussion forum. 
    * User can reply to other user's posts. 
    * User can share their own thoughts/reviews by adding a new public post in the forum. 

## Technologies Used
The app is built using the MEHN stack: MongoDB, Express, Handlebars and Node.js. 
The database is stored on MLAB.
The app is deployed to Heroku.
Passport authentication is used for user login and logout. 

## Functionality
The user can sign-up, login and signout, using authentication. The user then chooses where they want to navigate to: their book list or the discussion forum.

Book list: The user sees a list of all their books, automatically sorted by date, with the most current entry listed first. User can filter and sort their book entries by category, title, author. The user can add a new book entry through the use of a public API, or manually (for those rare and hard to find books). 

Discussion forum: Users can talk about their favorite books with a community of book lovers. They can add to the discussion by posting a new comment, or they can reply to another users comment to keep the discussion going.

## Getting Started
To set up the app locally:
1. Fork and clone the [project repository](https://github.com/shakiraweir/Pearls-of-Wisdom)
2. Install all dependencies
```
npm install
```
3. Open a separate tab in your terminal and launch the mongo database server:
```
mongod
```
3. Start the server
```
nodemon index.js
```
4. 
Navigate to the port nunber indicated in index.js in your browser:
```
localhost:4000
```
5. To access the database and collections locally, use the following commands:
```
- find and access bookapp database
show dbs
use bookapp
-find collections within database
show collections
-access documents within each collection
db.users.find().pretty()
db.books.find().pretty()
db.posts.find().pretty()
```
## Author
[Shakira Weir](https://github.com/shakiraweir)

## Screencast
[Watch a demo of the app here](https://vimeo.com/314865917)

## Things I'd Like to Fix or Incorporate
### Access Issues
- User login - Make sure each user only has access to their own personal booklist, not all booklists from any user. 
- User logout - Add functionality for user to logout of the app at anytime 
- Fix authentication issues

### CRUD 
- Fix update function
- Add ability for user to update and delete their own discussion posts

### Bonus Features
- Incoporate a public API from Amazon or Google that allows users to quickly search for their book and upload the corresponding image, title, author and description, rather than manually typing them in
- Add the option to search and filter books by ISBN 
- Logged in user can reply/comment on other user's comments in the discussion forum
- Add additional filter and sort option for user's private book list. User should be able to sort by category, title or author
- Add an automatic count that tallies how many books are in a user's library. It should track the number based on new and deleted entries. 

## Contribute
[Source Code](https://github.com/shakiraweir/Pearls-of-Wisdom)

[Issue Tracker](https://github.com/shakiraweir/Pearls-of-Wisdom/issues)
