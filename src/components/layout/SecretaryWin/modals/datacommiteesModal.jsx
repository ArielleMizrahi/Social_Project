import Modal from "react-bootstrap/Modal";
import React from "react";
import Demo from './graphsceomap';

const GraphsForCeo = [
    {
      eden: 1,
      galia: 30,
      
    },
    {
      eden:2,
      galia: 40,
    },
    {
        eden: 3,
        galia: 30,
        
      },
      {
        eden:4,
        galia: 40,
      },
      {
        eden: 5,
        galia: 30,
        
      },
      {
        eden: 6,
        galia: 40,
      },
      {
        eden: 7,
        galia: 30,
        
      },
      {
        eden: 8,
        galia: 40,
      },{
        eden: 9,
        galia: 40,
      },{
        eden: 10,
        galia: 40,
      },{
        eden: 11,
        galia: 40,
      },
  ];
const DatacommiteesModal = (props) => {
 
   return(
    <Modal
            onHide = {props.onHide}
            show = {props.show}
            size="lg"  
            aria-labelledby="Graphs"
            dir="rtl"
     >
        <Modal.Header>נתונים על הועדה</Modal.Header>
        <Modal.Body>
            <Demo GraphsForCeo={GraphsForCeo}></Demo>
        </Modal.Body>
    </Modal>

   )
     
}

export default DatacommiteesModal;