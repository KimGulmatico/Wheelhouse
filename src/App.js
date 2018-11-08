import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Wheelhouse from './Wheelhouse'
import AdminW from './AdminWheelhouse'

class App extends Component{
    render() {
        return(
        <Switch>
            <Route exact path="/" component={Wheelhouse}/>
            <Route exact path="/Admin" component={AdminW}/>
        </Switch>
        )
    }
}

export default App;
