
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
    <p class="paragraph">I am   -> "I am <1 Clicks> from" 
       <button>1 clicks</button>
       from 
    </p>
</div> 

*/}


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
    for(let prop in props){
        
    }

}



document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.querySelector("#root");
    const wholeApp = render(obj);
    console.log("wholeApp:", wholeApp);
    rootElement.appendChild(wholeApp);
});