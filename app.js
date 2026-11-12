import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", { id: "heading" }, "Hi There")

// const jsxHeading = (<h1 id="heading" className="head">HI There in jsx</h1>)

// const jsxHeading = <h1 id="heading" className="head">HI There in jsx</h1>

// multiple components//--------------------------------------------------

// const Title = () => {
//     return <h2>Hello title componenet</h2>
// }

// const JsxFunctionComponent = () => {
//     return (
//         <div>
//             <Title />
//   can also write <Title></Title>
//             <h1>Hello</h1>
//         </div>
//     )
// }

//--------------------------------------------------
// render react element into component

// const title = (
//     <h1>
//         Hello React element Title
//     </h1>
// )
// const JsxFunctionComponent = function () {
//     return (
//         <div>
//             {/* <Title /> */}
//             {title}
//             <h2>{100 + 200}</h2>
//             <h1>Hello</h1>
//         </div>
//     )
// }

//--------------------------------------------------
//Element inside element

// const titleElement = <h2>Hello Title Element</h2>

// const mainElement = (
//     <div>
//         <div>
//             {titleElement}
//             I am Main Element
//         </div>
//     </div>

// )

//object inside the React Element / componenet

const data = {
    "id": "Hello",
    "name": "world"
}

const mainElement = (
    <div>
        <div>
            {data}
            I am Main Element
        </div>
    </div>

)

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)  this is how you render a React Element
// root.render(<JsxFunctionComponent />)  // this is how you render a functional component
root.render(mainElement)