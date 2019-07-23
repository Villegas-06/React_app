import React from 'react';
import M1 from '../images/medellin1.png';
import M2 from '../images/medellin2.png';
import M3 from '../images/medellin3.png';

import './styles/index.css'

class Slider extends React.Component{
    render(){
        return(
            <main id="main">
            <div className="carousel" class="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src= {M1} class="d-block w-100" alt="Medellin 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={M2} class="d-block w-100" alt="Medellin 2"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={M3}class="d-block w-100" alt="Medellin 3"></img>
                    </div>
                    
                </div>
            </div>
        </main>
        )
    }
}


export default Slider;
