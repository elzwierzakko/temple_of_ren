import React, { Component } from "react";
import ReactDOM from "react-dom";

let Updates = () => {
    return (
        <div className="updates">
          <h2>Latest in the Temple!</h2>
        <h3>01.01.2021</h3>,
        <article className="update_content">
            After some work, the first version of the Temple is now published!
            Some sections are still severley WIP and the site has no mobile support.
            This will be added later, but also depends on feedback and necesity. 
            <div className="braker"></div>
            Please feel free to test and send suggestions.
            <div className="braker"></div>
            ~El Zwierzakko
        </article>
        </div>
    )
};

export default Updates;
