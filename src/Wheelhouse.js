import React, { Component } from 'react';
import NavBar from './Components/Navbar'
import Card from './Components/Card'
import './App.css';
import Body from './Components/Body';
import axios from 'axios'
import {connection} from './Connection'


class Wheelhouse extends Component {
  constructor(props){
    super(props)
    this.state = {
        fullname: '',
        cpnyname: '',
        email: '',
        mobile: '',
        notes: ''
    }

    this.radioBox = this.radioBox.bind(this)
    this.radioBox2 = this.radioBox2.bind(this)
    this.radioBox3 = this.radioBox3.bind(this)
    this.radioBox4 = this.radioBox4.bind(this)
    this.inputs = this.inputs.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  resetState() {
      for(let key in this.state) {
          this.setState({[key]: ''})
      }
  }

  closeOffCanvas = () => {
    window.UIkit.offcanvas('#offcanvas-flip').hide()
  }

  radioBox(e) {
    let val = document.getElementById(e.target.id).innerHTML
    console.log(e.target.id)
    this.setState({a1: 'transparent', 
                    a2: 'transparent', 
                    a3: 'transparent', 
                    a4: 'transparent', 
                    [e.target.id]: '#ffd16d',
                    aval: val})
  }

  radioBox2(e) {
    let val = document.getElementById(e.target.id).innerHTML
    console.log(e.target.id)
    this.setState({b1: 'transparent', 
                    b2: 'transparent', 
                    b3: 'transparent', 
                    b4: 'transparent', 
                    [e.target.id]: '#ffd16d',
                    bval: val})
  }

  radioBox3(e) {
    let val = document.getElementById(e.target.id).innerHTML
    console.log(e.target.id)
    this.setState({c1: 'transparent', 
                    c2: 'transparent', 
                    c3: 'transparent',  
                    [e.target.id]: '#ffd16d',
                    cval: val})
  }

  radioBox4(e) {
    let val = document.getElementById(e.target.id).innerHTML
    console.log(e.target.id)
    this.setState({d1: 'transparent', 
                    d2: 'transparent', 
                    d3: 'transparent', 
                    d4: 'transparent',
                    d5: 'transparent',
                    d6: 'transparent', 
                    [e.target.id]: '#ffd16d',
                    dval: val})
  }

  inputs(e) {
    console.log(e.target.value, e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }

  async sendEmail(){
    let data = {
        fullname: this.state.fullname,
        cpnyname: this.state.cpnyname,
        email: this.state.email,
        mobile: this.state.mobile,
        notes: this.state.notes,
        aval: this.state.aval,
        bval: this.state.bval,
        cval: this.state.cval,
        dval: this.state.dval
    }
    
    let allow = false;

    for(var key in data){
        if(data[key] === "" || typeof(data[key]) === "undefined" || data[key] == null){
            allow = false
            alert('Fill all fields')
            break;
        }
        else
        allow = true
    }
    if(allow){
    let response = await axios.get(`${connection.protocol}://${connection.serverphp}/wheelhouse/mail.php?data=${JSON.stringify(data)}`);
    allow = false;
    alert(response.data)
    window.UIkit.modal('#modal-full').hide();
    this.resetState()
    }
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
                        <div id="a1" className="col" style={{backgroundColor: this.state.a1}} onClick={this.radioBox}>
                            Private Office
                        </div>
                        <div id="a2" className="col" style={{backgroundColor: this.state.a2}} onClick={this.radioBox}>
                            Shared desk are fine
                        </div>
                        <div id="a3" className="col" style={{backgroundColor: this.state.a3}} onClick={this.radioBox}>
                            Just a lounge to work from sometimes
                        </div>
                        <div id="a4" className="col" style={{backgroundColor: this.state.a4}} onClick={this.radioBox}>
                            A mix
                        </div>
                    </div>
                    <h6>When do you need it?</h6>
                    <div class="col-container" style={{columnGap: '0px'}}>
                        <div id="b1" className="col" style={{backgroundColor: this.state.b1}} onClick={this.radioBox2}>
                            Yesterday
                        </div>
                        <div id="b2" className="col" style={{backgroundColor: this.state.b2}} onClick={this.radioBox2}>
                            Next Month
                        </div>
                        <div id="b3" className="col" style={{backgroundColor: this.state.b3}} onClick={this.radioBox2}>
                            Next 3 Months
                        </div>
                        <div id="b4" className="col" style={{backgroundColor: this.state.b4}} onClick={this.radioBox2}>
                            A few months at most
                        </div>
                    </div>
                    <h6>For how long do you need it?</h6>
                    <div class="col-container" style={{columnGap: '0px'}}>
                        <div id="c1" className="col" style={{backgroundColor: this.state.c1}} onClick={this.radioBox3}>
                            At least a year
                        </div>
                        <div id="c2" className="col" style={{backgroundColor: this.state.c2}} onClick={this.radioBox3}>
                            Less than a year
                        </div>
                        <div id="c3" className="col" style={{backgroundColor: this.state.c3}} onClick={this.radioBox3}>
                            A few months at most
                        </div>
                    </div>
                    <h6>How big is your team?</h6>
                    <div class="col-container" style={{columnGap: '0px'}}>
                        <div id="d1" className="col" style={{backgroundColor: this.state.d1}} onClick={this.radioBox4}>
                            Just me
                        </div>
                        <div id="d2" className="col" style={{backgroundColor: this.state.d2}} onClick={this.radioBox4}>
                            Fewer than 5
                        </div>
                        <div id="d3" className="col" style={{backgroundColor: this.state.d3}} onClick={this.radioBox4}>
                            5-10
                        </div>
                        <div id="d4" className="col" style={{backgroundColor: this.state.d4}} onClick={this.radioBox4}>
                            11-20
                        </div>
                        <div id="d5" className="col" style={{backgroundColor: this.state.d5}} onClick={this.radioBox4}>
                            Fewer than 50
                        </div>
                        <div id="d6" className="col" style={{backgroundColor: this.state.d6}} onClick={this.radioBox4}>
                            More than 50
                        </div>
                    </div>
                  </div>
                  <div className="uk-padding-large">
                    <fieldset className="uk-fieldset">
                    
                        <div className="uk-margin">
                            <input name="fullname" onChange={this.inputs} value={this.state.fullname} className="uk-input input" type="text" placeholder="Full name"/>
                        </div>

                        <div className="uk-margin">
                            <input name="cpnyname" onChange={this.inputs} value={this.state.cpnyname} className="uk-input input" type="text" placeholder="Company name"/>
                        </div>

                        <div className="uk-margin">
                            <input name="email" onChange={this.inputs} value={this.state.email} className="uk-input input" type="text" placeholder="Email address"/>
                        </div>

                        <div className="uk-margin">
                            <input name="mobile" onChange={this.inputs} value={this.state.mobile} className="uk-input input" type="text" placeholder="Phone number"/>
                        </div>

                        <div className="uk-margin">
                            <textarea name="notes" onChange={this.inputs} value={this.state.notes} className="uk-textarea input" rows="3" placeholder="Notes"></textarea>
                        </div>
                        <p data-uk-margin align="right">
                            <button class="uk-button uk-button-default buttonYellow" onClick={this.sendEmail}>Submit</button>
                        </p>

                    </fieldset>
                  </div>
              </div>
          </div>
      </div>

      </div>
    );
  }
}

export default Wheelhouse;
