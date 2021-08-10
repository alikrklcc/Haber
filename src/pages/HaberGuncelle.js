import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';

const HaberGuncelle = ({match}) =>{

    const [haber,setHaber] = useState();
    useEffect(()=>{
        //işlem put ise eski verilere de bi ulaşılsın
        axios.get(`https://haber-backend-ak.herokuapp.com/api/detay/${match.params.id}`)
        .then(res=>setHaber(res.data))
    },[]);

    return(
        <>
            {
                haber && <Form yapilacakIslem={'put'} haber={haber} />
            }
        </>
    )
}

export default HaberGuncelle