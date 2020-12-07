# Wannit
Wannit Shopping List

link: https://pensive-pare-23737f.netlify.app/register


Overview

Wannit is a wish list app that allows users to enter items that they need and then are able to list stores where said items can be bought or picked up.  This tool would be fantastic for those who are attending upcoming birthday parties or holiday events that involve gift exchanges. The Wannit app is the perfect tool to share your gift ideas with others to let them know what you may be interested in.

MVP

Build a Ruby on Rails server, exposing RESTful JSON endpoints.
Establish a database consisting of 3 tables, models, and controllers for full CRUD.
Create a front-end React app utilizing 8 rendered components in an organized, readable file structure.
Utilize React Route, for client-facing routing
Allow for full CRUD actions by users
Styled with 2 media queries and flexbox CSS

Goals
- Create a shopping item list for users to keep track of items they need to acquire
- Allow users to add locations where the items they want can be acquired
- Make user lists sharable

Libraries and Dependencies
|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front End Framework for a dynamic SPA |
|   React Router   | Navigation Routing within the SPA |
| Axios | Allows for API calls|
|  Ruby on Rails  | Backend Framework and will be hosting logic for user authentication |
|  Postgresql  | Relational database that will allow the client to interact with the data |

Client (Front End)
Wireframes

Desktop 
https://www.figma.com/file/9xG8LntleqQU1ZYbioPpAK/Wannit-Desktop


Component Tree
https://whimsical.com/wannit-Jdxh5cSRucUPJgoyBMj8pK


Component Hierarchy

```app
|__ assets/
      |__ fonts
      |__ images
|__ controllers/
      |__ applications_controller.rb
	|__ authentication_controller.rb
	|__ locations_controller.rb
	|__ items_controller.rb
	|__ users_controller.rb
|__ models/
|__ application_record.rb
	|__ location.rb
	|__ item.rb
	|__ user.rb
client
src
|__ components/
  |__ Header.jsx
  |__ Footer.jsx	
|__ containers/
	|__ MainContainer.jsx
  |__ MainContainer.css
|__ layouts/
	|__ layout.jsx
  |__ layout.css
|__ screens/
	|__ Homepage.jsx
	|__ Items.jsx
	|__ ItemCreate.jsx
	|__ ItemEdit.jsx
	|__ LocationCreate.jsx
	|__ LocationEdit.jsx
	|__ Locations.jsx
	|__ Login.jsx
	|__ Register.jsx
|__ services/
	|__ apiConfig.js
	|__ auth.js
	|__ locations.js
	|__ Items.js
|__ App.css/
|__ App.js/
|__ config/
	|__ routes.rb
|__ db/	
	|__ migrate/
	|__ schema.rb/
	|__ seeds.rb/
	


``` 
Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup Ruby Boilerplate    |    H     |     3 hrs      |     TBD     |    TBD    | 3 hrs 
| Setup models, controllers and routes    |    H     |     3 hrs      |     TBD     |    TBD    | 3 hrs
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |     TBD     | 3 hrs
| Create Seed Data |    L     |     4 hrs      |     TBD     |     TBD     | 4 hrs 
| Test Data/Routes with Postico and Postman |    M     |     1 hr      |     TBD     |     TBD     | 1 hr
| Connect Backend with Frontend |    H     |     1 hr      |     TBD     |     TBD     |  1 hr 
| Create Login Form |    H     |     2 hrs      |     TBD     |     TBD     | 2 hrs 
| Create Register Form |    H     |     3 hrs      |     TBD     |     TBD     | 3 hrs
| User Auth Logic Front/Backend |    H     |     5 hrs      |     TBD     |     TBD     | 5 hrs
| Render All Activity |    H     |     4 hrs      |     TBD     |     TBD     | 4 hrs  
| Implement CRUD on Front End |    H     |     6 hrs      |     TBD     |     TBD     |  6 hrs 
| Implement Comments on Activity Detail Page |    H     |     6 hrs      |     TBD     |     TBD     |  6 hrs 
| CSS Styling Basic |    H     |     3 hrs      |     TBD     |     TBD     | 3 hrs
| CSS Styling Advanced |    M     |     5 hrs      |     TBD     |     TBD     |  5 hrs 
| Mobile Queries |    M     |     2 hrs      |     TBD     |     TBD     | 2 hrs
| Debugging |    H     |     6 hrs      |     TBD     |     TBD     | 6 hrs
| Deployment |    H     |     3 hrs      |     TBD     |     TBD     | 3 hrs
| TOTAL               |          |     60 hrs      |     TBD     |     TBD     | 60 hrs


Server (Back End)
ERD Model
https://drive.google.com/file/d/1UQarKMD_3OHPCekUfhyQOtwdBf6NYRz_/view?usp=sharing


Post-MVP
Post-Mvp goals for this project are to:
1. Implement login/register authentication
2. Make user lists sharable.

Code Showcase
Use this section to include a brief code snippet of functionality that you are proud of and a brief description.
Code Issues & Resolutions
Use this section to list of all major issues encountered and their resolution.
