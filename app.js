{
  /* <div id="parent">
<div id="child">
<h1>Helloworld From H1 tag</h1>
<h2>Helloworld From H2 tag</h2>
</div>
</div> */
}

// Create this using react

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Helloworld From H1 tag"),
    React.createElement("h2", {}, "Helloworld From H2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);