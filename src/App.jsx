
/* import * as React from "react";
const title = "react";
function App() {
  return (
  <div>
    <h1>Hello World</h1>
    <label htmlFor= "search">Search: </label>
    <input id="search" type="text" />
  </div>
  );
}
export default App; */
/* import * as React from "React";
const welcome = {
  greeting:"Hey",
  title: "React",
};
function App() {
  return (
    <div>
      <h1>
        {welcome.greeting}  {welcome.title}
      </h1>
      <label htmlfor="search">Search: </label>
      <input id="search" type="text"/>
    </div>
  );
}
export default App; */
import * as React from "react";
function getTitle(title) {
  return title;
}
function App() {
  return (
    <div>
<h1>Hello {getTitle("React")}</h1>
<label htmlFor="search">Search: </label>
<input id="search" type="text" />
    </div>
  );
}
export default App;
