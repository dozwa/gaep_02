# GAEP Frontend

The frontend for GAEP is a web-based interface through which the user can interact with the application. It can be accessed via a web browser.

The application was implemented with Angular and can be executed using the included Docker container.

[Back to the Main README](/README.md)
[Switch to german Version](/Frontend/README_deutsch.md)


## Table of Contents

- [Prerequisite & Setup](#prerequisite--setup)
- [Docker](#docker)
  - [Build Container](#build-container)
  - [Run Container](#run-container)
- [Technology Stack](#technologie-stack)
- [Project Structure](#projektstruktur)
  - [Stylings](#stylings)
  - [Service](#service)
  - [Modals](#modals)
  - [Models](#models)
  - [Components](#components)
- [Further Documentation](#further-documentation)
  - [GAEP Backend Service](#gaep-backend-service)
  - [Create Tutorial](#create-tutorial)

## Prerequisite & Setup

To run the frontend, a Docker installation (Docker Compose) is required.

To set up the application, first clone the repository to your local system and navigate to the `Frontend` folder. Then build the Docker container and run it to start the application. Finally, open the provided URL in your browser to access the application and ensure it functions correctly.

## Docker

The web application implemented with Angular is executed in a Docker container. Two different Docker containers are available for this purpose. One container contains the development environment, which is suitable for developing the application, and the other for the production environment, which is intended for use.

Inside the IDE container, the Angular application is built using `ng serve` and hosted locally at runtime. Changes to the code are compiled and hosted directly, making the development process more efficient. This allows developers to make changes to the code and test them immediately on the running system without having to restart the entire development server each time.  <span style="color:red">The development environment is not designed for productive use!</span>

The product environment container compiles the Angular application with production settings and then hosts the application using an NGINX server. 

### build container

The Docker container needs to be built before it can be used. It can then be launched. Docker containers can be created and launched using Docker Compose.

To build the development containers:
> $ docker compose build gaep-frontend

To build the deployment container:
> $ docker compose build gaep-frontend-prod

### run container

To start the container with the development environment:
> $ docker compose up gaep-frontend
To start the container with the deployment environment:
> $ docker compose up gaep-frontend-prod

The website can then be accessed via http: 'http://localhost:80'

HTTPS has not yet been set up!


## Technology Stack

used frameworks:
* Angular 18
* Node 18

used UI libraries:
* Angular Material
'https://material.angular.io/components/categories'


## Project Structure 

```plaintext
app/GAEP/
├─ package.json
├─ public/
└─ src/
   ├─ app/
   │  ├─ components/
   │  │  ├─ disclaimer/
   │  │  ├─ feedback-tab/
   │  │  ├─ header/
   │  │  ├─ home/
   │  │  ├─ search-history/
   │  │  └─ tutorial/
   │  ├─ modals/
   │  ├─ models/
   │  └─ services/
   └─ stylings/
      ├─ custom-styling.scss
      ├─ custom-theme.scss
      └─ custom-variables.scss
```

The `public` folder contains static files such as images, icons, fonts, or other resources that are needed during development and in the final build.

The `package.json` file in a project holds metadata about the project, including its name, version, dependencies on other packages, scripts for various tasks, and configuration properties.

The `src` folder contains the source code of the application. Besides the `app` folder, which holds the main application logic and components, and the styling folder with the stylesheets, the `src` folder in an Angular project also includes files like `index.html`, the central HTML structure, and `main.ts`, the entry point for the application.

The `components` folder in an Angular project contains a collection of reusable building blocks known as components. A component is a self-contained unit of the user interface with its own logic and presentation, consisting of a TypeScript file for logic, an HTML template for structure, and optional CSS files for styles.

The `modals` folder contains all the components specifically created for modals, which function as standalone UI elements used to display overlay dialogs in the application. Modals are interactive windows that overlay the current application layer to capture user input, display important information, or confirm certain actions without leaving the existing user interface.

The `models` folder contains all the data models that define the structure and types of data objects in the project, supporting and simplifying data exchange and processing logic.

### Stylings
```
app/GAEP/src/
├─ styles.scss
└─ stylings/
   ├─ custom-styling.scss
   ├─ custom-theme.scss
   └─ custom-variables.scss
```
In this project, SCSS is used as a styling preprocessor to enable an advanced and modular form of stylesheet management. The `stylings` folder contains custom style files specifically tailored to the application's needs. The main entry file is `style.scss`, which imports `custom-styling.scss`. This file contains the basic formatting for the application's overall appearance. The `custom-theme.scss` file is responsible for implementing the color scheme used with Angular Material. Additionally, all defined color values are managed in the `custom-variables.scss` file, which was originally developed in the first prototype of the Mendix application.

### Service
```
app/GAEP/src/services
├─ geap-backend.service.ts
├─ geap-backend.service.spec.ts
└─ README.md
```
The `services` folder contains services that are responsible for the application's communication with external systems. A detailed description of the included services can be found [here](/Frontend/app/GAEP/src/app/services/README.md).

The service implemented in `geap-backend.service.ts` takes on the central task of communicating with the GAEP backend. This service sends requests to the REST API, processes the received data, and makes it available for use in other Angular components.


### Modals
```
app/GAEP/src/modals
├─ details-modal/
├─ feedback-modal/
└─ source-modal/
```

The `modals` folder contains all the components specifically created for modals. Included are the following modals:

| Modal | Description |
| --- | --- |
| details-modal | Used to display detailed information of a recommendation |
| feedback-modal | Contains the feedback form |
| source-modal | Displays a list of sources |




### Models
```
app/GAEP/src/models
├─ Request.ts
└─ Response.ts
```

This folder contains the data models used in this application. The data models primarily serve to facilitate consistent communication among components. They are also used to uniformly format data received from the backend.

The `Request.ts` includes the `Request` data model, which contains all the data of a user request.

The `Response.ts` contains several data models related to the data of a user request's response. The main model for the response from the backend server is `ApiResponse`. This includes a list of `Reference`, which provides additional information for each action recommendation. `ReferenceDetail` provides further information for each reference. The `Source` data model contains information about a source.

### Components
```
app/GAEP/src/components
├─ disclaimer
├─ feedback-tab
├─ header
├─ home
├─ search-history
└─ tutorial
```

This folder contains the implementations of the individual Angular components. An Angular component is a self-contained unit of the user interface with its own logic and presentation, consisting of a TypeScript file for logic, an HTML template for structure, and optional CSS files for styles.

| Komponente | Beschreibung |
| --- | --- |
| disclaimer | Disclaimer displayed immediately upon startup |
| feedback-tab | Blue feedback element on the right side |
| header | Top menu bar |
| home | Main page where users can ask questions and view answers |
| search-history | Search history where users can see their last search queries |
| tutorial | Contains the tutorial for the user interface |

Instructions for creating a tutorial can be found [here](/Frontend/app/GAEP/src/app/components/tutorial/README.md)

## Further documentation

### GAEP Backend Service

A detailed description of the GAEP Backend Service can be found [here](/Frontend/app/GAEP/src/app/services/README.md). This also includes information on how the service functions and can be adapted to the backend server.

### Create tutorial
Instructions for creating a tutorial can be found [here](/Frontend/app/GAEP/src/app/components/tutorial/README.md)