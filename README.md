# Map App

##### https://map-app-efni.vercel.app/

## Get started

- Clone the repository
- Enter the cloned repository in a terminal of your choosing
- yarn install
- yarn start
- to test: yarn test

## Used Technologies

- main: React, Redux, React-leaflet, Leaflet
- code hosting: GitHub
- deploy hosting: Vercel

## User Story

As a user of the application, I want to be able to perform the following actions:

1. Upon accessing the main page of the application, I should be able to enter the name of the street or city for both the starting and ending points into the provided input fields.
2. After entering the start and end locations, I expect the button to navigate to the map page to become available.
3. Once I'm on the map page, I want to be able to view the route between the selected start and end locations.
4. On the map page, it would be helpful to have access to brief introductions or descriptions of the cities associated with the start and end points.
5. On the map page, I should have the option to return to the main page while resetting my search parameters.
6. In the event that I accidentally reload the map page in my browser, I want my previous search and its results to remain intact and relevant.

## Implementation

The application's functionality is implemented as follows:

1. Data received from the user is processed as a string and stored in the Redux store.
2. The start and end points provided by the user are converted from string format to latitude and longitude coordinates. This conversion is accomplished by sending a GET request to the service provided by nominatim.openstreetmap.org.
3. The obtained coordinates are then utilized to make a request via GET to api.openrouteservice.org, which returns a comprehensive array of points representing the route polyline.
4. Leveraging the leaflet and react-leaflet libraries, the user's route is constructed using the obtained array of points.

Please note that the application relies on the integration of these external services and libraries to provide accurate route visualization and data processing.

```
README.md
public/
src/
    components/
        -- Components of the project
        App/
         - App.css
         - App.jsx
         - App.test.jsx
        Home/
         - Home.jsx
         - Home.test.jsx
        MapView/
         - MapView.jsx
         - MapView.test.jsx
        Polyline/
         - Polyline.jsx
         - Polyline.test.jsx
    helpers/
        -- Constants and helper functions used in project
        constants.js
        fetchData.js
        local-storage.js
    hooks/
        -- Custom hooks
        useFetchRouteCoordinates.jsx
    redux/
        -- Redux customization scripts
        actions.js
        reducer.js
        store.js
    index.css
    index.js

```

## Component nesting

- App.jsx
  1. Home.jsx
  2. MapView.jsx - Polyline.jsx

## The description:

### CSS:

- the app used regular CSS for styling in App.css

### UX:

- React-leaflet, Leaflet libraries with additional customization of elements are used to obtain coordinates and distance between them.

### UI Testing:

- Testing is conducted by Jest and React Testing Library to test React components.

## Server

- We do not have a server side in the application
- For the fetching necessary data we use open-source servers
