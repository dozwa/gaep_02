# Description services
[Switch to german](/Frontend/app/GAEP/src/app/services/README_deutsch.md)

[zurück zur Haupt README](/README.md)

This folder contains all Angular services. Services generally facilitate communication with other interfaces and provide functionalities for components.

## gaep-backend.service

This service is used for communication with the backend (gaep-python server). API requests are sent, and the data is converted into a defined data model. These data models can be found in the `models` folder.

### get answer
Sends a user query to the backend server and converts the request into an ApiResponse, which contains all the data. The `getAnswer()` method in the service is used for this purpose.

> Currently, sample data is loaded from a JSON file and not from the GAEP Backend Server. Instead of calling the `getAnswerDummyData()` method, a POST request with the userRequest should be executed to the GAEP Backend in this method.

Methods Overview:
- `getAnswer(userRequest: Request): Observable<ApiResponse>` - Sends a user query to the backend server and converts the response into an `ApiResponse` object.

- `getAnswerDummyData(): Observable<ApiResponse>` - Loads dummy data from a JSON file located on the web server.

- `getDummyData(): ApiResponse` - Returns the dummy data defined in this service. (Used for the tutorial)


### Search History
Loads a list of recent user queries.

> Currently, a sample search history is loaded from a JSON file and not from the GAEP Backend Server. Instead of calling the `getSearchHistoryDummy()` method, it should be replaced with a GET request or something similar in this method.

- `getSearchHistory(): Observable<SearchHistoryEntry[]>` - Retrieves the list of recent search entries.

- `getSearchHistoryDummy(): Observable<SearchHistoryEntry[]>` - Loads dummy data of a search history from a JSON file located on the web server.
