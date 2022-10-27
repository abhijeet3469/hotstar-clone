import React from 'react'
import './Diwali.css'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Diwali = () => {
  const Data = [
    {
      id: 1,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/7002/1770017002/1770017002-v",
    },
    {
      id: 2,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5184/875184-v",
    },
    {
      id: 3,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6558/676558-v",
    },
    {
      id: 4,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4911/674911-v",
    },
    {
      id: 5,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7076/1387076-v-baa4a3a98bd0",
    },
    {
      id: 6,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7379/1357379-v-3815883434ab",
    },
    {
      id: 7,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4439/1334439-v-7813e2c1fa0b",
    },
    {
      id: 8,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3056/1393056-v-0fc762bea369",
    },
  ];
  return (
    <Slide>
    <div className="diwali">
      <div className="diwali-title">
        <span className="diwali-heading">Diwali Special</span>
      </div>
      <div className="diwali-card">
        {Data.map((item) => {
          return (
            <>
              <div className="diwali-row">
                <img className='diwali-img' src={item.url} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </div>
    </Slide>
  );
};

export default Diwali