import React, {Component} from 'react'

class ContactUs extends Component {
    constructor(props){
        super(props)
        this.state = {}

    }

    render() {
        return (<div>
            <a className="uk-button uk-button-default" href="#modal-full" data-uk-toggle>Open</a>

            <div id="modal-full" className="uk-modal-full" data-uk-modal>
                <div className="uk-modal-dialog">
                    <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                    <div className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
                        <div className="uk-background-cover" style={{"background-image": "url(https://getuikit.com/docs/'images/photo.jpg')"}} data-uk-height-viewport></div>
                        <div className="uk-padding-large">
                            <h1>Headline</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default ContactUs