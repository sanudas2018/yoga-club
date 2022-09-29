import React from "react";
import "./QuestionAnswer.css";

const QuestionAnswer = () => {
  return (
    <div className="mb-10">
      <div className="container-question w-[90%] mx-auto">
        <div className="question my-4">
          <h1 className="font-semibold text-4xl mb-3 text-pink-600">
            How does react work?
          </h1>
          <p className="text-xl ">
            React is a JavaScript library (not a framework) that creates user
            interfaces (UIs) in a predictable and efficient way using
            declarative code.React JS is declarative, efficient and
            flexible.React components work similarly to JavaScript functions as
            they accept arbitrary inputs called properties or props. React
            Library lets us generate HTML, React DOM renders our DOM. React is a
            Virtual DOM is a javaScript Representation of the actual DOM. You
            can use it to help build single page applications and mobile apps,
            or to build complex apps if you utilise it with other libraries.
            Note: React is not a framework. It is just a library developed by
            Facebook to solve some problems that we were facing earlier.
          </p>
        </div>
        <div className="question my-4">
          <h1 className="font-semibold text-4xl mb-3 text-pink-600">
            Difference between props and state in react?
          </h1>
          <p className="text-xl ">
            <strong>Props: </strong>Props are read-only. Props can not be
            modified. We use props in react to pass data from one component to
            another ( from a parent component to a child component’s ) .
            <br></br>
            <strong>1. </strong>
            React state is mutable and its value can be changed as per
            requirement.<br></br>
            <strong>2. </strong>Set by parent component.<br></br>{" "}
            <strong>3. </strong>State is local to a component and cannot be used
            in other components.
            <br></br>
            <strong>State: </strong> The state is a built-in React object that
            is used to contain data or information about the component. state
            changes can be asynchronous. The change in state can happen as a
            response to user action or system-generated events. State can be
            modified using this.setState.<br></br>
            <strong>1.</strong>Props are immutable, that is their content cannot
            be changed once assigned.<br></br>
            <strong>2. </strong> Set by event handlers that is they are
            completely managed by the component itself.<br></br>
            <strong>3. </strong> Props allows child components to read values
            from parent components.
          </p>
        </div>
        <div className="question my-4">
          <h1 className="font-semibold text-4xl mb-3 text-pink-600">
            What does useEffect do other than load data?
          </h1>
          <p className="text-xl ">
            useEffect is a called hook.The useEffect Hook allows you to perform
            side effects in your components. Some examples of side effects are:
            fetching data, directly updating the DOM, and timers(setTimeout).
            <br></br>
            <strong>-</strong>To use the useEffect Hook.<br></br>{" "}
            <strong>1. </strong> we need to know a few things. We import
            useEffect from “react”.<br></br>
            <strong>2. </strong> We call it above the returned JSX in our
            component.<br></br>
            <strong>3. </strong> We usually pass two arguments: a function and
            an array.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
