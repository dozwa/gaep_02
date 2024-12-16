# GAEP Frontend Tutorial
[Switch to german](/Frontend/app/GAEP/src/app/components/tutorial/README_deutsch.md)

[back to main README](/README.md)

A tutorial has been implemented in this component for understanding the GAEP user interface. The tutorial sequentially displays various explanations for the individual components and controls of the application.

The tutorial is designed so that it does not need to be recreated after every change to the application. HTML elements are identified and highlighted using an identifier.

The tutorial consists of individual steps that the user must navigate through. In each of these steps, a text and a corresponding element of a view are displayed. To facilitate the creation of a tutorial, a structure has been established that allows new steps to be easily defined. The following describes how to create a tutorial.

## Creating a Tutorial
The `Tutorial.ts` file defines the steps in sequence. The tutorial is loaded and displayed step by step. To define a step, an object (`TutorialStep`) is required with the following three parameters:
- `Text` (String): The text to be displayed.
- `ElementSpecifier` (String): An identifier as a string, which identifies an element by a class or ID.
- `view` (View enum): A view to be displayed.

## Implementation Description
For each step, the respective view is brought into focus. Subsequently, the HTML DOM Tree is searched for all elements based on the specified CSS class or ID. The `highlight` CSS class is then added to all found elements, which outlines the element in red and highlights it. When a new tutorial step is called, the CSS class is removed.

### Adding an Element
To highlight an element, a CSS class or an ID must be added to it, which can be used to identify the element. This class or ID can then be included in the `ElementSpecifier` of a tutorial step.

### Adding a View
To add another view, an entry must first be made in the `View` enum in the `TutorialModel.ts`.

Next, the corresponding component to be displayed must be integrated into the `tutorial.component.html`. It must be ensured that it is only displayed if the current tutorial step includes this view. This can be achieved, for example, with the following code:

```html
<div *ngIf="this.tutorial.steps[this.currentStep].view == View.NEW_COMPONENT">
  <app-new-component></app-new-component>
</div>
```
Now the view can be used in the tutorial.