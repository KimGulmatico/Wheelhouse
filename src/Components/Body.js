import React, {Component} from 'react'

class Body extends Component {
    constructor(props){
        super(props)
        this.state =  {

        }
    }

    render() {
        return (
            <div align="center">
                <div className="uk-child-width-1-2@s" data-uk-grid style={{maxWidth: '1300px'}}> 
                    <div style={{marginTop: '30px', marginBottom: '30px'}}>
                        <div data-uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                            <img className="uk-border-circle" src="images/avatar.jpg" width="350" height="350" alt="Border circle"/>
                        </div>
                    </div>
                    <div style={{marginTop: '30px', marginBottom: '30px'}} align="left">
                        <div data-uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                            <div style={{padding: '20px'}}>
                            <p className="uk-h1 cardText">REDEFINE THE WAY <br/> YOU WORK</p>
                            <p className="uk-h5 cardText" style={{marginTop: '-17px'}}>Connect. Collaborate. Create</p>
                            <br/>
                            The Wheelhouse is an initiative that connects aspiring entrepreneurs, startup mentors
                            enables yearning to bring ideas into reality through meaningful social
                            engagements and workshops in a collaborative space. A dynamic, forward-thinking
                            community that provides expertise, support and connections that members can take
                            advantage of to become effective entrepreneurs
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Body