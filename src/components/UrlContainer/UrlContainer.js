import React from 'react';
import './UrlContainer.css';

const UrlContainer =  props  => {
  const urlEls = props.urls.map(url => {
    return (
      <div className="url">
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { !urlEls.length  &&
       <p>No urls yet! Find some to shorten!</p>
      }
      <div>
        <p>You have URLs!</p>
        {urlEls}
      </div>
    </section>
  )
}

export default UrlContainer;
