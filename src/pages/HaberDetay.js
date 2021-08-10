import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Detay.css'
const HaberDetay = ({match}) =>{
    const haberID = match.params.id;

    const [haber,setHaber] = useState();
    
    const url = 'https://haber-backend-ak.herokuapp.com/api';
    useEffect(()=>{
        axios
            .get(`${url}/detay/${haberID}`)
            .then(res=>setHaber(res.data));
    },[]);

    const haberSil = () =>{
        console.log('object')
        axios
            .delete(`${url}/detay/${haberID}`)
            .then(res=>{
                window.location.path = '/';
            })
            .catch(err=>console.log(err))
    }

    return(
        <div style={{background:'#f2f2f2',minHeight:'100vh'}}>
            <Navbar />
            {
                haber &&
                <div className="container">
                    <h1 className="text-center py-4">{haber.title}</h1>
                    <div className="alert alert-primary">
                        <h4 className="pl-3 d-inline">{haber.desc}</h4>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <img src={haber.imgUrl} alt="" className="w-50 detay-img" />
                    </div>
                    <span className="d-inline pl-3">
                        {haber.news}
                    </span>
                    <div style={{display:'flex',justifyContent:'flex-end',paddingBottom:'40px'}}>
                            
                        <Link className="btn btn-info mx-5" to={`/haberguncelle/${haberID}`} >Düzenle</Link>
                        <button onClick={haberSil} className="btn btn-danger">Sil</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default HaberDetay;