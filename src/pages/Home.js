import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import AutoPlay from '../components/Slick';
import '../styles/Home.css'
 
const Home = () =>{

    //api den veri alma
    //local => http://localhost:2999/api/haber
    //colud => https://haber-backend-ak.herokuapp.com/
    const url = 'https://haber-backend-ak.herokuapp.com/api/haber';

    const [haberler, setHaberler] = useState();

    //veritabanımdan api ye get isteği göndererek verileri alıyorum
    useEffect(() => {
        axios
            .get(url)
            .then(res=>setHaberler(res.data))
    },[])
    //tüm haberler eklenecek ve veri tabanını cloud a çek önce
    return(
        <div style={{background:'#f2f2f2',minHeight:'100vh'}}>
            <Navbar />
            <div className="container">
                    <AutoPlay haberler={haberler}/>
                    <Cards haberler={haberler} />        
            </div>
              
        </div>
    )
}
export default Home;