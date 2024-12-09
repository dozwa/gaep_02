// Bezeichnungen der einzelnen Ansichten
export enum View {
    NONE, // Keine Seite anzeigen
    HOME, // Home Seite
    ANSWER, // Antwort Seite
    HISTORY, // Suchverlauf
    SOURCE // Quellen Modal
};

/* Stellt einen Datentyp zur Erstellung eines einzelnen Schritts im Tutorials bereit. 
   Ein Schritt im Tutorial besteht aus: 
- Einem Text (Text), welcher mittig unten angezeigt wird
- Einem Spezifizierer (ElementSpecifier), welcher angibt welche Elemente für den aktuellen Schritt hervorgehoben werden soll
- Einer Angabe, welche Ansicht angezeigt werden soll.
*/
export interface TutorialStep{
    Text: string, // Der Text der während des Schritts angezeigt werden soll
    ElementSpecifier: string, // Ein Spezifizierer der Klassen oder ID's von HTML ELementen enthält welche hervorgehoben werden sollen
    view: View // Gibt an, welche Ansicht gezeigt werden soll
}

// Stellt ein Datentyp zur Erstellung eines Tutorials bereit.
// Das eigentliche Tutorial ist in Tutorial.ts enthalten
export interface Tutorial{
    steps: TutorialStep[]
}