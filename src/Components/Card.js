import React, {Component} from 'react'
import '../App.css'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div align="center">
            <div style={{maxWidth: '1200px'}} className="card">
                <div className="uk-child-width-1-3@s uk-text-center" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">
                    <div>
                        <div className="uk-box-shadow-large padding white">
                            <img src="images/lamp.svg" width="150" height="150"/>
                            <p className="uk-text-small">*starts at P300</p>
                            <p className="uk-h1 cardText">office <br/> space</p>
                            work any where in the space,<br/>anytime, the way you want it
                            <br/>
                            <br/>
                            <button class="uk-button uk-button-default round">Reserve</button>
                        </div>
                    </div>

                    <div>
                        <div className="uk-box-shadow-large padding white">
                            <img src="images/chair.svg" width="150" height="150"/>
                            <p className="uk-text-small">*starts at P999</p>
                            <p className="uk-h1 cardText">dedicated <br/> desk</p>
                            own up your space with a dedicated <br/> desk / work station with your own storage
                            <br/>
                            <br/>
                            <button class="uk-button uk-button-default round">Reserve</button>
                        </div>
                    </div>

                    <div>
                        <div className="uk-box-shadow-large padding white">
                            <img src="images/meetingrooms.svg" width="150" height="150"/>
                            <p className="uk-text-small">*starts at P999</p>
                            <p className="uk-h1 cardText">meeting <br/> rooms</p>
                            work any where in the space,<br/>anytime, the way you want it
                            <br/>
                            <br/>
                            <button class="uk-button uk-button-default round">Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Card