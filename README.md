# Wannit
Wannit Shopping List

Overview

Wannit is a wish list app that allows users to enter items that they need and then are able to list stores where said items can be bought or picked up.  This tool would be fantastic for those who are attending upcoming birthday parties or holiday events that involve gift exchanges. The NeedThat app is the perfect tool to share your gift ideas with others to let them know what you may be interested in.

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

app
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
  |__ Header.css
|__ containers/
	|__ MainContainer.jsx
  |__ MainContainer.css
|__ layouts/
	|__ layout.jsx
  |__ layout.css
|__ screens/
	|__ Homepage.jsx
  |__ Homepage.css
	|__ Items.jsx
  |__ Items.css
	|__ ItemCreate.jsx
  |__ ItemCreate.css
	|__ ItemEdit.jsx
  |__ ItemEdit.css
	|__ Locations.jsx
  |__ Locations.css
	|__ Login.jsx
  |__ Login.css
	|__ Register.jsx
  |__ Register.css
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


 
Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup Ruby Boilerplate    |    H     |     3 hrs      |     TBD     |    TBD    |
| Setup models, controllers and routes    |    H     |     3 hrs      |     TBD     |    TBD    |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |     TBD     |
| Create Seed Data |    L     |     4 hrs      |     TBD     |     TBD     |
| Test Data/Routes with Postico and Postman |    M     |     1 hr      |     TBD     |     TBD     |
| Connect Backend with Frontend |    H     |     1 hr      |     TBD     |     TBD     |
| Create Login Form |    H     |     2 hrs      |     TBD     |     TBD     |
| Create Register Form |    H     |     3 hrs      |     TBD     |     TBD     |
| User Auth Logic Front/Backend |    H     |     5 hrs      |     TBD     |     TBD     |
| Render All Activity |    H     |     4 hrs      |     TBD     |     TBD     |
| Implement CRUD on Front End |    H     |     6 hrs      |     TBD     |     TBD     |
| Implement Comments on Activity Detail Page |    H     |     6 hrs      |     TBD     |     TBD     |
| CSS Styling Basic |    H     |     3 hrs      |     TBD     |     TBD     |
| CSS Styling Advanced |    M     |     5 hrs      |     TBD     |     TBD     |
| Mobile Queries |    M     |     2 hrs      |     TBD     |     TBD     |
| Debugging |    H     |     6 hrs      |     TBD     |     TBD     |
| Deployment |    H     |     3 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     60 hrs      |     TBD     |     TBD     |


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
