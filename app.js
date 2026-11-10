
//React ELement is an object => this is converts into html and works on the browser

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am an H1 tag"), React.createElement("h2", {}, "I am an h2 tag")]), React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am an H1 tag"), React.createElement("h2", {}, "I am an h2 tag")])])

const heading = React.createElement("h1", { id: "heading" }, "Hello World")    // {} is used to give attributes to this object example {id:heading} , Hello world is children here all these together are props , createELement is basically an object
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)   // take this object create h1 tag which browser recognizes

root.render(parent)
