import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#hide" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
               <li><a href="https://drive.google.com/file/d/1a1lfk70F6lYm3ohBhexyVIOCxdhlwozE/view?usp=sharing" rel="noopener noreferrer" target="_blank">Download Resume</a></li>

            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{Data.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{Data.role}.{Data.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    Data.socialLinks && Data.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#projects"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}