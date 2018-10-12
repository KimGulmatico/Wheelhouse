import React, {Component} from 'react'
import Community from './Community'
import ContactUs from './ContactUs'
import Partners from './Partners'
import Footer from './Footer'
import Events from './Events';

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
                            <img className="uk-border-circle" src="images/strtace.png" width="350" height="350" alt="Border circle"/>
                        </div>
                    </div>
                    <div id="about" style={{marginTop: '30px', marginBottom: '30px'}} align="left">
                        <div data-uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                            <div style={{padding: '20px'}}>
                            <p className="uk-h1 cardText">START YOUR ENTREPRENEURIAL <br/> JOURNEY WITH US</p>
                            <br/>
                            Startup Project is an initiative for aspiring entrepreneurs yearning to bring their 
                            ideas into reality. A dynamic and forward-thinking organization that specializes in 
                            entrepreneurial leadership and business development placing emphasis on the current 
                            drive towards globalization.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <br/>
                    <br/>
                    <div className="uk-card uk-grid-collapse uk-child-width-1-2@s" data-uk-grid>
                        <div className="uk-card-media-left uk-cover-container">
                            <img src="images/strt3.png" alt="" data-uk-cover/>
                            <canvas width="600" height="400"></canvas>
                        </div>
                        <div>
                            <div id="programs" className="uk-card-body">
                                <h3 className="uk-card-title">IGNITE THE ENTREPRENEURIAL SPIRIT IN YOU</h3>
                                <p className="uk-text-left">
                                Through collaboration and innovation, we develop diverse initiative programs that fuses academic 
                                and practitioner perspectives. These programs introduce participants to the growing 
                                innovation-driven community in the Philippine Startup Ecosystem. We actively promote 
                                entrepreneurship through different activities and workshops that are own startup businesses use to successfully turn their ideas into reality. 
                                <br/>
                                <br/>
                                We provide accelerated-learning programs for members to learn and practice leadership and innovation principles taught by 
                                experienced entrepreneurs that will be your mentors.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="uk-card uk-grid-collapse uk-child-width-1-2@s" data-uk-grid>
                        <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="images/strt33.jpg" alt="" data-uk-cover/>
                            <canvas width="600" height="400"></canvas>
                        </div>
                        <div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">CREATING OPPORTUNITIES</h3>
                                <p>
                                Our aim is to provide the necessary resources to support 
                                our members to create successful ideas that will become 
                                financially viable and freestanding - a new breed of entrepreneurs 
                                commercializing technologies, creating jobs, and strengthening local economies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="uk-card uk-grid-collapse uk-child-width-1-2@s" data-uk-grid>
                        <div className="uk-card-media-left uk-cover-container">
                            <img src="images/strt22.jpg" alt="" data-uk-cover/>
                            <canvas width="600" height="400"></canvas>
                        </div>
                        <div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">HOW WE DO IT</h3>
                                <p className="uk-text-left">We expand and extend services by creating a lifestyle space
                                  where members can work to make a life and not just a living.
                                </p>
                                <p className="uk-text-left"><b>Collaboration</b> - we work closely with key players in the ecosystem to
                                 connect members with the best entrepreneurship programs.
                                </p>
                                <p className="uk-text-left"><b>Diversity</b> -  we combine a range of critical perspectives.
                                </p>
                                <p className="uk-text-left"><b>Analysis</b> - each engagements we try new programs and activities. 
                                </p>
                                <p className="uk-text-left"><b>Integrate</b> - we operate on a hybrid model that fuses academic and practitioner perspectives 
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>

                <div className="uk-child-width-1-2@s" data-uk-grid style={{maxWidth: '1300px'}}> 
                    <div style={{marginTop: '30px', marginBottom: '30px'}} align="right">
                         <div data-uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                            <div style={{padding: '20px'}}>
                            <p className="uk-h1 cardText">WE ARE MORE THAN <br/> JUST A SPACE</p>
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
                    <div style={{marginTop: '30px', marginBottom: '30px'}}>
                        <div data-uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                            <img className="uk-border-circle" src="images/strttara.jpg" width="350" height="350" alt="Border circle"/>
                        </div>
                    </div>
                </div>
                <hr class="uk-divider-icon"/>
                <br/>
                <br/>
                <Events/>
                <br/>
                <br/>
                {/* <ContactUs/> */}
                <Partners/>
                <Footer/>
            </div>

        )
    }
}

export default Body