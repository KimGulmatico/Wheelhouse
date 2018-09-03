import React, { Component } from 'react'

class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (<div >
            <div style={{ maxWidth: '1300px' }}>
                <div align="left" className="eventsTitle">
                    <p className="uk-h1 cardText">WHAT'S UP & COMING</p>
                    <p className="uk-h5 cardText" style={{ marginTop: '-17px' }}>The Wheelhouse caters events and workshops</p>
                </div>

                <div className="uk-flex-middle padding" data-uk-grid style={{marginTop: 0, marginBottom: 0}}>
                    <div className="uk-width-1-3@m">
                        <img src="images/home.jpg" alt="Image" className="eventsImage"/>
                    </div>
                    <div className="uk-width-2-3@m" align="left">
                        <h3 className="uk-card-title" style={{margin: 0, padding: 0}}>Event Title</h3>
                        <span style={{fontSize: '16px'}}>12/28/11</span> <br/>
                        <span style={{fontSize: '16px'}}>By: Startup Project</span> <br/>
                        <span style={{fontSize: '16px'}}>Location: Wheelhouse</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>

                <hr/>

                <div className="uk-flex-middle padding" data-uk-grid style={{marginTop: 0, marginBottom: 0}}>
                    <div className="uk-width-1-3@m">
                        <img src="images/home.jpg" alt="Image" className="eventsImage"/>
                    </div>
                    <div className="uk-width-2-3@m" align="left">
                        <h3 className="uk-card-title" style={{margin: 0, padding: 0}}>Event Title</h3>
                        <span style={{fontSize: '16px'}}>12/28/11</span> <br/>
                        <span style={{fontSize: '16px'}}>By: Startup Project</span> <br/>
                        <span style={{fontSize: '16px'}}>Location: Wheelhouse</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>

                <hr/>

                <div className="uk-flex-middle padding" data-uk-grid style={{marginTop: 0, marginBottom: 0}}>
                    <div className="uk-width-1-3@m">
                        <img src="images/home.jpg" alt="Image" className="eventsImage"/>
                    </div>
                    <div className="uk-width-2-3@m" align="left">
                        <h3 className="uk-card-title" style={{margin: 0, padding: 0}}>Event Title</h3>
                        <span style={{fontSize: '16px'}}>12/28/11</span> <br/>
                        <span style={{fontSize: '16px'}}>By: Startup Project</span> <br/>
                        <span style={{fontSize: '16px'}}>Location: Wheelhouse</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>

                <hr/>
            
            </div>
        </div>)
    }
}

export default Events