import React from "react";
import Card from "../card/Card";
import './CardWrapper.scss'
import { nftData } from "../../data";
import { Col, Row,  } from "reactstrap";

const CardWrapper = () => {
  return (
    <div className="cardContainer">
      <Row className="">
        {
            nftData?.map((data)=>(
                <Col  xs={12} sm={6} md={4} xl={3} key={data?.id}>
                    <Card data={data}/>
                </Col>

            ))
        }

      </Row>
    </div>
  );
};

export default CardWrapper;
