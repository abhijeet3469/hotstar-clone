import React from 'react'
import './Movie.css'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
const Movie = () => {
  const Data = [
    {
      id: 1,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/896/580896-v",
    },
    {
      id: 2,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6536/846536-v",
    },
    {
      id: 3,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v",
    },
    {
      id: 4,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
    },
    {
      id: 5,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
    },
    {
      id: 6,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8285/388285-v",
    },
    {
      id: 7,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v",
    },
    {
      id: 8,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/6247/1770016247/1770016247-v",
    },
  ];
  return (
    <Slide>
    <div className="movie">
      <div className="movie-title">
        <span className="movie-heading">Movies Recommended For You</span>
      </div>
      <div className="movie-card">
        {Data.map((item) => {
          return (
            <>
              <div className="movie-row">
                <img className='movie-img' src={item.url} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </div>
    </Slide>
  );
};
    

export default Movie