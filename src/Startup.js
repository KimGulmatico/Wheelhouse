import React, {Component} from 'react'
import './App.css'

class Startup extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (<div>
            <div  className="uk-flex-middle" data-uk-grid data-uk-height-viewport>
                <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <h1>Startup Project PH is coming soon</h1>
                </div>
            </div>            
        </div>)
    }
}

export default Startup