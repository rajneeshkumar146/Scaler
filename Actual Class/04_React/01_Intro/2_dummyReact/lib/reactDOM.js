let ReactDOM = {};
function render(component, root) {
    let OptimizeDOM = react(component);
    console.log("Rendering to DOM");
    root.innerHTML = OptimizeDOM;
}

ReactDOM.render = render;