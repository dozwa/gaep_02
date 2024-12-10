## Docker
zwei dockerfiles: "dockerfile" für die entwicklung und "dockerfile_prod" für das deployment bzw. für die produktivumgebung

Die mit Angular umgesetzte Webanwendung wird in einem Docker Container ausgeführt. Hierzu stehen zwei verschiedene Docker Container zur Verfügung. Ein Container beinhaltet die Entwicklungsumgebung, welcher sich zum Entwickeln der Anwendung eignet, und der andere für die Produktivumgebung, welcher für den Einsatz gedacht ist.

### Docker build
Alle Docker Container:
> $ docker compose build

Nur den Development Container:
> $ docker compose build gaep-frontend

Nur den Deployment Container:
> $ docker compose build gaep-frontend-prod

### Docker start development
> $ docker compose up gaep-frontend
### Docker start deployment
> $ docker compose up gaep-frontend-prod

Die Website kann dann über http erreicht werden: 'http://localhost:80'

HTTPS ist bisher noch nicht eingerichtet!


## Code

verwendete Frameworks:
* Angular 18
* Node 18

verwendete UI Bibliothek:
* Angular Material
'https://material.angular.io/components/categories'

ODER
* Bootstrap?