import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import {Validation} from "../../Validation/Validation";

class restartModal{
  
  leInputID = e => {
    this.inputId = e.target.value;
  }
  handleInputPassword = e => {
    this.inputPassword = e.target.value;
  }
  ValidetionInputIdAndPassword = () => {
     let validator = new Validation();
     let isValidId = validator.isValidId(this.inputId);
     let isValidPassword = validator.isValidPassword(this.inputPassword);
    if(isValidId && isValidPassword)
    {
      this.changeDetails();
    }
  }
  changeDetails()
  {
    const response = fetch('http://localhost:8080/users/:id', {
     method: 'PATCH',
     body: JSON.stringify({
      password: this.inputPassword,
      userID: this.inputId
     })
   });
   const token = response.json();
   console.log(token);
 }
}
 const RestartModal = (props) => {
 
   return(
    <Modal
        onHide = {props.onHide}
        show = {props.show}
        size="lg"  
       aria-labelledby="Restart_Pass"
       className="text-right"
     >
       <Modal.Header dir="rtl">
         <Modal.Title id="Restart_Pass">איפוס סיסמא</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Form>
           <Form.Group controlId="EnterID1">
             <Form.Label >תעודת זהות</Form.Label>
             <Form.Control type="ID" placeholder="123456789" dir="rtl" />
             <Form.Text className="ID_Pass_new"> </Form.Text>
           </Form.Group>

           <Form.Group controlId="EnterPass1">
             <Form.Label>סיסמא חדשה</Form.Label>
             <Form.Control type="New_Pass" placeholder="סיסמא חדשה" dir="rtl"/>
           </Form.Group>
           <Button variant="primary" type="submit" onClick={props.onHide}>
             שמור
           </Button>
         </Form>
       </Modal.Body>
     </Modal>
   )
     
}

export default RestartModal;
