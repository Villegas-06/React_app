import React from 'react';
import M1 from '../images/medellin1.png';
import M2 from '../images/medellin2.png';
import M3 from '../images/medellin3.png';

import './styles/index.css'

class Slider extends React.Component{
    render(){
        return(
           
    <main id="main">
    <div className="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={M1} class="d-block w-100" alt="Medellin 1"/>
            </div>
            <div className="carousel-item">
                <img src= {M2} class="d-block w-100" alt="Medellin 2"/>
            </div>
            <div className="carousel-item">
                <img src={M3} class="d-block w-100" alt="Medellin 3"/>
            </div>
            <div className="overlay SobrePosicion">
                <div className="container SobrePosicion">
                    <div className="row align-items-center ">
                        <div className="col-md-6 offset-md-6 text-center text-md-right ">
                            <h1>Geek Conf Medellín</h1>
                            <p className="d-none d-md-block">Geek conf realiza su primer Demo Day con la cohorte de 
                                Línea 1: FrontEnd, donde los Geeks entrenados evidencian
                                por medio de un proyecto todas las habilidades y conocimientos
                                técnicos adquiridos durante el curso.
                            </p>
                            <a href="#" className="bg btn btn-outline">Quiero ser orador</a>
                            <button type="button" className="btn btn-geek" data-toggle="modal" data-target="#modalCompra">Comprar Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
        )
    }
}


export default Slider;
