import React from "react";
import "./EmailList.css";

const EmailList = ({ emails, deleteParticipant }) => {
   const onDelete = (e) => {
      console.log(e.currentTarget.id);
      deleteParticipant(e.currentTarget.id);
   };

   return (
      <div className="emailList-container">
         {emails.map((email) => (
            <span className="emailItem" key={email}>
               {email}
               <span className="deleteBtn" onClick={onDelete} id={email}>
                  X
               </span>
            </span>
         ))}
      </div>
   );
};

export default EmailList;
