import React, {Component} from 'react'

class Plans extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (<div id="plans">
            <div style={{ maxWidth: '1300px' }}>
                <div align="left" className="eventsTitle">
                    <p className="uk-h1 cardText">PLANS & PRICING</p>
                    <p className="uk-h2 cardText">Membership options</p>
                    <p className="uk-h5 cardText" style={{ marginTop: '-17px' }}>The Wheelhouse offers you monthly memberships plans <br/>
                    that fits your needs</p>
                </div>
                
                <div style={{maxWidth: '1000px'}}>
                <div class="uk-child-width-1-2@m uk-grid-large uk-grid-match" data-uk-grid>
                <div>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <div style={{paddingTop: '20px'}}>
                                <h1 style={{margin: 0, padding: 0}} class="uk-card-title">Day Pass</h1>
                                <span>200/day</span>
                            </div>
                            <hr/>
                        </div>
                        <div class="uk-card-body" align="left" style={{marginTop: '-20px'}}>
                            <p>Looking for a spot to work and chill for the day? Try us out and we’ll give you a tour!</p>
                            <ul>
                                <li>High Speed Internet</li>
                                <li>Complimentary Refreshments</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <div style={{paddingTop: '20px'}}>
                                <h1 style={{margin: 0, padding: 0}} class="uk-card-title">The Business Nomad</h1>
                                <span>Starts at 3,700/month</span>
                            </div>
                            <hr/>
                        </div>
                        <div class="uk-card-body" align="left" style={{marginTop: '-20px'}}>
                            <p>Have the  flexibility to select where you sit everyday in our open lounge area.</p>
                            <ul>
                                <li>Unlimited Visits</li>
                                <li>10% Discount WH Events</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                            <div style={{paddingTop: '20px'}}>
                                <h1 style={{margin: 0, padding: 0}} class="uk-card-title">The Virtual</h1>
                                <span>Starts at 5,000/month</span>
                            </div>
                            <hr/>
                        </div>
                        <div class="uk-card-body" align="left" style={{marginTop: '-20px'}}>
                            <p>Make The Wheelhouse your office address.</p>
                            <ul>
                                <li>Unlimited Visits</li>
                                <li>10% Discount WH Events</li>
                                <li>Mail and Package Acceptance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                            <div style={{paddingTop: '20px'}}>
                                <h1 style={{margin: 0, padding: 0}} class="uk-card-title">The Achievers</h1>
                                <span>Starts at 6,000/month</span>
                            </div>
                            <hr/>
                        </div>
                        <div class="uk-card-body" align="left" style={{marginTop: '-20px'}}>
                            <p>Ideal for Thesis/Study Groups and Tutoring Services, this plan is perfect 
                            for your peer-to-peer study activities or just hang and play board games while 
                            taking a sip of your daily dose of coffee</p>
                            <ul>
                                <li>Unlimited Visits for 3</li>
                                <li>Option to Avail Meeting Room Credits</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                            <div style={{paddingTop: '20px'}}>
                                <h1 style={{margin: 0, padding: 0}} class="uk-card-title">The Disruptors</h1>
                                <span>Starts at 9,000/month</span>
                            </div>
                            <hr/>
                        </div>
                        <div class="uk-card-body" align="left" style={{marginTop: '-20px'}}>
                            <p>Ideal for Startups, an affordable but quality-driven plan for 
                                entrepreneurs just starting their business.</p>
                            <ul>
                                <li>Unlimited Visits for 3</li>
                                <li>3 Free Event Passes</li>
                                <li>10% Discount WH Events</li>
                                <li>Locker Privileges</li>
                                <li>Monthly Business Consultations and Monitoring Privileges</li>
                                <li>2 Hours Meeting Room Usage</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                            <div style={{paddingTop: '20px'}}>
                                <h1 style={{margin: 0, padding: 0}} class="uk-card-title">The Pros</h1>
                                <span>Starts at 15,000/month</span>
                            </div>
                            <hr/>
                        </div>
                        <div class="uk-card-body" align="left" style={{marginTop: '-20px'}}>
                            <p>Ideal for Early-Stage Businesses, this plan offers higher amenities and privileges.</p>
                            <ul>
                                <li>Unlimited Visits for 5</li>
                                <li>Permanent Desk Subscription</li>
                                <li>5 Free Event Passes</li>
                                <li>5 Free Guest Passes</li>
                                <li>10% Discount WH Events</li>
                                <li>Locker Privileges</li>
                                <li>Monthly Business Consultations and Monitoring Privileges</li>
                                <li>4 Hours Meeting Room Usage</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>

                <div class="uk-child-width-1-1@m uk-grid-large uk-grid-match" data-uk-grid>
                    <div>
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <div style={{paddingTop: '20px'}}>
                                    <h1 style={{margin: 0, padding: 0}} class="uk-card-title">The Founders</h1>
                                    <span>Starts at 8,000/month</span>
                                </div>
                                <hr/>
                            </div>
                            <div class="uk-card-body" align="left" style={{marginTop: '-20px'}}>
                                <p>An exclusive Lounge for Founders where they can network and share ideas
                                   with other founders, investors, media, industry executives, academics 
                                   and creatives through curated private events on the rooftop.</p>
                                <ul>
                                    <li>Rooftop Lounge Access</li>
                                    <li>Elite Membership Status</li>
                                    <li>Unlimited Access</li>
                                    <li>Invites to Private Rooftop Events</li>
                                    <li> Invites to Members’ Events</li>
                                    <li>5 Free Guest Passes</li>
                                    <li>Locker Privileges</li>
                                    <li>4 Hours Meeting Room Usage</li>
                                    <li>LIMITED MEMBERSHIP SLOTS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            </div>
            <br/>
            <br/>
            <hr class="uk-divider-icon"/>
        </div>)
    }
}

export default Plans