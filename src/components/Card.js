import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';

const Card = ({haber}) =>{
    return(
        <div className="col-md-4">
            <div className="card my-2">
                <img className="card-img-thumbnail" src={haber.imgUrl} alt="" />
                <div className="card-body">
                    <p className="card-date">{moment(haber.date).format('lll')}</p>
                    <h5 className="card-title">{haber.title}</h5>
                    <p className="card-text">{haber.desc}</p>
                    <Link haber={haber} to={`/haberdetay/${haber._id}`} className="btn btn-primary">Oku</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;