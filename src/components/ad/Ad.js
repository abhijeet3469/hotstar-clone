import React from "react";
import "./Ad.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Ad = () => {
  const Data = [{
    imgUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4416/674416-h",
    heading1: "Black Panther",
    heading2: "2hr 14min . 2018 . Superhero . U/A 13+",
    heading3: "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU). The film was directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and it stars Chadwick Boseman as T'Challa / Black Panther alongside Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Angela Bassett, Forest Whitaker, and Andy Serkis. In Black Panther, T'Challa is crowned king of Wakanda following his father's death, but he is challenged by Killmonger (Jordan), who plans to abandon the country's isolationist policies and begin a global revolution."
  },
]
  return (
    <Slide>
    <div className="ad">
    {Data.map((item)=>{
      return(
        <>
        <div className="text">
          <span>{item.heading1}</span>
          <p>{item.heading2}</p>
          <h6>{item.heading3}</h6>
        </div>
        <img className="ad-image"
              src={item.imgUrl}
              alt="" />
          </>
      )
    })}
    </div>
    </Slide>
  );
};

export default Ad;


