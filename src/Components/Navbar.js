import React, {Component} from 'react'
import '../App.css'
import Logo from './Logo'


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0,
            color: '#000',
            left: 0,
            marginTop: '20px',
            marginTop2: '-14px'
        }

        this.updateDimensions = this.updateDimensions.bind(this)
    }

    /**
     * Calculate & Update state of new dimensions
     */
    updateDimensions() {
        let update_width  = window.innerWidth-100;
        let update_height = Math.round(update_width/4.4);
        this.setState({ width: update_width, height: update_height });

        (update_width <= 500)?this.setState({left: 11, marginTop: '0', marginTop2: '0'}):this.setState({left: 0, marginTop: '20px', marginTop2: '-14px'})

        
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
        window.onscroll = () => {
            if(window.pageYOffset >= 60)
                this.setState({color: '#fafafa'})
            else
                this.setState({color: '#212121'})
        }
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        window.onscroll = null
    }

    render() {
        return (
        <div>
        <div style={{marginTop: this.state.marginTop}} data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky navDark uk-light; cls-inactive: uk-navbar-transparent uk-dark; top: 200">

            <nav id="navbar" className="uk-navbar-container" style={{overflow: 'hidden', marginTop: this.state.marginTop2}}>
                <div >
                <div className="uk-container uk-container-expand" style={{maxWidth: '1200px', maxHeight: '90px'}}>
                    <div data-uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                            <li>
                            <Logo width="200px" height="50px" left={this.state.left} color={this.state.color}/>
                            </li>
                            </ul>
                            {
                                (this.state.width <= 500) ?                  
                                <div></div>
                                :
                                <div className="uk-display-inline">
                                <ul className="uk-navbar-nav" style={{marginTop: '25px', marginLeft: '30px'}}>
                                    <li><a href="#events" data-uk-scroll data-offset="100">About</a></li>
                                    <li><a href="#events" data-uk-scroll data-offset="100">Services</a></li>
                                    <li><a href="#events" data-uk-scroll data-offset="100">Ameneties</a></li>
                                    <li><a href="#community" data-uk-scroll data-offset="100">Community</a></li>
                                    <li><a href="#plans" data-uk-scroll data-offset="100">Plans</a></li>
                                    <li><a href="#plans" data-uk-scroll data-offset="100">Events</a></li>
                                    <li><a data-uk-toggle="target: #modal-full">Community</a></li>
                                    <li><a data-uk-toggle="target: #modal-full">Partners</a></li>
                                    <li><a data-uk-toggle="target: #modal-full">Connect</a></li>
                                </ul>
                                </div>
                            }
                        </div>
                        <div className="uk-navbar-right">     
                            {    
                                (this.state.width <= 500) ?                  
                                <ul className="uk-navbar-nav">
                                    <li>
                                    <a className="uk-navbar-toggle" href="#" uk-icon="menu" data-uk-toggle="target: #offcanvas-flip"></a>
                                    </li>
                                </ul>
                                :<div></div>
                            }
                            
                        </div>

                    </div>
                </div>
                </div>
            </nav>

            
        </div>

        </div>
        )
    }
}

export default  Navbar