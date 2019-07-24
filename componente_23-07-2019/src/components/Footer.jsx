import React from 'react';

import './styles/index.css'

class Footer extends React.Component{
    render(){
        return(
    <footer id="footer" class="pb-4 pt-4">
        <div className="container">
            <div className="row text-center">
                <div className="col-12 col-lg">
                    <a href="#">Preguntas Frecuentes</a>
                </div>
                <div className="col-12 col-lg">
                    <a href="#">Contáctanos</a>
                </div>
                <div className="col-12 col-lg">
                    <a href="#">Prensa</a>
                </div>
                <div className="col-12 col-lg">
                    <a href="#">Terminos y condiciones</a>
                </div>
                <div className="col-12 col-lg">
                    <a href="#">Privacidad</a>
                </div>
                <div className="col-12 col-lg">
                    <a href="#">Estudiantes</a>
                </div>
            </div>
        </div>
    </footer>
        );
    }
}

export default Footer;