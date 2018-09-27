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
                        <div className="uk-box-shadow-medium padding white">
                            <img src="images/chair.svg" width="150" height="150"/>
                            <p className="uk-h1 cardText">lounge <br/> <br/></p>
                            Have the  flexibility to select where you <br/>sit everyday in our open lounge area
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <button class="uk-button uk-button-default round">Reserve</button>
                        </div>
                    </div>

                    <div>
                        <div className="uk-box-shadow-medium padding white">
                            <img src="images/lamp.svg" width="150" height="150"/>
                            <p className="uk-h1 cardText">dedicated <br/> desk</p>
                            Keep the same desk everyday in a private floor shared with other professionals or in the open office areas
                            <br/>
                            <br/>
                            <br/>
                            <button class="uk-button uk-button-default round">Reserve</button>
                        </div>
                    </div>

                    <div>
                        <div className="uk-box-shadow-medium padding white">
                            <img src="images/office.svg" width="150" height="150"/>
                            <p className="uk-h1 cardText">private <br/> office</p>
                            Enjoy a convenient private office with sizes designed for teams of 5 to 15 people
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <button class="uk-button uk-button-default round">Reserve</button>
                        </div>
                    </div>

                    <div>
                        <div className="uk-box-shadow-medium padding white">
                            <img src="images/virtualoffice.svg" width="150" height="150"/>
                            <p className="uk-h1 cardText">virtual <br/> office</p>
                            Make The Wheelhouse your office address. This includes mail handling and meeting room access.
                            <br/>
                            <br/>
                            <br/>
                            <button class="uk-button uk-button-default round">Reserve</button>
                        </div>
                    </div>

                    <div>
                        <div className="uk-box-shadow-medium padding white">
                            <img src="images/meetingrooms.svg" width="150" height="150"/>
                            <p className="uk-h1 cardText">meeting <br/> rooms</p>
                            Engage with clients and discuss <br/> important details with privacy
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <button class="uk-button uk-button-default round">Reserve</button>
                        </div>
                    </div>

                    <div>
                        <div className="uk-box-shadow-medium padding white">
                            <img src="images/rooflounge.svg" width="150" height="150"/>
                            <p className="uk-h1 cardText">rooftop <br/> lounge</p>
                            Network and share ideas with other founders, investors, media, industry executives, academics and creatives through curated private events on the rooftop
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