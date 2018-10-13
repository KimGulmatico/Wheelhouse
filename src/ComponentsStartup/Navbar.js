import React, { Component } from 'react'
import '../App.css'
import Logo from './Logo'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            logoWidth: 200,
            logoHeight: 50,
            navHeight: 100,
            color: '#000',
            left: 0,
            marginTop: '20px',
            marginTop2: '-14px',
            colorContact: '#999',
            btnhover: 'btnhoverstrt'
        }

        this.updateDimensions = this.updateDimensions.bind(this)
    }

    /**
     * Calculate & Update state of new dimensions
     */
    updateDimensions() {
        let update_width = window.innerWidth - 100;
        let update_height = Math.round(update_width / 4.4);
        this.setState({ width: update_width, height: update_height });

        (update_width <= 640) ? this.setState({ left: 11, marginTop: '0', marginTop2: '0', logoHeight: 40 , logoWidth: 150, navHeight: 65}) : this.setState({ left: 0, marginTop: '20px', marginTop2: '-14px', logoHeight: 50, logoWidth: 200, navHeight: 100})


    }

    /**
     * Add event listener
     */
    componentDidMount() {
        setInterval(this.updateDimensions,1000)
        window.addEventListener("resize", this.updateDimensions);
        var prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            var currentScrollPos = window.pageYOffset;
            if (window.pageYOffset >= 60)
                this.setState({ color: '#fafafa', btnhover: 'btnhover2strt'})
            else
                this.setState({ color: '#212121', btnhover: 'btnhoverstrt' })
            if(this.state.navHeight == 65){
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.top = "0";
                } else {
                    document.getElementById("navbar").style.top = "-65px";
                }
            }
            prevScrollpos = currentScrollPos;
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
                <div style={{ marginTop: this.state.marginTop }} data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky navDarkStart uk-light; cls-inactive: uk-navbar-transparent uk-dark; top: 200">

                    <nav id="navbar" class="uk-navbar-container" data-uk-navbar style={{maxHeight: this.state.navHeight}}>
                        <div class="uk-navbar-left" style={{ marginLeft: '5%', marginRight: 'auto' }}>
                            <ul className="uk-navbar-nav">
                                <li>
                                    <Logo width={this.state.logoWidth} height={this.state.logoHeight} left={this.state.left} color={this.state.color} />
                                </li>
                            </ul>

                        </div>

                        <div class="uk-navbar-right" style={{marginLeft: 'auto', marginRight: '5%' }}>
                            <ul class="uk-navbar-nav uk-visible@l" style={{ marginLeft: 'auto', marginRight: '0' }}>
                                <li><a href="#about" data-uk-scroll data-offset="100">About</a></li>
                                <li><a href="#programs" data-uk-scroll data-offset="100">Programs</a></li>     
                                <li><a href="#events" data-uk-scroll data-offset="100">Events</a></li>                             
                                <li><a href="#partners" data-uk-scroll data-offset="100">Partners</a></li>
                            </ul>
                            <button data-uk-toggle="target: #modal-full" className={"uk-visible@l uk-button uk-button-default "+this.state.btnhover} href="#" style={{ borderRadius: '50px'}}>Contact us</button>
                            <a className="uk-hidden@l uk-navbar-toggle" href="#" data-uk-icon="menu" data-uk-toggle="target: #offcanvas-flip" style={{ marginLeft: 'auto', marginRight: '0' }}></a>
                        </div>
                    </nav>


                </div>

            </div>
        )
    }
}

export default Navbar