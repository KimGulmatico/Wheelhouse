import React, { Component } from 'react';
import NavBar from './Components/Navbar'
import Card from './Components/Card'
import './App.css';
import Body from './Components/Body';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="uk-section-primary uk-preserve-color uk-background-default bodyHome">
        <div className="uk-position-relative">
        <div style={{overflow: 'hidden'}}>
        <img src="/images/home.jpg" alt="" style={{minHeight: '500px', minWidth: '500px'}}/>
        </div>
        <div className="uk-position-top">
        <NavBar/>
        </div>
        </div>

        <div className="uk-offcanvas-content">
        <div id="offcanvas-flip" data-uk-offcanvas="flip: true; overlay: true">
             <div className="uk-offcanvas-bar">

                  <ul className="uk-nav uk-nav-default">
                      <li className="uk-nav-header">Menu</li>
                      <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: table"></span> Plans</a></li>
                      <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: users"></span> Community</a></li>
                      <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: calendar"></span> Events</a></li>
                      <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: phone"></span> Contact us</a></li>
                  </ul>

              </div>
        </div>
        </div>

        <div style={{width: '100%'}} align="center" className="bodyHome">
          <Card/>
        </div>

        <div style={{width: '100%'}} className="white">
          <Body/>
        </div>
      </div>

      <button className="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-full">Open</button>

      <div id="modal-full" className="uk-modal-full" data-uk-modal>
          <div className="uk-modal-dialog">
              <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
              <div className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
                  <div className="uk-background-cover" style={{backgroundImage: "url('images/home.jpg')"}} data-uk-height-viewport></div>
                  <div className="uk-padding-large">
                      <h1>Headline</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
              </div>
          </div>
      </div>

      </div>
    );
  }
}

export default App;
