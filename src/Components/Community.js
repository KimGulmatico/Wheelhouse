import React, {Component} from 'react'

class Community extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (<div >
            <div style={{ maxWidth: '1300px' }}>
                <div align="left" className="eventsTitle">
                    <p className="uk-h1 cardText">COMMUNITY INSIGHTS</p>
                    <p className="uk-h5 cardText" style={{ marginTop: '-17px' }}>Our members tell it like it is.</p>
                </div>
                <div className="uk-child-width-1-3@m" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img class="uk-border-circle" src="images/avatar.jpg" width="200" height="200" alt="Border circle"/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title" style={{margin: 0, padding: 0}}>Tony Stark</h3>
                                <span style={{fontSize: '14px'}}>CEO, Stark Industries</span>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img class="uk-border-circle" src="images/avatar.jpg" width="200" height="200" alt="Border circle"/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title" style={{margin: 0, padding: 0}}>Tony Stark</h3>
                                <span style={{fontSize: '14px'}}>CEO, Stark Industries</span>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img class="uk-border-circle" src="images/avatar.jpg" width="200" height="200" alt="Border circle"/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title" style={{margin: 0, padding: 0}}>Tony Stark</h3>
                                <span style={{fontSize: '14px'}}>CEO, Stark Industries</span>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Community