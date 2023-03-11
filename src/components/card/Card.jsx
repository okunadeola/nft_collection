import React, { useState } from "react";
import { Star } from "react-feather";
import Modals from "../modal/Modals";

import './Card.scss'

const Card = ({data}) => {
    const [popup, setPopup] = useState(false)


    const buyNow = ()=>{
        setPopup((prev)=> !prev)
    }

  return (
    <div>
        <div className="cardContainers">
            <div className="cardTop">
                <div className="cardTopQty">
                    <span>{data?.quantity}</span>
                </div>
                <div className="cardImage">
                    <div className="mainImage">
                        <img src={data?.image} alt="" />
                    </div>
                </div>

            </div>

            <div className="cardFooter ">
                <div className="cardInfo">
                    <div  className="cardName my-2">
                        <span>
                             <Star size={7}/>
                        </span>
                         <div>{data?.name}</div>
                        <span>
                             <Star size={7}/>
                        </span>
          
                    </div>
                    <div className="prices">
                        <h3>
                            {data?.price} ETH
                        </h3>
                    </div>

                </div>

                <div className="footer" onClick={buyNow}>
                    <div className="footer-content">
                        <span>Buy Now</span>
                    </div>
                </div>
            </div>

        </div>


        {
            popup && (
                <Modals show={popup} cardInfo={data}/>
            )
        }

    </div>

  );
};

export default Card;

