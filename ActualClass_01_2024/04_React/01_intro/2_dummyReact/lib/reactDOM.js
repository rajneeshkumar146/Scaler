let ReactDOM = {};

function render(component, root) {
    let optimzedDOM = react(component);
    console.log("Rendering to DOM");
    root.innerHTML = optimzedDOM;
}

ReactDOM.render = render;