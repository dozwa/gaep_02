import { Tutorial, View } from "./TutorialModel";

export const GAEPTutorial:Tutorial = {
    steps: [
        // 1. Schritt
        {
            Text:"Dies ist die Startseite.\nVon hier aus können Fragen an die KI gestellt werden.",
            ElementSpecifier:"",
            view:View.HOME
        },
        // 2. Schritt
        {
            Text:"Wählen Sie zuerst die Leitlinie aus, aus welcher die KI die Informationen für die Generierung Ihrer Antwort beziehen soll.",
            ElementSpecifier:"#select-guideline",
            view:View.HOME
        },
        // 3. Schritt
        {
            Text:"Abhängig davon, ob Sie eine kompakte und einfach verständliche Antwort, oder eine ausführliche Zusammenfassung erhalten möchten, kann dies hier eingestellt werden.",
            ElementSpecifier:".language-select",
            view:View.HOME
        },
        // 4. Schritt
        {
            Text:"Sie können entweder konkrete Fragen stellen oder die KI passende Informationen zu einem Schlagwort zusammenfassen lassen.",
            ElementSpecifier:"#searchBar",
            view:View.HOME
        },
        // 5. Schritt
        {
            Text:"Dies ist die Antwortseite, welche nach dem Absenden einer Anfrage oder der Auswahl eines Eintrags im Suchverlauf generiert wird.",
            ElementSpecifier:"",
            view:View.ANSWER
        },
        // 6. Schritt
        {
            Text:"Oben finden Sie die von Ihnen gestellte Frage, sowie die KI-generierte Antwort (ggf. inklusive Quellenverweise), basierend auf den Informationen aus der entsprechenden Leitlinie.",
            ElementSpecifier:"#asked-question",
            view:View.ANSWER
        },
        // 7. Schritt
        {
            Text:"Ein Klick auf das App-Logo oder den Reset-Button bringt Sie zurück zur Startseite.",
            ElementSpecifier:"#home-picture",
            view:View.ANSWER
        },
        // 8. Schritt
        {
            Text:"Die Antwort der KI basiert auf den Empfehlungen aus den Leitlinien und den mit diesen zusammenhängenden Informationen. Diese Empfehlungen können Sie nach verschiedenen Attributen sortieren oder durchsuchen.",
            ElementSpecifier:"#filter-card",
            view:View.ANSWER
        },
        // 9. Schritt
        {
            Text:'"Relevanz" beschreibt die Relevanz einer Empfehlung für die Beantwortung Ihrer Frage. Der Emfpehlungsgrad ist entnommen aus der Leitlinie. Eine Legende zu den Symbolen kann jederzeit aufgerufen werden.',
            ElementSpecifier:"",
            view:View.ANSWER
        },
        // 10. Schritt
        {
            Text:"Hier werden alle Empfehlungspakete in der Reihenfolge der von Ihnen gewählten Sortierung aufgelistet.",
            ElementSpecifier:".details-tab",
            view:View.ANSWER
        },
        // 11. Schritt
        {
            Text:"Der obere Text ist die konkrete Empfehlung aus der Leitlinie und wird nicht durch die KI abgeändert.",
            ElementSpecifier:".details-header-text",
            view:View.ANSWER
        },
        // 12. Schritt
        {
            Text:"Die Empfehlungsbasis findet sich unten in einer Karte. Sofern die Empfehlung auf Fachliteratur basiert, können Sie diese Quellen aufrufen.",
            ElementSpecifier:".reference",
            view:View.ANSWER
        },
        // 13. Schritt
        {
            Text:"Falls eine Originalquelle online verfügbar ist, kann diese von hier aus direkt aufgerufen werden.",
            ElementSpecifier:"",
            view:View.ANSWER
        },
        // 14. Schritt
        {
            Text:"Unten rechts können Sie die Original-PDF-Version der Leitlinie aufrufen, aus welcher die Empfehlung entnommen wurde.",
            ElementSpecifier:".pdf-link",
            view:View.ANSWER
        },
        // 15. Schritt
        {
            Text:"Zu jeder Empfehlung finden sich Detailinformationen. Diese werden ebenfalls von der KI in Bezug auf Ihre Frage zusammengefasst.\nMit einem Klick auf die Karte können Sie eine Seite mit den Original-Detailinformationen aufrufen.",
            ElementSpecifier:".details-summary",
            view:View.ANSWER
        },
        // 16. Schritt
        {
            Text:"Neben der Empfehlungskarte sind hier alle Detailinformationen aufgelistet und können ausgeklappt werden.",
            ElementSpecifier:"",
            view:View.NONE
        },
        // 17. Schritt
        {
            Text:"Diese Detailinformation können entweder Texte oder auch Grafiken beinhalten.",
            ElementSpecifier:"",
            view:View.NONE
        },
        // 18. Schritt
        {
            Text:"Sofern ein Detailabschnitt auf Quellen verweist, sind auch diese am Ende des Abschnitts aufrufbar.",
            ElementSpecifier:"",
            view:View.NONE
        },
        // 19. Schritt
        {
            Text:"Über das Menü haben Sie unter anderem Zugriff auf den Suchverlauf.",
            ElementSpecifier:"#menu-bar",
            view:View.HOME
        },
        // 20. Schritt
        {
            Text:"Alle vergangenen Suchanfragen werden hier chronologisch aufgelistet.",
            ElementSpecifier:"",
            view:View.HISTORY
        },
        // 21. Schritt
        {
            Text:"Neben der Fragestellung finden sie auch die Info zur Komplexität der generierten Antwort. Mit einem Click auf einen Eintrag können sie die jeweilige Antwortseite aufrufen.",
            ElementSpecifier:"",
            view:View.HISTORY
        },
        // 22. Schritt
        {
            Text:"Über das Menü oder den Homebutton gelangen Sie zurück zur Startseite.\nDamit haben Sie das Ende des Tutorials erreicht.",
            ElementSpecifier:"",
            view:View.HISTORY
        },

    ]
};