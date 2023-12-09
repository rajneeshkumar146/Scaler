/**
 * 1. type: 
 *       -> string : html element: document.createElement
 *       -> function: custom component: call that function and if we have props then pass that also.
 * 
 * 2. Props:
 *       -> Object
 *       -> values -> string : normal attributes ex: class, id -> setAttribute
 *       -> children:
 *                 -> Arrays
 *                 -> can have value as string
 *                 -> can have value as function : custom element
 *                 -> can have objcet : normal element
 */


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

/** 
<div class="container">
    <h1> this is</h1>
    <p class="paragraph">I am <button>1 clicks</button> from </p>
</div>
*/

function render(obj) {
    let element;
    // is your type is string -> it is normal Element;
    if (typeof obj.type === "string") {
        element = document.createElement(obj.type);
    }

    const props = obj.props;
    for (let prop in props) {
        if(prop === "children"){
            const children = props[prop];
            let isArray = Array.isArray(children);
            if(isArray){

            }else{

            }
        }
        else if (typeof props[prop] === "string") {
            element.setAttribute(prop, props[prop]); 
        }
    }


}

document.addEventListener("DOMContentLoaded", function () {
    const rootElem = document.querySelector("#root");
    const wholeApp = render(obj);
    console.log("Whole App: ", wholeApp);
    rootElem.appendChild(wholeApp);
});