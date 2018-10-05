import React, {Component} from 'react'

class Ameneties extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (<div id="ameneties">
                <div style={{ maxWidth: '1300px' }}>
                    <div align="left" className="eventsTitle">
                        <p className="uk-h1 cardText">AMENITIES</p>
                        <p className="uk-h5 cardText" style={{ marginTop: '-17px' }}></p>
                    </div>
                    
                    <div style={{maxWidth: '1000px'}}>
                    <ul class="uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" data-uk-grid>
                        <li>
                            <div class="uk-card uk-card-body">
                                <img src="images/router.svg" width="80" height="80"/>
                                <p className="uk-h5 cardText" style={{ marginTop: '5px' }}>HIGH-SPEED WIFI</p>
                                fast and reliable wireless internet connection
                            </div>
                        </li>
                        <li>
                            <div class="uk-card uk-card-body">
                                <img src="images/coffee-cup.svg" width="80" height="80"/>
                                <p className="uk-h5 cardText" style={{ marginTop: '5px' }}>COMPLMENTARY REFRESHMENTS</p>
                                keep yourself fueled up and refreshed
                            </div>
                        </li>
                        <li>
                            <div class="uk-card uk-card-body">
                                <img src="images/meeting.svg" width="80" height="80"/>
                                <p className="uk-h5 cardText" style={{ marginTop: '5px' }}>STUDY LOUNGE</p>
                                have your group study and drink coffee as much as you want
                            </div>
                        </li>
                        <li>
                            <div class="uk-card uk-card-body">
                                <img src="images/calendar.svg" width="80" height="80"/>
                                <p className="uk-h5 cardText" style={{ marginTop: '5px' }}>CURATED EVENTS</p>
                                priority access to exclusive events, workshops,  seminars, and classes
                            </div>
                        </li>
                        <li>
                            <div class="uk-card uk-card-body">
                                <img src="images/interview.svg" width="80" height="80"/>
                                <p className="uk-h5 cardText" style={{ marginTop: '5px' }}>MEETING ROOMS</p>
                                scheduled access for your close door team discussions or whiteboard sessions
                            </div>
                        </li>
                        <li>
                            <div class="uk-card uk-card-body">
                                <img src="images/gamepad.svg" width="80" height="80"/>
                                <p className="uk-h5 cardText" style={{ marginTop: '5px' }}>GAME NIGHT</p>
                                play board and video games and have a healthy competition with members
                            </div>
                        </li>
                        <li>
                            <div class="uk-card uk-card-body">
                                <img src="images/interview.svg" width="80" height="80"/>
                                <p className="uk-h5 cardText" style={{ marginTop: '5px' }}>CONNECT AND COLLABORATE</p>
                                a one of a kind event you’ll only see here
                            </div>
                        </li>
                        <li>
                            <div class="uk-card uk-card-body">
                                <img src="images/chair2.svg" width="80" height="80"/>
                                <p className="uk-h5 cardText" style={{ marginTop: '5px' }}>SHARED DESK</p>
                                work and collaborate with other professionals
                            </div>
                        </li>
                        <li>
                            <div class="uk-card uk-card-body">
                                <img src="images/overcast.svg" width="80" height="80"/>
                                <p className="uk-h5 cardText" style={{ marginTop: '5px' }}>ROOF DECK ACCESS</p>
                                relax and take a selfie with Iloilo City’s majestic view
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>);
    }
}

export default Ameneties