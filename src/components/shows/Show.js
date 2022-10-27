import React from 'react'
import './Show.css'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Show = () => {
  const Data = [
    {
      id: 1,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8763/1308763-v-18eb691de01f",
    },
    {
      id: 2,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7527/267527-v",
    },
    {
      id: 3,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2876/862876-v",
    },
    {
      id: 4,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4267/1364267-v-59ed5cfdea3a",
    },
    {
      id: 5,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4253/1364253-v-17a2ff74143c",
    },
    {
      id: 6,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5",
    },
    {
      id: 7,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4255/1364255-v-7d13c9d136b5",
    },
    {
      id: 8,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4275/1364275-v-228803576b85",
    },
  ];
  return (
    <Slide>
    <div className="show">
      <div className="show-title">
        <span className="show-heading">Shows Recommended For You</span>
      </div>
      <div className="show-card">
        {Data.map((item) => {
          return (
            <>
              <div className="show-row">
                <img className='show-img' src={item.url} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </div>
    </Slide>
  );
};

export default Show