import React, { Component } from 'react'

class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (<div >
            <div style={{maxWidth: '1300px'}}>
                <div align="left" className="eventsTitle">
                    <p className="uk-h1 cardText">WHAT'S UP & COMING</p>
                    <p className="uk-h5 cardText" style={{marginTop: '-17px'}}>The Wheelhouse caters events and workshops</p>
                </div>
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                    <div className="uk-card-media-left uk-cover-container" style={{width: '300px'}}>
                        <img src="images/home.jpg" alt="" data-uk-cover />
                        <canvas width="600" height="400"></canvas>
                    </div>
                    <div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Media Left</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Events