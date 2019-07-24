import React from 'react';
import Main from '../components/Main';
import Slider from '../components/Slider';
import Header from '../components/Header';
import Oradores from '../components/Oradores';
import NewOradores from '../components/NewOrador';
import ConvierteteOrador from '../components/ConvierteteOrador'
import Modal from '../components/Modal';
import Footer from '../components/Footer';

 

const App = () => {
    return(
       
        <Main>
             <Header>
               <Modal/>
             </Header>

             <Slider>
               <Modal/>
             </Slider>

             <Oradores/>
             
             <NewOradores/>

             <ConvierteteOrador/>
             
             <Footer/>
        </Main>
        
    );
}

export default App;