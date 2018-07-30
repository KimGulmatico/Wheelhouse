import React, { Component } from 'react';
import NavBar from './Components/Navbar'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="uk-section-primary uk-preserve-color uk-background-default">
        <div className="uk-position-relative">
        <img src="/images/home.jpg" alt=""/>
        <div className="uk-position-top">
        <NavBar item1="kim"/>
        </div>
        </div>

        <div className="uk-offcanvas-content">
        <div id="offcanvas-flip" data-uk-offcanvas="flip: true; overlay: true">
             <div className="uk-offcanvas-bar">

                  <ul className="uk-nav uk-nav-default">
                      <li className="uk-nav-header">Menu</li>
                      <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: table"></span> Plans</a></li>
                      <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: users"></span> Community</a></li>
                      <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: calendar"></span> Events</a></li>
                      <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: phone"></span> Contact us</a></li>
                  </ul>

              </div>
        </div>
        </div>

        <div className="uk-section">
            <div className="uk-container">
            </div>
        </div>

        

        </div>
      </div>
    );
  }
}

export default App;
