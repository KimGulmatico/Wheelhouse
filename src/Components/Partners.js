import React, {Component} from 'react'

class Partners extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (<div id="partners">
        <div style={{ maxWidth: '1300px' }}>
            <div align="left" className="eventsTitle">
                <p className="uk-h1 cardText">PARTNERS</p>
                <p className="uk-h5 cardText" style={{ marginTop: '-17px' }}></p>
            </div>
            
            <div style={{maxWidth: '1200px'}}>
            <ul class="uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" data-uk-grid>
                <li>
                    <div class="uk-card uk-card-body">
                        <img src="images/LOCO.svg" width="200" height="200"/>
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-body">
                        <img src="images/ACUDEEN.svg" width="200" height="200"/>
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-body">
                        <img src="images/PUSHKART.svg" width="200" height="200"/> 
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-body">
                        <img src="images/HAPPY.svg" width="200" height="200"/> 
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-body">
                    <img src="images/CTR.svg" width="200" height="200"/> 
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-body">
                    <img src="images/POD.svg" width="200" height="200"/> 
                    </div>
                </li>
            </ul>
            </div>
        </div>
        <hr/>
    </div>)
    }
}

export default Partners