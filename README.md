# Map App

##### https://map-app-omega.vercel.app/

## Get started

- Clone the repository
- Enter the cloned repository in a terminal of your choosing
- yarn install
- yarn start

## Used Technologies

- main: React, Redux, React-leafle, Leaflet
- code hosting: GitHub
- deploing hosting: Vercel

```
README.md
public/
src/
    components/
        -- Components of the project
        Home.jsx
        MapView.jsx
        Polyline.jsx
    helpers/
        -- Constants and helper functions used in project
        constants.js
        fetchData.js
    hooks/
        -- Custom hooks
        useFetchRouteCoordinates.jsx
    redux/
        -- Redux castomization scripts
        actions.js
        reducer.js
        store.js
    App.css
    App.jsx
    index.css
    index.js

```

## Component nesting

- App.jsx
  -- Home.jsx
  -- MapView.jsx
  --- Polyline.jsx

## The description:

### CSS:

- the app used regular CSS for styling in App.css

### UX:

- React-leafle, Leaflet libraries with additional customization of elements are used to obtain coordinates and distance between them.

## User story:

- data is received from the user, sent to the server for conversion, converted to coordinates, getting coordinates sent to another open source resource to build a detailed route line for the car.
- It is possible to return to the main page.

## Server

- We do not have a server side in the application
- For the fetching necessary data we use open-source servers
