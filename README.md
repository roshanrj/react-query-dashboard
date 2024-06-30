# Project Developed by Roshan Ramesh Jambhavdekar
This project is been freshly developed by me.

# How to install dependencies and run the project.

1) Clone the project to your local system using the URL: https://github.com/roshanrj/react-query-dashboard.git
2) Install the dependencies using command ==> npm i
3) Run the project using command ==> npm run start

# Application is implemented with below scope of points:
- Initialize the project with create-react-app using the TypeScript template.
- Use functional components and React hooks for local state management.
- Use React Query hooks (useQuery, useInfiniteQuery) for server state.
- Implement TypeScript interfaces or types for any props, state, and API response data structures.
- Fetch user data from a public API (e.g., Random User API) using useQuery and display it in a list.
- Each list item should show basic user information such as name, email, and picture.
- Implement a search feature to filter users by name using query parameters with React Query.
- Use useInfiniteQuery to implement a "Load More" button to fetch and append additional users to the list.
- Implement error handling, loading, and empty state feedback utilizing React Query's state management.
- Implement a user detail view using useQuery which opens when a user list item is clicked, displaying more detailed information about the user.
- Style the application with styled-components or a CSS-in-JS library of choice, incorporating responsive design principles.

# A brief explanation of the code structure and React Query integration

The project consists of below 2 Routes incorporated in side bar for deskstop devices and sliding drawer from top for mobile devices for smooth responsiveness.
1) /use-query
2) /use-infinite-query

The code starts from the file App.tsx
Currently, any route will call DefaultLayout.tsx component. And into it the routing for /use-query, /use-infinite-query is done.

/use-query: 
============
- The purpose of this page is to fetch the user list on load and populate inside the table.
  -> Its build using useQuery hook, axios for making api calls to `https://randomuser.me/api/?results=50`, and styled-components.  

- It consists of Search input for searching the user by first and last name.
  -> Its build using useQuery hook and styled-components, as the searching by query param was not support by API `https://randomuser.me/api/?results=50`. So, used filteration logic based on state for consistency purpose.

- It also consists of User Details popup box to display detailed information about that specific user that opens on click of table row.
 -> Its build using useQuery hook and styled-components, axios for making api calls to `https://randomuser.me/api/?uuid=${uuid}` for getting the clicked user details from server.
 Note: As the api doesnt support searching the users by UUID query params. Each time the api call is made, it will give you the random user.


/use-infinite-query: 
====================
- The purpose of this page is to fetch the user list on load of the page and pagination for fetching the user list on click of Load More button.
 -> Its build using useInfiniteQuery for fetching the records.

- The purpose of this page is to fetch the user list on load and populate inside the table.
  -> Its build using useInfiniteQuery hook, axios for making api calls to `https://randomuser.me/api/?page=${pageParam}&results=10`, and styled-components.  

- It consists of Search input for searching the user by first and last name.
  -> Its build using useInfiniteQuery hook and styled-components, as the searching by query param was not support by API `https://randomuser.me/api/?page=${pageParam}&results=10`. So, used filteration logic based on state for consistency purpose.

- It also consists of User Details popup box to display detailed information about that specific user that opens on click of table row.
 -> Its build using useInfiniteQuery hook and styled-components, axios for making api calls to `https://randomuser.me/api/?uuid=${uuid}` for getting the clicked user details from server.
 Note: As the api doesnt support searching the users by UUID query params. Each time the api call is made, it will give you the random user.

 Code structure:
 ===============

 - src
  - App.tsx: Entry point of Dashboard Application
  - components: It consists of globally accesible components to keep my code DRY, which can be reuseable across project 
  - containers: It consists of routes (pages) to render on UI.
  - hooks: It consists of customHooks.
  - layout: It consists of components to create HTML 5 structure on UI. i.e to render header, nav, aside, section, footer
  - utils: It consists of helper functions for making API calls, keeping the logic separately.

# Any notes on challenges faced and areas of improvement if given more time.
- It was a new learning and a interesting curve for me. I really enjoyed developing the application which with optimization techniques using React.lazy loading, useMemo and optimized code.
- If given more time, It will be great to implement all the points mentioned over the mail.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

