## 🌷Module 6_5-1 Pseudo Class Hover, Visited, Focus

### ✅Pseudo Classes: 

Pseudo classes are used to select and style elements based on their state or position, without the need for additional classes in the HTML markup. Here's a brief explanation:

In web development, pseudo classes are used in CSS to define styles for specific states or positions of HTML elements. They are denoted by a colon after the selector. Some common pseudo classes include:

- `:hover:` Applies styles when the user hovers over an element.
- `:active:` Applies styles when an element is being activated (clicked on).
- `:focus:` Applies styles when an element is in focus (e.g., when selected with the keyboard).
- `:first-child:` Selects the first child element of a parent.
- `:nth-child(n):` Selects the nth child element of a parent.

Se more at : <a href="https://www.w3schools.com/css/css_pseudo_classes.asp">Pseudo classes</a>

---

## 🌷Module 6_5-2 Position Static Relative Absolute Fixed Sticky

### ✅ CSS Position: 

In CSS, the position property is used to control the positioning of an element within its containing element. There are several values for the position property, each with its own behavior. The most common values are:

- `Static (position: static;):` This is the default position value. Elements with position: static; are positioned in the normal flow of the document, meaning they will be displayed one after another based on the document's natural layout.
- `Relative (position: relative;):` When an element has position: relative;, it is positioned relative to its normal position in the document flow. You can then use top, right, bottom, and left properties to offset it from its normal position.
- `Absolute (position: absolute;):` An element with position: absolute; is positioned relative to its closest positioned (not static) ancestor element. If there is no positioned ancestor, it's positioned relative to the initial containing block (usually the `<html>` element).
- `Fixed (position: fixed;):` An element with position: fixed; is positioned relative to the browser window. It will stay in the same position even if the page is scrolled.
- `Sticky (position: sticky;):` This is a hybrid of relative and fixed positioning. The element is treated as relative positioned within its containing block until it crosses a specified point, then it is treated as fixed positioned.

Se more at : <a href="https://app.uxcel.com/courses/css-for-designers/css-position-047">CSS Position</a>

---

## 🌷Module 6_5-3 Stack Elements Z-Index And Pseudo Element

When working with the stacking order of elements in CSS, the z-index property is used to determine the stacking context of an element. Additionally, pseudo-elements can be utilized to create virtual elements and apply styles to specific parts of an element. Here's a brief explanation:

### ✅ Z-Index: 

The z-index property specifies the stacking order of positioned elements. Elements with a higher z-index value will be stacked above elements with lower values.

🎃 Example:

```css

div {
  position: relative;
  z-index: 1;
}

span {
  position: relative;
  z-index: 2;
}

```
In this example, the span element will be stacked above the div element due to its higher z-index value.

### ✅Pseudo-Elements:

Pseudo-elements are used to style specific parts of an element. Commonly used pseudo-elements include ::before and ::after.

Example:

```css

div::before {
  content: "Before";
  display: block;
  background-color: #ccc;
}

div::after {
  content: "After";
  display: block;
  background-color: #ddd;
}

```
In this example, the `::before and ::after` pseudo-elements will create virtual elements before and after the content of the div, respectively.

### ✅Combining z-index and Pseudo-Elements:

You can use z-index in combination with pseudo-elements to control the stacking order of generated content.

Example:

```css

div {
  position: relative;
  z-index: 1;
}

div::before {
  content: "Before";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

```
In this case, the `::before` pseudo-element is positioned behind the div because of its negative z-index value.

---