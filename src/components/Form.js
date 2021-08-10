import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import Navbar from './Navbar';

const Form = (props) =>{
    const url = 'https://haber-backend-ak.herokuapp.com/api';

    //inputlardan aldığım verileri tutucak olan değişkenlerim

    const [title,setTitle] = useState('');
    const [imgUrl,setImgUrl] = useState('');
    const [desc,setDesc] = useState('');
    const [news,setNews] = useState('');
    const [alert,setAlert] = useState({show:false,type:'',msg:''});
    
    const haber = props.haber;

    useEffect(()=>{
        if(props.yapilacakIslem === 'put'){
            console.log('Konsola girdi');
            setTitle(haber.title)
            setImgUrl(haber.imgUrl)
            setDesc(haber.desc)
            setNews(haber.news);
        }
    },[haber]);
    
    const setValues = () =>{
        setTitle('');
        setImgUrl('');
        setDesc('');
        setNews('');
    }

    const haberEkle = () =>{
        if(!title.length>0 || !news.length>0 )
        {
            setAlert({
                show:true,
                type:'warning',
                msg:'Başlık ve Haber Zorunlu'
            });
        }
        else {
            axios
            .post(`${url}/haber`,{
                title,
                imgUrl,
                desc,
                news
            })//isteğimi gönderceğim url ve 2. parametrede ise veriler gönderiliyor
            .then(res=>{
                //olumlu sonuç burda yakalanıyor
                setAlert({
                    show:true,
                    type:'success',
                    msg:res.data
                });
                setValues();
            })
            .catch(err=>{
                setAlert({
                    show:true,
                    type:'danger',
                    msg:err.response.data
                })
            });
        }
        

            //işlem bittikten 3s sonra da alert kapansın
            setTimeout(()=>{
                setAlert({
                    show:false
                });
            },3000);

    }

    const haberGuncelle = () =>{
        axios
            .put(`${url}/detay/${haber._id}`,{
                title,
                imgUrl,
                desc,
                news
            }).then(res=>{
                setAlert({
                    show:true,
                    type:'success',
                    msg:res.data
                });
            })
            .catch(err=>{
                setAlert({
                    show:true,
                    type:'danger',
                    msg:err.response.data
                })
            })
    }
    return(
        <div style={{background:'#f2f2f2',minHeight:'100vh'}}>
            <Navbar />
            <div className="form-wrapper">
                <div className="form-group">
                    <label className="inputLabel">Haber Başlığı</label>
                    <input 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        required 
                    />
                    
                    <label className="inputLabel">Haberle Alakalı Görsel URL'i</label>
                    <input
                        value={imgUrl} 
                        onChange={(e)=>setImgUrl(e.target.value)}  
                        type="text" 
                        className="form-control" 
                    />
                    
                    <label className="inputLabel">Haber Açıklaması</label>
                    <input 
                        value={desc} 
                        onChange={(e)=>setDesc(e.target.value)} 
                        type="text" 
                        className="form-control" />
                    
                    <label className="inputLabel">Haber</label>
                    <textarea 
                        value={news} 
                        onChange={(e)=>setNews(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        required
                    />

                    <button onClick={props.yapilacakIslem==='put' ? haberGuncelle : haberEkle} className="btn btn-primary btn-block my-3">
                        {
                            props.yapilacakIslem === 'put' ? <span>Güncelle</span> : <span>Ekle</span>
                        }
                    </button>
                </div>
                {
                    alert.show &&
                    <Alert alert={alert} />
                }
            </div>
        </div>
    )
}

export default Form;