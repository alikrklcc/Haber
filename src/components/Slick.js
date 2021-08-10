import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const AutoPlay = ({haberler}) => {
  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      arrows:false
    };
    return (
      <div>
        <h2 className="text-center my-5">Dünyadan Haber</h2>
        <Slider {...settings}>
          {
              haberler &&
              haberler.map(haber=>(
                  <div className="slick-wrap">
                      <Link to={'/'} className="slick-link">
                        <img src={haber.imgUrl} alt="" className="slick-img"/>
                        <div className="card-body">
                            <p className="text-center">{haber.title}</p>
                        </div>
                    </Link>
                  </div>
              ))
          }
        </Slider>
      </div>
    );
  
}
export default AutoPlay;