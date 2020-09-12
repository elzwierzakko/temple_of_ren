import React, { Component } from "react";
import ReactDOM from "react-dom";

const newsList = [
    {
      title: "The Fandom Menace Review by Maj0r Lee",
      id: 2,
      avatarLink: `/res/fandomscum.png`,
      avatarAlt: `fandomscum`,
      content: `Feels strange being a fan does it not? Maybe sometimes you think that you lost your mind? Or maybe that everyone else did?
      The truth is that you are fine. Everything is fine. We are all fine... here. There are however toxic people out there. We should however remember 
      that they are not "EVERYONE", they are in fact a small, delusional minority. This is where this awesome video review comes in.
      It's not a new video. In fact, many of you may have seen it many weeks ago. Still if you havent, please take some time to view this
      material. If you like it, please give Maj0r Lee a sub. I am sure he will appreciate it. As always: May the force be with you!`,
      buttomText: "GO TO VIDEO",
      buttonLink: `https://www.youtube.com/watch?v=MM-3lw9bIjE`
    },
    {
      title: "The better side of Reddit",
      id: 1,
      avatarLink: `/res/reddit.png`,
      avatarAlt: `reddit`,
      content: `Funny times on reddit. The hater echo chamber is indeed strong there (same with BooTube).
      But do not despair my fellow Knights of Ren! Even in wretched hive of scum and villainy we can be found allies.
      R/TheSequels is a relatively young subreddit but it is growing fast. Rearly ever does a hater head pop up.
      If you are tired of hearing the same old, same old on sites taken over by the vocal minority then give this sub a try.
      Many good things can be found there. Give it a shoot before you decide to never visit Reddit for good. 
  
      May the force be with you!`,
      buttomText: "GO TO: R/THESEQUELS",
      buttonLink: `https://www.reddit.com/r/TheSequels/`
    },
  ];
  
  
  const NewsElStructure = () => newsList.map(function (el, i) {
    return (
    <div className="news_article" key={i}>
    <h3>{el.title}</h3>
    <div className="article_wrapper" id={el.id}>
      <img
        src={el.avatarLink}
        alt={el.avatarAlt}
        width="450"
        height="400"
      />
  
      <p>
        {el.content}
        <br />
        <a className="button" target="_blank" rel="noopener noreferrer" href={el.buttonLink}>{el.buttomText}</a>
      </p>
    </div>
  </div>
  )
  });

  console.log(NewsElStructure);

  const News = () => {
    return <NewsElStructure/>;
}

export default News