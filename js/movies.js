import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import FooterElement from "./elements/footer"
import ScrollUpButton from "react-scroll-up-button";

//app will for now recreate the HTML code 1:1. Please take note that the "top button" is not included.

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton />
      </div>
    );
  }
}
const HeaderElement = () => {
  return (
    <header>
      <div className="logo">
        <img
          src="/res/fologo.png"
          alt="First Order Logo"
          width="70"
          height="70"
        />
        <h1>THE TEMPLE OF REN</h1>
      </div>
      {
        //note that the below component is defined even lower. This is to recreate the HTML structure and is more clear to me.
      }
      <MenuInfoCaruselElement />
    </header>
  );
};

//below element will toggle menu page info visibility.

const MenuInfoCaruselElement = () => {
  const [infoState, infoChange] = useState(false);
  const toggleInfo = () => {
    if (infoState === true) {
      infoChange(false);
    } else {
      infoChange(true);
    }
  };

  return (
    <>
      <div className="top_menu">
        <ul>
          <a className="movies" href="movies.html">
            MOVIES
          </a>
          <a className="games" href="games.html">
            GAMES
          </a>
          <a className="commics" href="commics.html">
            COMMICS
          </a>
          <a className="books" href="books.html">
            BOOKS
          </a>
          <a className="main" href="index.html">
            MAIN
          </a>
        </ul>
      </div>
    </>
  );
};

// Note that not all Elements are listed in the App const. Some are integrated into elements above. Will see with time if this is a good aproach.

const App = () => {
  return (
    <>
      <ScrollUpButton />
      <HeaderElement />
      <FooterElement />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
