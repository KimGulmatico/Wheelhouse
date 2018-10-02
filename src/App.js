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

  closeOffCanvas = () => {
    window.UIkit.offcanvas('#offcanvas-flip').hide()
  }

  render() {
    return (
      <div>
        <div className="uk-section-primary uk-preserve-color uk-background-default bodyHome">
        <div className="uk-position-relative">
        {/* <div style={{overflow: 'hidden'}}>
        <img src="/images/home.jpg" alt="" style={{minHeight: '500px', minWidth: '500px'}}/>
        </div> */}
        <div className="uk-background-cover uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: "url('images/home.jpg')"}} data-uk-height-viewport>
                    {/* <div>
                    <p class="uk-h2">Call Us</p>
                    <p class="uk-h5">Questions about plans, pricing, or availability? <br/> Just have your people call our people.</p>
                    <p class="hk-h5">1-877-796-2434</p>
                    </div> */}
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
                      <li><a href="#about" data-uk-scroll data-offset="100" onClick={this.closeOffCanvas}><span className="uk-margin-small-right" data-uk-icon="icon: info"></span> About</a></li>
                      <li><a href="#ameneties" data-uk-scroll data-offset="100" onClick={this.closeOffCanvas}><span className="uk-margin-small-right" data-uk-icon="icon: thumbnails"></span> Ameneties</a></li>
                      <li><a href="#events" data-uk-scroll data-offset="100" onClick={this.closeOffCanvas}><span className="uk-margin-small-right" data-uk-icon="icon: calendar"></span> Events</a></li>
                      <li><a href="#community" data-uk-scroll data-offset="100" onClick={this.closeOffCanvas}><span className="uk-margin-small-right" data-uk-icon="icon: users"></span> Community</a></li>
                      <li><a href="#plans" data-uk-scroll data-offset="100" onClick={this.closeOffCanvas}><span className="uk-margin-small-right" data-uk-icon="icon: table"></span> Plans</a></li>
                      <li><a href="#partners" data-uk-scroll data-offset="100" onClick={this.closeOffCanvas}><span className="uk-margin-small-right" data-uk-icon="icon: link"></span> Partners</a></li>
                      <li><a data-uk-toggle="target: #modal-full" onClick={this.closeOffCanvas}><span className="uk-margin-small-right" data-uk-icon="icon: phone"></span> Contact us</a></li>
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

      {/* <button className="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-full">Open</button> */}

      <div id="modal-full" className="uk-modal-full" data-uk-modal>
          <div className="uk-modal-dialog">
              <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
              <div className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" data-uk-grid data-uk-height-viewport>
                  <div className="uk-padding-large">
                  <legend className="uk-legend">We’ll Follow Up
                        <h6>One of our workspace experts will reach out to you, based on your communication preferences</h6>
                  </legend>
                  <h6>What is your ideal space?</h6>
                    <div class="col-container" style={{columnGap: '0px'}}>
                        <div className="col">
                            Private Office
                        </div>
                        <div className="col">
                            Shared desk are fine
                        </div>
                        <div className="col">
                            Just a lounge to work from sometimes
                        </div>
                        <div className="col">
                            A mix
                        </div>
                    </div>
                    <h6>When do you need it?</h6>
                    <div class="col-container" style={{columnGap: '0px'}}>
                        <div className="col">
                            Yesterday
                        </div>
                        <div className="col">
                            Next Month
                        </div>
                        <div className="col">
                            Next 3 Months
                        </div>
                        <div className="col">
                            A few months at most
                        </div>
                    </div>
                    <h6>For how long do you need it?</h6>
                    <div class="col-container" style={{columnGap: '0px'}}>
                        <div className="col">
                            At least a year
                        </div>
                        <div className="col">
                            Less than a year
                        </div>
                        <div className="col">
                            A few months at most
                        </div>
                    </div>
                    <h6>How big is your team?</h6>
                    <div class="col-container" style={{columnGap: '0px'}}>
                        <div className="col">
                            Just me
                        </div>
                        <div className="col">
                            Fewer than 5
                        </div>
                        <div className="col">
                            5-10
                        </div>
                        <div className="col">
                            11-20
                        </div>
                        <div className="col">
                            Fewer than 50
                        </div>
                        <div className="col">
                            More than 50
                        </div>
                    </div>
                  </div>
                  <div className="uk-padding-large">
                  <form>
                    <fieldset className="uk-fieldset">
                    
                        <div className="uk-margin">
                            <input className="uk-input input" type="text" placeholder="Full name"/>
                        </div>

                        <div className="uk-margin">
                            <input className="uk-input input" type="text" placeholder="Company name"/>
                        </div>

                        <div className="uk-margin">
                            <input className="uk-input input" type="text" placeholder="Email address"/>
                        </div>

                        <div className="uk-margin">
                            <input className="uk-input input" type="text" placeholder="Phone number"/>
                        </div>

                        <div className="uk-margin">
                            <textarea className="uk-textarea input" rows="3" placeholder="Notes"></textarea>
                        </div>
                        <br/>
                        <p data-uk-margin align="right">
                            <button class="uk-button uk-button-default buttonYellow">Submit</button>
                        </p>

                    </fieldset>
                </form>
                  </div>
              </div>
          </div>
      </div>

      </div>
    );
  }
}

export default App;
