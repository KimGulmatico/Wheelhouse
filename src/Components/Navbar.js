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
            left: 0
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

        (update_width <= 500)?this.setState({left: 11}):this.setState({left: 0})

        
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
        window.onscroll = () => {
            if(window.pageYOffset !== 0)
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
        <div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky navDark uk-light; cls-inactive: uk-navbar-transparent uk-dark; top: 200">

            <nav id="navbar" className="uk-navbar-container">
                <div className="uk-container uk-container-expand">
                    <div data-uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                            <li>
                            <Logo width="200px" height="50px" left={this.state.left} color={this.state.color}/>
                            </li>
                            </ul>
                        </div>
                        <div className="uk-navbar-right">     
                            {    
                                (this.state.width <= 500) ?                  
                                <ul className="uk-navbar-nav">
                                    <li>
                                    <a className="uk-navbar-toggle" href="#" uk-icon="menu" data-uk-toggle="target: #offcanvas-flip"></a>
                                    </li>
                                </ul>
                                :
                                <ul className="uk-navbar-nav">
                                    <li><a href="#">Plans</a></li>
                                    <li><a href="#">Community</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            }
                            
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