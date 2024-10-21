# Container
Docke Container beinhaltet alle benötigten Software-Komponenten. Somit muss der Container lediglich gestartet werden.
AUf dem Betriebssystem muss Docker installiert sein (siehe requirements)

## Container bauen
Bevor der Container gestartet werden kann muss dieser gebaut werden, folgender Ebefehl
> $ docker compose build

## Container starten
Zum Starten des Docker Containers:
> $ docker compose up

# Requirements
 - auf dem Host betriebssytem muss Docker installiert sein
 - Firewall zugänglich Port zum Container (5001)