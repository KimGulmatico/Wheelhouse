import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Wheelhouse from './Wheelhouse'
import Startup from './Startup'
import AdminW from './AdminWheelhouse'
import AdminS from './AdminStartup'

class App extends Component{
    render() {
        return(
        <Switch>
            <Route exact path="/" component={Startup}/>
            <Route exact path="/Wheelhouse" component={Wheelhouse}/>
            <Route exact path="/Wheelhouse/Admin" component={AdminW}/>
            <Route exact path="/Admin" component={AdminS}/>
        </Switch>
        )
    }
}

export default App;
