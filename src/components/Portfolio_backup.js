import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <section id="projects">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check out some of these demos</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            Data.portfolio && Data.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={`${item.demoUrl}`}>
                      <img src={`${item.imgUrl}`} alt={`${item.imgAlt}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}