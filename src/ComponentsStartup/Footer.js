import React, {Component} from 'react'

class Footer extends Component {
    constructor(props){   
        super(props)
        this.state = {}
    }

    render() {
        return (<div>
            <div style={{ maxWidth: '1300px' }}>
            <div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
                <div>
                    <div class="uk-padding" align="left">
                        <span data-uk-icon="receiver"></span> <span>(033) 323 6520</span>
                        <span style={{marginLeft: '20px'}} data-uk-icon="phone"></span> <span>0936 114 0536</span>
                        <br/>
                        Mapa St Tabucan, Iloilo City Proper, Iloilo City, 5000 Iloilo 
                        <br/>
                        <br/>
                        Copyright © 2018 The Wheelhouse All rights reserved
                    </div>
                </div>
                <div>
                    <div class="uk-padding" style={{paddingTop: '50px'}}>
                        <a href="" class="uk-icon-button uk-margin-large-right" data-uk-icon="twitter" style={{color: '#424242'}}></a>
                        <a href="https://www.facebook.com/supthewheelhouse/" class="uk-icon-button  uk-margin-large-right" data-uk-icon="facebook" style={{color: '#424242'}}></a>
                        <a href="https://www.instagram.com/thewheelhousephilippines/" class="uk-icon-button  uk-margin-large-right" data-uk-icon="instagram" style={{color: '#424242'}}></a>                
                        <a href="" class="uk-icon-button" data-uk-icon="google-plus" style={{color: '#424242'}}></a>             
                    </div>
                </div>
            </div>
            </div>
        </div>)
    }
}

export default Footer