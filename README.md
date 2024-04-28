NOTES-
REACT
 It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.

Is React a library or framework?

## Q: Difference between a `Library and Framework`?

A: A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.

A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.

The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.












Lets try our first code in React!
HELLOWORLD IN HTML-
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root">
      <h1>HelloWorld from HTML!</h1>
    </div>
  </body>
</html>

HELLOWORLD IN JAVASCRIPT-
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root">
      <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from JAVASCRIPT";
        const root = document.getElementById("root");
        root.appendChild(heading);
      </script>
    </div>
  </body>
</html>


HELLOWORLD IN REACT-
## Q: What is `CDN`? Why do we use it?
A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The goal is to provide high availability and performance by distributing the service spatially relative to end users.

INSTALL CDN IN OUR REACT APP-
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root"> </div>
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
       <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
   </body>
</html>


## Q: What is difference between `React and ReactDOM`?
A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.

The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A:`Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.

## Q: What is `crossorigin in script tag`?
The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.


NOW LETS WRITE HELLOWORLD IN REACT-
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root"> </div>

       <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
       <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script>
        const heading = React.createElement('h1',{},'HelloWorld from React')
        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(heading)
      </script>
   </body>
</html>


IMPORTANT-
React.createElement will not make an element it will create an object while root.render will create the html tag 
We can console.log heading to see that we will get an object-
 
HOW CAN WE CREATE MULTIPLE ELEMENTS AND NEST THEM INSIDE-
Lets use JS file APP.js and use script src
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

On console
 



