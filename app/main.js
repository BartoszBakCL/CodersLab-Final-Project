import "./styles/main.scss"
import React from 'react';
import ReactDOM from "react-dom";

const App = () => {
    return (
        <h1>hello react</h1>
    );
};

ReactDOM.render(<App/>, document.querySelector(`#app`));