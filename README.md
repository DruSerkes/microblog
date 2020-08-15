# Microblog

Mock blog service (React, Redux, Node, Express, PostgreSQL)

### Why?

This was a project for the purpose of getting in practice building a full CRUD app with React/Redux, and integrating it with a Node/Express backend and a PostgreSQL database. Styling and authorization/authentication were not within the scope of the project, so anyone can do anything on this little service. 

### Features 

* User can view post title cards on home page. 
* User can view post in full 
* User can add/edit/remove posts 
* User can add/remove comments to posts 
* User can up/down vote posts
* Post titles on home page are sorted by votes 

### Tech

* React
* Redux 
* Node/Express
* PostgreSQL 
* Axios 
* React-FontAwesome
* [Formik](https://www.formik.org)

### Getting started  

1. Clone this repo 
2. ```cd ./backend``` and ```npm install```
3. ```cd ./frontend``` and ```npm install``` 
4. Make sure you have [concurrently](https://www.npmjs.com/package/concurrently) installed so you can get servers running for the front and back end 
5. ```npm run dev``` and navigate to localhost:3000
6. Have fun wondering why you did all that to look at this silly project of mine. 

### Looking forward 

I struggled early on in this project with conceiving component hierarchy. That said, the further in I got, the better I understood the division between "dumb" components and those containing all of the logic. In the future I will be spending considerably more time at the start of any React project to really *draw it out* and understand where Redux (or any form of state) will live, and how information will be passed down in props.  
