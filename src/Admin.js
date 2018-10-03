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
        }
        
        this.inputs = this.inputs.bind(this)
        this.submit = this.submit.bind(this)
        this.handeFile = this.handeFile.bind(this)
    }

    inputs(e) {
        this.setState({[e.target.name]: e.target.value})
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
            if(res.data == 'done'){
                this.setState({
                    password: '',
                    title: '',
                    date: '',
                    by: '',
                    location: '',
                    descrption: '',
                    file: ''
                })
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
            <div style={{maxWidth: '500px', padding: '10px'}}>
                <form>
                    <fieldset class="uk-fieldset">
                        <legend class="uk-legend">Add an Event</legend>

                        <div class="uk-margin">
                            <input class="uk-input" type="password" name="password" placeholder="Password" onChange={this.inputs} value={this.state.password}/>
                        </div>

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
                <button style={{float: 'right'}} class="uk-button uk-button-primary" onClick={this.submit}>Submit</button>
            </div>
        </div>)
    }
}

export default Admin