
import Modal from "react-bootstrap/Modal";
import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import {Validation} from "../../Validation/Validation";

class deleteuserModal {


  handleInputID = (e) =>{
    this.inputId = e.target.value;
  }
  ValidationInputNewUser = () => {
    let validator = new Validation();
    let isValidId = validator.isValidId(this.inputId);
   if(isValidId){
    DeleteUser();
    }

 function DeleteUser()
  {
       const response = fetch('http://localhost:8080/users/:id', {
        method: 'DELETE',
        body: JSON.stringify({
        })
      });
      const token = response.json();
      console.log(token);
    }
  }
}


const DeleteuserModal = (props) => {
const [lgShow12, setLgShow12] = useState(false);
   return(
    <Modal
            onHide = {props.onHide}
            show = {props.show}
            aria-labelledby="Delete_user"
            className="text-right"
     >
              <Modal.Header dir="rtl">
                <Modal.Title id="Delete_Account" >מחיקת משתמש קיים</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form >
                  <Form.Group controlId="Id" >
                    <Form.Label dir="rtl">הכנס תעודת זהות</Form.Label>
                    <Form.Control type="New_Id" placeholder="123456789" dir="rtl" />
                  </Form.Group>
                </Form>
                <Button onClick={setLgShow12} variant="primary" block >
                  מחק משתמש מהמערכת
                </Button>
               
                <Modal 
                    size="xl"
                    show={lgShow12}
                    onHide={() => setLgShow12(false)}
                    className="text-right"
                    
              >
                <Modal.Title dir="rtl">מחיקת המשתמש</Modal.Title>
                <Modal.Header dir="rtl">האם את/ה בטוח/ה שנדרש למחוק את המשתמש</Modal.Header>
                <Modal.Body >
                <Button variant="primary" block>כן</Button>
                <Button variant="secondary" block>לא</Button>
                </Modal.Body>

              </Modal>
              </Modal.Body>
           
            </Modal>
   )
     
}

export default DeleteuserModal;