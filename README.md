# Developer Aptitude Test: API Integration Challenge

This is a project in React and Javascript to watch movie summaries. This small project has the ability to show what is the most relevant information from a movie (Original tittle, genres and the minimum and maximum temperature on the movie release date in an important city).

## Installation

On your operating system you will need to have React, [Node.js](https://nodejs.org/) and npm installed.

If you have it, run this command in the console in the root folder of the project.

```
npm install
```

## Use

For use the project to watch summaries, you can use the next command:

```
npm run start
```

Then, you can open your preferred browser on the following local endpoint and enjoy the application:

```
http://localhost:3000/
```


## Project Structure

The project folder contains the next main files:

- src/: Folder that contains the functional hooks, services, styles and the project main file.
    - hooks/: Folder that contains the hooks to consult the Api's for the project.
    - services/: This folder manage the axios library, here there is a file with get and post functions from axios.
    - App.js: It is the main file of the project, this file contains the html instructions and calls the hooks to bring the data.
