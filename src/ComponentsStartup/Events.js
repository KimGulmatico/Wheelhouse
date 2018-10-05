import React, { Component } from 'react'
import axios from 'axios'
import {connection} from '../Connection'

class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }

        this.getEvents = this.getEvents.bind(this)
    }

    componentDidMount() {
        this.getEvents()
    }

    async getEvents() {
        let res = await axios.get(`${connection.protocol}://${connection.serverphp}/wheelhouse/getEvents.php`)
        console.log(res.data)
        this.setState({events: res.data})
    }

    render() {
        return (<div id="events">
            <div style={{ maxWidth: '1300px' }}>
                <div align="left" className="eventsTitle">
                    <p className="uk-h1 cardText">WHAT'S UP & COMING</p>
                    <p className="uk-h5 cardText" style={{ marginTop: '-17px' }}>The Wheelhouse caters events and workshops</p>
                </div>
                
                {
                    (this.state.events.length != 0)?
                    this.state.events.map((event)=>{
                        return (<div>
                            <div className="uk-flex-middle padding" data-uk-grid style={{marginTop: 0, marginBottom: 0}}>
                                <div className="uk-width-1-3@m">
                                    <img src={`${connection.protocol}://${connection.serverphp}/wheelhouse/uploads/${event.img}`} alt="Image" className="eventsImage"/>
                                </div>
                                <div className="uk-width-2-3@m" align="left">
                                    <h3 className="uk-card-title" style={{margin: 0, padding: 0}}>{event.title}</h3>
                                    <span style={{fontSize: '16px'}}>{event.date}</span> <br/>
                                    <span style={{fontSize: '16px'}}>By: {event.by}</span> <br/>
                                    <span style={{fontSize: '16px'}}>Location: {event.loc}</span>
                                    <p>
                                        {event.desc}
                                    </p>
                                </div>
                            </div>

                            <hr/>
                        </div>)
                    }):<div>No events yet..</div>
                }

            
            </div>
        </div>)
    }
}

export default Events