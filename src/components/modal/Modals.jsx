



import React, { useState } from 'react'
import { Grid, Star } from 'react-feather'
import { Button, Modal, ModalFooter, ModalHeader } from 'reactstrap'

import './Modals.scss'

const Modals = ({show, cardInfo}) => {
    const [showModal, setShowModal] = useState(true)



    
    
    
    
    return (

              <Modal size='lg' isOpen={showModal} onClosed={() => setShowModal(false)}>
        <div className="modalContainer">

          <ModalHeader as="h3">Confirm Transaction</ModalHeader>


          <div>
            <div className="modalBody py-3">
                <div className="imagesContainer p-2">
                        <img  src={cardInfo?.image} alt="" />
                </div>
                <div className="contents px-4">
                    <div  className="d-flex align-items-center justify-content-between">
                        <span>
                             <Star size={20}/>
                        </span>
                         <div className='name'>{cardInfo?.name}</div>
                        <span>
                             <Star size={20}/>
                        </span>
          
                    </div>
                    <div>
                        <span className='d-flex align-items-center'>
                            <Grid size={16}/> <span>{cardInfo?.quantity} Items</span>
                        </span>
                    </div>
                    <div>
                        <div>
                            Owner's Address
                        </div>
                        <div>
                            <span className='bold'>{cardInfo?.address}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Current Price</span>
                            <div className='my-2'>
                                <span className='bold'>{cardInfo?.price} ETH</span>
                            </div>
                            <div>
                            <a
                            href='https://opensea.io/'
                            target='_blank'
                            className="btn btn-lg btn-outline-secondary mx-1"
                            >
                            Confirm
                            </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



       
          </div>

          <ModalFooter className="footer d-flex justify-content-end">
            <Button
              type="button"
              className="btn btn-danger mx-1"
              onClick={() => setShowModal(false)}
            >
              close
            </Button>

          </ModalFooter>
        </div>
      </Modal>

  )
}

export default Modals