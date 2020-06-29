import React from 'react'
import Particles from 'react-particles-js'

const Landing = () => {
    return (
        <div className="landing">
            <Particles
                canvasClassName="particle-background"
                
                params={{
                particles: {
                    color: {
                        value: "#e9ecef"
                    },
                    size: {
                        value: 3
                    },
                    number: {
                        value: 200
                    },
                    line_linked: {
                        enable: true
                    }
                }, 
                interactivity: {
                    events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    }
                    }
                }
                }}
            />
            <div className="landing-details">
                <h1 className="landing-details-title">Details</h1>
                <h4 className="landing-details-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
                <a className="landing-details-btn">Request a quote</a>
            </div>
        </div>
    )
}

export default Landing
