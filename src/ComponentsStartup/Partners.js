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
                    <div class="uk-card uk-card-body" onClick={()=>window.open('https://www.localcoffeeph.com/', '_blank')}>
                        <img src="images/LOCO_C.svg" width="200" height="200"/>
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-body" onClick={()=>window.open('https://acudeen.com/', '_blank')}>
                        <img src="images/ACUDEEN_C.svg" width="200" height="200"/>
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-body" onClick={()=>window.open('https://pushkart.ph/', '_blank')}>
                        <img src="images/PUSHKART_C.svg" width="200" height="200"/> 
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-body" onClick={()=>window.open('https://www.servehappyjobs.com/', '_blank')}>
                        <img src="images/HAPPY_C.svg" width="200" height="200"/> 
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-body" onClick={()=>window.open('https://www.facebook.com/ctrgraphicsandsigns/', '_blank')}>
                    <img src="images/CTR_C.svg" width="200" height="200"/> 
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-body" onClick={()=>window.open('https://www.localcoffeeph.com/', '_blank')}>
                    <img src="images/POD_C.svg" width="200" height="200" /> 
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