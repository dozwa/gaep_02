# GAEP
The "GAEP" application (Guideline Adherent Evidence Based Physiotherapy) is an innovative open-source software designed to assist physiotherapists in using medical guidelines effectively. It leverages OpenAI's GPT models to provide user-specific summaries of guideline content via an interactive Q&A system. Developed with the Angular framework, GAEP simplifies the application of evidence-based practices in physiotherapy, aiming to enhance patient care. Although initially developed using German guidelines, the documentation is provided in English to ensure broader accessibility.

[Find a detailed documentation of the software here.](Documentation.md)

**ToDos:**
- Revise ReadMe (Main, Frontend, Backend)
- Set up and test Backend

## Table of Content
- [System Overview](#system-overview)
- [Prerequisite](#prerequisite)
- [Setup](#setup)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
- [Usage](#usage)
- [License](#license)

## System Overview
The GAEP application consists of a web application, a REST backend, and a database. The web application provides the user with a graphical interface. The backend processes data requests and acts as an intermediary between the database and external AI services. Additionally, GPT-4 from OpenAI is used to analyze and summarize medical guidelines. The guideline database stores all relevant data and information from medical guidelines.

![image](grafics/Architecture_.png)

## Prerequisite
To run the GAEP software, you need the following:
- Docker (Docker Compose) (tested with version 20.10.25)

You can use your web browser to access the application. The following browsers have been tested:
- Firefox
- Microsoft Edge

## Setup
To install the GAEP software:

### Frontend
The web application, implemented with Angular, runs in a Docker container. To deploy the frontend for a production environment, navigate to the `Frontend` folder and start the corresponding container using:
> docker compose up gaep-frontend-prod

[Find detailed documentation here](Frontend/README.md)

### Backend
The REST API, implemented with Python (Flask), runs in a Docker container. To execute the backend, first navigate to the `Backend` directory where the backend resides and start the Docker container with:
> docker compose up

[Find detailed documentation here](Backend/README.md)

### Database
The documentation of the database will be added here shortly.

## Usage
A description of the web interface will be provided here later.

## License
This project is licensed under the MIT License.