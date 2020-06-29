import React from 'react'

import { FaReact, FaNode, FaHtml5, FaCss3 } from 'react-icons/fa'

const Tech = () => {
    return (
        <div>
            <h1>Technologies</h1>
            <h6>We use the latest and greatest web industry standards</h6>
            <div className="tech-grid">
                <div className="tech-item" id="react">
                    
                    <FaReact className="tech-icon"  />
                    <h3 className="tech-name">React JS</h3>
                </div>
                <div className="tech-item" id="node">
                    <FaNode className="tech-icon"  />
                    <h3 className="tech-name">Node JS</h3>
                </div>
                <div className="tech-item" id="html" >
                    <FaHtml5 className="tech-icon"  />
                    <h3 className="tech-name">HTML5</h3>
                </div>
                <div className="tech-item" id="css">
                    <FaCss3 className="tech-icon"  />
                    <h3 className="tech-name">CSS3</h3>
                </div>
            </div>
        </div>
    )
}

export default Tech
