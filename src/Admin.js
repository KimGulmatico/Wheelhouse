import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import {connection} from './Connection'

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            title: '',
            date: '',
            by: '',
            location: '',
            descrption: '',
            file: '',
            show: 'Add',
            events: [],
            id: '',
        }
        
        this.inputs = this.inputs.bind(this)
        this.submit = this.submit.bind(this)
        this.handeFile = this.handeFile.bind(this)
        this.getEvents = this.getEvents.bind(this)
        this.delete = this.delete.bind(this)
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        this.getEvents()
    }

    async getEvents() {
        let res = await axios.get(`${connection.protocol}://${connection.serverphp}/wheelhouse/getEvents.php`)
        console.log(res.data)
        this.setState({events: res.data})
    }

    inputs(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    handeFile(e) {
        console.log(e.target.files[0])
        this.setState({file: e.target.files[0]})
    }

    async submit() {
        if(this.state.file != '') {
            const data = new FormData();
            data.append('pass', this.state.password);
            data.append('title', this.state.title);
            data.append('date', this.state.date);
            data.append('by', this.state.by);
            data.append('loc', this.state.location);
            data.append('desc', this.state.descrption);
            data.append('file', this.state.file);
            let res = await axios.post(`${connection.protocol}://${connection.serverphp}/wheelhouse/addEvents.php`, data, {crossdomain: true})
            alert(res.data)
            if(res.data.toString().trim() == 'Added'){
                this.setState({
                    title: '',
                    date: '',
                    by: '',
                    location: '',
                    descrption: '',
                    file: '',
                })
                this.getEvents()
            }
        }
        else{
            alert('Fill all fields')
        }
    }

    async delete(e) {
        let res = await axios.get(`${connection.protocol}://${connection.serverphp}/wheelhouse/deleteEvents.php?id=${e.target.name}&pass=${this.state.password}`)
        if(res){
            alert(res.data)
            this.getEvents()
        }
    }

    async update() {
        if(this.state.file != '') {
            const data = new FormData();
            data.append('id', this.state.id);
            data.append('pass', this.state.password);
            data.append('title', this.state.title);
            data.append('date', this.state.date);
            data.append('by', this.state.by);
            data.append('loc', this.state.location);
            data.append('desc', this.state.descrption);
            data.append('file', this.state.file);
            let res = await axios.post(`${connection.protocol}://${connection.serverphp}/wheelhouse/updateEvents.php`, data, {crossdomain: true})
            alert(res.data)
            if(res.data.toString().trim() == 'Updated'){
                this.setState({
                    title: '',
                    date: '',
                    by: '',
                    location: '',
                    descrption: '',
                    file: '',
                    id: '',
                })
                this.getEvents()
            }
        }
        else{
            alert('fill all fields')
        }
    }


    render() {
        return (<div align="center">
            <br/>
            <br/>
            <legend class="uk-legend">Events</legend>
            <div style={{maxWidth: '500px', padding: '10px'}}>
            <div class="uk-margin">
                <input class="uk-input" type="password" name="password" placeholder="Password" onChange={this.inputs} value={this.state.password}/>
            </div>
            <div class="uk-margin-medium-top">
                <ul class="uk-flex-center" data-uk-tab>
                    <li class="uk-active"><a href="#" onClick={()=>this.setState({show: 'Add'})}>Add</a></li>
                    <li><a href="#" onClick={()=>this.setState({show: 'Update'})}>Update</a></li>
                    <li><a href="#" onClick={()=>this.setState({show: 'Delete'})}>Delete</a></li>
                </ul>
            </div>
            </div>
            {(this.state.show == 'Add' || this.state.show == 'Update')?
            <div style={{maxWidth: '500px', padding: '10px'}}>
                <form>
                    <fieldset class="uk-fieldset">

                        {
                            (this.state.show == 'Update')?
                            <div class="uk-margin">
                                <select class="uk-select" name="id" onChange={this.inputs} value={this.state.id}>
                                    <option value="">Event ID</option>
                                    {
                                        this.state.events.map((event)=>{
                                            return(<option key={event.id} value={event.id}>{event.title}</option>)
                                        })
                                    }
                                    
                                </select>
                            </div>:null
                        }

                        <div class="uk-margin">
                            <input class="uk-input" type="text" name="title" placeholder="Title" onChange={this.inputs} value={this.state.title}/>
                        </div>

                        <div class="uk-margin">
                            <input class="uk-input" type="date" name="date" placeholder="Date" onChange={this.inputs} value={this.state.date}/>
                        </div>

                        <div class="uk-margin">
                            <input class="uk-input" type="text" name="by" placeholder="By" onChange={this.inputs} value={this.state.by}/>
                        </div>

                        <div class="uk-margin">
                            <input class="uk-input" type="text" name="location" placeholder="Location" onChange={this.inputs} value={this.state.location}/>
                        </div>
                        

                        <div class="uk-margin">
                            <textarea class="uk-textarea" rows="5" name="descrption" placeholder="Description" onChange={this.inputs} value={this.state.descrption}></textarea>
                        </div>

                        <div class="js-upload" data-uk-form-custom style={{width: '100%'}}>
                            <input type="file" onChange={this.handeFile}/>
                            <button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom" type="button" tabindex="-1">Select</button>
                        </div>
                    </fieldset>
                </form>
                {
                    (this.state.show == 'Add')?
                    <button style={{float: 'right'}} class="uk-button uk-button-primary" onClick={this.submit}>Add</button>
                    :(this.state.show == 'Update')?
                    <button style={{float: 'right'}} class="uk-button uk-button-primary" onClick={this.update}>Update</button>
                    :null
                }
            </div>
            :
            <div style={{maxWidth: '500px', padding: '10px'}}>
            <table class="uk-table uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th>Event</th>
                        <th class="uk-width-small">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (this.state.events.length != 0)?
                        this.state.events.map((event) => {
                            return(
                            <tr>
                                <td class="uk-text-truncate">{event.title}</td>
                                <td><button class="uk-button uk-button-default" type="button" name={event.id} onClick={this.delete}>Delete</button></td>
                            </tr>)
                        }): <div>No events yet...</div>
    
                    }
                </tbody>
            </table>
            </div>
            }
        </div>)
    }
}

export default Admin