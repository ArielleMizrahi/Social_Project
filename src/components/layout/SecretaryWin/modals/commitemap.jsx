import React, { Fragment,useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';



const Commiteerowmap = (props) =>{
    const [show, setShow] = useState(false);
    const [lgShow1, setLgShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return (
            <Fragment show={show} onHide={handleShow} animation={false}>
                 <tr>
                    <li className='list-unstyled'>{props.item.index}</li>
                    <td>{props.item.name}</td>
                    <td>{props.item.Email}</td>
                    <td>{props.item.Usertype}</td>
                    <td>
                        <Button onClick={setLgShow1}>מחיקת משתמש</Button>
                    </td>
                </tr>
                <Modal size="lg"
                    show={lgShow1}
                    onHide={() => setLgShow1(false)}
                     className="text-right">
                    <Modal.Header dir="rtl" >מחיקת המשתמש</Modal.Header>
                    <Modal.Body >האם אתה בטוח שאתה רוצה למחוק את המשתמש                        <p></p>
                        <>{props.item.name}</>
                        <p></p>
                     </Modal.Body>
                     <Modal.Footer>
                     <Button variant="primary" onClick={handleShow}>שמור וסגור</Button>
                     <Button variant="secondary" onClick={handleClose}>ביטול</Button>

                     </Modal.Footer>

                </Modal>
            </Fragment>
        )
    
}

export default Commiteerowmap


