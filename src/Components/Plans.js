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
                    that fits your need for a space</p>
                </div>
                <div>
                    <table className="uk-table uk-table-middle">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Personal</th>
                                <th>Weekend</th>
                                <th>Startup</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Starter</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Premium</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
    }
}

export default Plans