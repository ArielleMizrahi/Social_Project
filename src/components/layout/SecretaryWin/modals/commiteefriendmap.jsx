import React, { Fragment,useState } from 'react';




const Commiteefriendmap = (props) =>{
    const [show, setShow] = useState(false);
       const handleShow = () => setShow(true);

        return (
            <Fragment show={show} onHide={handleShow} animation={false}>
                 <tr>
                    <li className='list-unstyled'>{props.item.index}</li>
                    <td>{props.item.commitee}</td>
                    <td>{props.item.name}</td>
                   
                </tr>
                
            </Fragment>
        )
    
}

export default Commiteefriendmap

