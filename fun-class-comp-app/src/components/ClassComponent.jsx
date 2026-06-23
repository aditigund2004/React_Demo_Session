import React, { Component } from "react";

/* 
A class component is a React component written using a JavaScript class. It extends 
Component from React and must have a render() method that returns JSX.

    Uses JavaScript classes
    Uses this.state and setState()
    this Keyword Required


A class component is a React component created using a JavaScript class and 
extends React.Component. A function component is a simple JavaScript function 
that returns JSX. Function components are preferred in modern React because 
they are simpler and can use Hooks such as useState and useEffect to manage state and side effects.
*/
class ClassComponent extends Component {
  render() {
    return <h1>Class Component</h1>;
  }
}

export default ClassComponent;
