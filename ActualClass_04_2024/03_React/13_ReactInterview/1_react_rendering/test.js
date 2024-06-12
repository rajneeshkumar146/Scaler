
const obj =
{
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: (props) => ({
                                type: "button", props:
                                    { children: props.counter + "Clicks" }
                            }),
                            props: { counter: 1 }
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}



function render(obj) {
    let element;
    if(typeof obj.type === "string"){
        element = document.createElement(obj.type);
    }else if(typeof obj.type === 'function'){
        const prop = obj["props"];
        let elementObj = obj.type(prop);
        return render(elementObj)
    }

    const props = obj.props;
    for(let prop in props) {
        if (prop === "children") {
            const childrenProp = props[prop];
            if(Array.isArray(childrenProp)) {
                for(let i = 0; i < childrenProp.length; i++) {
                    let childPropValue = childrenProp[i];
                    if(typeof childPropValue === "string") {
                        const textNode = document.createTextNode(childPropValue);
                        element.appendChild(textNode);
                    } else {
                        const childElem = render(childPropValue);
                        element.appendChild(childElem);
                    }
                }
            } else {
                const childElem = document.createTextNode(props[prop]);
                element.appendChild(childElem);
            }
        }
        else if(typeof props[prop] === "string") {
            element.setAttribute(prop, props[prop]);
        }
    }

}

document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.querySelector("#root");
    const wholeApp = render(obj);
    console.log("wholeApp:", wholeApp);
    rootElement.appendChild(wholeApp);
});
