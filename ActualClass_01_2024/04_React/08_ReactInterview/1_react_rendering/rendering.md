## How react renders work.


## JSX -> JS(Transpilation)
* Babel -> JSX -> JS
* React: done the conversion of your UI into a JSON object -> VDOM

Searlize version of my react program is JSON Object and there must be a desrialze alsorithm to convert into HTML/CSS.

1. Intial Render:
* **VDOM** : Virtual DOM: It is a in memory representation of original DOM of the browser.

2. Update few changes: update the state.
* React will create another VDOMM and then it will compare with the previous virtual DOM.
* This proces of comparing our old VDOM with new virtual DOM is known as `Reconcilation`
* React use an algorithm known as `Diffing algorithm` to compare yout old VDOM with the new VDOM.
* Time complexity of our `Diffing Algorithm` -> O(N), Where if N is number of nodes affected in our current VDOM.  

3. Updating the real DOM.
* It will be using those minimum set of changes and with those changes it is going to update real dom.