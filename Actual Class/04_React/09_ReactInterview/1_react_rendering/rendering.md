## How react Renders work.

## JSX -> JS(Transpilation)
* Babel -> JSX -> js
* React: done the conversion of your UI into a JSON object -> VDOM.


Searilize version of my react program is JSON Object and there must be a desearalise algorithm to convert into HTML/CSS.


1. Intial Render:
* **VDOM** : virtual Dom: It is a in memory representation of original DOM of the browser.

2. Update few Changes: update the state
* React will create another VDOM and then it will compare with the previous virtal DOM. 
* this process of comparing our old VDOM with new virtual DOM is know as `Reconcilation`.
* Recat use an algorithm known as `Diffing Algorithm` to compare your old VDOM with new VDOM.
* Time complexity of our `Diffing Algorithm` -> O(N), Where is no of nodes in our current virual DOM.

3. Updating the Real DOM:
* It will be using those minimum set of chnages and with those changes it is going to update real dom.