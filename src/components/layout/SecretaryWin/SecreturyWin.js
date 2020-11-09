import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import RestartModal from './modals/restartModal'
import NewuserModal from './modals/newuserModal'
import DeleteuserModal from './modals/deleteuserModal'
import DatacommiteesModal from "./modals/datacommiteesModal";
import ManageparticipentsModal from './modals/manageparticipentsModal'
import Commitemap from './modals/commitemap'


const SecreturyWin = () => {
  const [lgShow1, setLgShow1] = useState(false); //reset password
  const [lgShow2, setLgShow2] = useState(false); // create new user
  const [lgShow3, setLgShow3] = useState(false); //delete user
  const [lgShow4, setLgShow4] = useState(false); //statistics
  const [lgShow5, setLgShow5] = useState(false); //manage commitee
  const [showTest, setShowTest]= useState(false);

  
  return (
    <Container >
    <Accordion>
     
        <Card.Header className="text-center" >
          <Accordion.Toggle as={Button} eventKey="0" block >
            ניהול משתמשים
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="text-center">
            <Button onClick={() => setLgShow4(true)} >סטטיסטיקות</Button>{" "}
            <Button onClick={() => setLgShow3(true)}>מחיקת משתמש</Button>{" "}
            <Button onClick={() => setLgShow1(true)}>איפוס סיסמא</Button>{" "}
            <Button onClick={() => setLgShow2(true)}>יצירת משתמש חדש</Button>
           
            
       
          </Card.Body>
        </Accordion.Collapse>
      
     
        <Card.Header className="text-center">
          <Accordion.Toggle as={Button} onClick ={()=>setShowTest(!showTest)}eventKey="1" dir="rtl" block>
            ועדות בהן אני חבר
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="text-center">
            {showTest ? <Commitemap ></Commitemap> : ''}
          </Card.Body>
        </Accordion.Collapse>
      
        <Card.Header className="text-center">
          <Accordion.Toggle as={Button} eventKey="2" dir="rtl" block>
            {" "}
            ניהול הועדה שלי{" "}
          </Accordion.Toggle>
        </Card.Header>
        <Card.Body className="text-center">
          <Accordion.Collapse eventKey="2">
          <Container responsive="lg" dir="rtl">
              <Row dir="rtl" >
                
                  <Col>#</Col>
                  <Col>שם הועדה</Col>
                  <Col>ניהול חברי הועדה</Col>
                  <Col>נתונים לצפייה</Col>
                
              </Row>
              <Row>
               
                  <Col>1</Col>
                  <Col>חינוך</Col>
                  <Col>
                    <Button onClick={() => setLgShow5(true)}>
                      לחץ לניהול חברי הועדה
                    </Button>
                  </Col>
                  <Col>
                    <Button >
                      לחץ לצפייה בנתונים
                    </Button>
                  </Col>
                </Row>
             </Container>
           
          </Accordion.Collapse>
        </Card.Body>
     
    </Accordion>
    <RestartModal show={lgShow1} onHide = {setLgShow1} ></RestartModal> 
    <NewuserModal show={lgShow2} onHide = {setLgShow2} ></NewuserModal>
    <DeleteuserModal show={lgShow3} onHide = {setLgShow3} ></DeleteuserModal>
    <DatacommiteesModal show={lgShow4} onHide = {setLgShow4} ></DatacommiteesModal>
    <ManageparticipentsModal show={lgShow5} onHide = {setLgShow5} ></ManageparticipentsModal>
  </Container>
  );
};

export default SecreturyWin;
