import React, { Component, useState } from "react";
import FooterElement from "./elements/footer"
import ScrollUpButton from "react-scroll-up-button";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const HeaderElement = () => {
  return (

      <div className="logo">
        <img
          src="/res/fologo.png"
          alt="First Order Logo"
          width="70"
          height="70"
        />
        <h1>COMMICS</h1>
      </div>
  );
};

const MenuElement = () => {
  
  return (
    <>
      <div className="top_menu">
        <ul>
          
          <Link to="/movies">MOVIES</Link>
          <Link to="/games">GAMES</Link>
          <Link to="/commics">COMMICS</Link>
          <Link to="/books">BOOKS</Link>
          <Link to="/">MAIN</Link>
        </ul>
      </div>
    </>
  );
};

const Commics = () => {
  return (
    <>
      <ScrollUpButton />
      <header>
      <HeaderElement />
      <MenuElement />
      </header>
      <FooterElement />
    </>
  );
};

export default Commics