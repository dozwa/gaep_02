# Container

[zurück zur Haupt README](/README.md)

The Docker container includes all the necessary software components, so it only needs to be started. Docker must be installed on the operating system (see requirements).

## Build Container
Before the container can be started, it needs to be built with the following command:
> $ docker compose build

## Start Container
To start the Docker container:
> $ docker compose up

# Requirements
- Docker must be installed on the host operating system
- Firewall access to the container port (5001)



## Description of the gaep_server.py script

The gaep_server.py script serves as a backend server for the GAEP application. The script uses Flask as a web framework to provide a REST API and integrates various technologies and libraries for data processing and searching.

**Main functions of the script**

* OpenAI integration: Uses the GPT-4 model for text analysis and optimization.
* HTTP basic authentication: Secures access to the API via basic authentication.
* Vector database: Uses chromadb to store and efficiently search the recommendation texts.
* Database management: Establishes connections to the SQL database and handles errors.
* Data processing: Defines several functions for analyzing, classifying, optimizing and summarizing user requests and document content.

**Detailed description of the main components**

* Logging and output redirection: the script configures logging so that all standard output is redirected to a log file. The log file is created at server startup based on the current date.
* Database setup: A vector database is created by loading recommendation text and associated metadata from an Excel file and feeding it into chromadb.
* HTTP API: The Flask framework is used to provide endpoints. Authentication is handled via HTTPBasicAuth, with username and password set by environment variables.
* Error handling and database reconfiguration: In the event of connection problems to the SQL database, the script attempts to re-establish the connection automatically.
* Search and response logic: The script provides functions to optimize queries, search the database for relevant content, classify and analyze the results, and finally return a summarized response based on the queries.
* Complex data processing: User queries are processed and optimized using LangChain technology and OpenAI models. The results are classified and summarized to provide accurate and relevant information to end users.