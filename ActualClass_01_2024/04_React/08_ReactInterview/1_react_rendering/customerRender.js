/**
 * 1. type: 
 *        -> string: html element: documnet.createElement
 *        -> function: custom component: call that function and if we have props then pass that also 
 * 
 * 2. props:
 *        -> object
 *        -> values -> string: normal attributes ex: class, id -> setAttribute
 *        -> children: 
 *                  -> Arrays
 *                  -> can have values as string
 *                  -> can have values as function: custom element
 *                  -> can have object: normal element. 
 * 
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


{/* 

<div class="container">
    <h1>this is</h1>  
    <p class="paragraph">I am 
       <button>1 clicks</button>
       from
    </p>
</div> 

*/}


/**
 * try to render its react object 
 *  1. First Create react JSON object
 *  2. Write render method wo convert object into given html.
 * 
 * 
 *  Question : [HTML -> React Obj -> render algo -> HTML] 
 <div class="container">
        <h1>Count Down Timer</h1>
        <div class="timer__label">
            <h2 class="timer__label--hrs">Hours</h2>
            <h2 class="timer__label--sec">Second</h2>

            <div class="timer_inputs">
                <input type="number" maxlength="2" oninput="this.value=this.value.slice(0, this.maxLength)" id="sec">
            </div>

            <div class="container__btns">
                <button class="btn start" id="start">Start</button>
            </div>
        </div>
</div>
 * 
 * 
 * 
 */

function render(obj) {
    let element;
    if (typeof obj.type === "string") {
        element = document.createElement(obj.type);
    } else if (typeof obj.type === "function") {
        const prop = obj["props"];
        let elementObj = obj.type(prop);
        return render(elementObj);
    }


    const props = obj.props;
    for (let prop in props) {
        if (prop === "children") {
            const children = props[prop];
            let isArray = Array.isArray(children);
            if (isArray) {
                for (let i = 0; i < children.length; i++) {
                    let child = children[i];
                    if (typeof child === "string") {
                        const textNode = document.createTextNode(child);
                        element.appendChild(textNode);
                    } else {
                        const childElem = render(child);
                        element.appendChild(childElem);
                    }
                }
            } else {
                const childElem = document.createTextNode(props[prop]);
                element.appendChild(childElem);
            }
        } else if (typeof props[prop] === "string") {
            element.setAttribute(prop, props[prop]);
        }
    }

    return element;
}


document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.querySelector("#root");
    const wholeApp = render(obj);
    console.log("wholeApp:", wholeApp);
    rootElement.appendChild(wholeApp);
});





