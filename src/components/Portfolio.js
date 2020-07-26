import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <section id="projects">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Projects</h1>
<<<<<<< HEAD
          <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-single cf">
=======
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">
>>>>>>> 8be509097d7080ac4ce8fa8061f09301dfb3952b
          {
            Data.portfolio && Data.portfolio.map((item)=>{
              return(
                <a href={`${item.demoUrl}`}>
                  <div className="columns portfolio-item">
                      <img src={`${item.imgUrl}`} alt={`${item.imgAlt}`} className="img-item"/>
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                      </div>
                      </div>
                      </a>
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