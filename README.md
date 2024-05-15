# WhatsApp Web 
WhatsApp Web UI built with React, TypeScript, and Styled-Components.

## Table of Contents
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Theming](#theming)


## Running the Application
To run the application, follow these steps:
1. Clone this repository to your local machine
2. Open the terminal and navigate to the project directory
3. Run `npm install` to install the dependencies
4. Run `npm start` to start the application

## Project Structure
The `common` code which can be reused in multiple parts of the application can be found in the common folder. This includes components, hooks, themes, and types. <br />
The `pages` folder contains the main pages of the application, such as the chat list and chat window. <br />
The `routes` folder contains the routes for the application.

## Theming
The application supports both light and dark themes. The theme state is managed using the Context API, which can be found in the common/themes folder. If you want to customize the existing theme, you can adjust the light and dark themes according to your needs. <br />
You can add new theme as well. Its very easy to setup. Just create a new file and define all the Theme Properties and then switch that theme in the AppThemeProvider. That's it.
