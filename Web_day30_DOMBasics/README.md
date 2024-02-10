## 25-1 What Is Event, Different Types Of Event In Web

In web development, an event is an action or occurrence that happens in the system or in the document that triggers a response from the software or application. Events can be user-initiated actions, such as clicking a button or typing into a form field, or they can be system-generated, such as the completion of an asynchronous operation or the loading of a web page.

Here are some different types of events commonly encountered in web development:

- Mouse Events:

    - click: Fired when a mouse button is clicked.
    - dblclick: Fired when a mouse button is double-clicked.
    - mouseover / mouseout: Fired when the mouse pointer enters or leaves an element.
    - mousemove: Fired when the mouse pointer is moved over an element.

- Keyboard Events:

    - keydown / keyup: Fired when a key on the keyboard is pressed or released.
    - keypress: Fired when a key that produces a character value is pressed.

- Form Events:

    - submit: Fired when a form is submitted.
    - change: Fired when the value of an input element changes (e.g., when a user selects a different option in a dropdown).
    - input: Similar to change, but fired immediately when the value of an input element changes.

- Document/Window Events:

    - load: Fired when the document or a resource (such as an image) has finished loading.
    - unload: Fired when the document is being unloaded (e.g., when the user navigates away from the page).
    - resize: Fired when the browser window is resized.

- Touch Events (for touch-enabled devices):

    - touchstart / touchend: Fired when a touch point is placed on or removed from the touch surface.
    - touchmove: Fired when a touch point is moved along the touch surface.

- Media Events (for audio and video elements):

    - play, pause, ended, etc.: Fired when playback of audio/video content begins, pauses, ends, etc.

- Drag and Drop Events:

    - dragstart, dragend, dragover, etc.: Fired during drag-and-drop operations.

- Custom Events:

    - Events that developers create and dispatch programmatically using JavaScript.
    
These are just a few examples of the many events available in web development. Each event type has specific properties and methods associated with it, allowing developers to respond to and manipulate the behavior of their web applications dynamically.