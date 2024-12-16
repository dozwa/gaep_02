# GAEP Frontend Tutorial
[Switch to english](/Frontend/app/GAEP/src/app/components/tutorial/README.md)

[zurück zur Haupt README](/README.md)

Für das Verständnis der GAEP-Benutzeroberfläche wurde in dieser Komponente ein Tutorial für die Benutzer implementiert. Das Tutorial zeigt nacheinander verschiedene Erklärungen zu den einzelnen Komponenten und Bedienelementen der Anwendung.

Das Tutorial wurde so implementiert, dass es nicht nach jeder Änderung der Anwendung neu erstellt werden muss. Dazu werden HTML-Elemente über einen Identifier identifiziert und anschließend hervorgehoben. 

Das Tutorial besteht aus einzelnen Schritten, durch die der Benutzer navigieren muss. In jedem dieser Einzelschritte wird ein Text und ein entsprechendes Element einer View angezeigt. Um die Erstellung eines Tutorials zu erleichtern, wurde eine Struktur geschaffen, mit der neue Schritte einfach definiert werden können. Im Folgenden wird beschrieben, wie ein Tutorial erstellt werden kann.

## Tutorial erstellen
In der `Tutorial.ts` sind die einzelnen Schritte nacheinander definiert. Das Tutorial wird geladen und entsprechend Schritt für Schritt angezeigt. Um einen Schritt zu definieren wird ein ein Objekt (`TutorialStep`) mit folgenden drei Parametern benötigt:
- `Text` (String): Der Text der angezeigt werden soll.
- `ElementSpecifier` (String): Ein Identifier als String, welcher eine Element über eine Klasse oder ID identifierzt.
- `view` (View enum): Eine Ansicht welche angezeigt werden soll.

## Beschreibung der Umsetzung
Für jeden Schritt wird die jeweilige Ansicht eingeblendet. Anschließend wird der HTML DOM Tree nach allen Elementen anhand der angegeben CSS Klasse oder der ID durchsucht. Allen gefundenen Elementen wird dann eine CSS Klasse `highlight` hinzugefügt, welche das Element rot umrandet und hervorhebt. Wird ein neuer Tutorial Schritt aufgerufen wird die CSS Klasse wieder entfernt.


### Element hinzufügen
Soll ein Element hervorgeheben werden, muss diesem eine CSS Klasse oder eine ID hinzugefügt werden, über das dieses Element identifiert werden kann. Diese Klasse oder ID kann dann im `ElementSpecifier` eines Tutrial Schritts aufgenommen werden.

### Ansicht hinzufügen
Soll eine Weitere Ansicht hinzugefügt werden, muss hierfür zuerst ein Eintrag im enumm `View` in der `TutorialModel.ts` eingetragen werden. 

Anschließend muss die entsprechende Komponete die angzeigt werden soll in die `tutorial.component.html` eingebaut werden. Dabei ist darauf zu achten, dass diese nur angezeigt werden darf, wenn die der aktuelle Tutorial Schritt diese Ansicht beinhaltet. Dies kann zum Beispiel mit folgendem Code reasliert werden:

```html
<div *ngIf="this.tutorial.steps[this.currentStep].view == View.NEW_COMPONENT">
  <app-new-component></app-new-component>
</div>
```
Nun kann die Ansicht im Tutorial verwendet werden.

