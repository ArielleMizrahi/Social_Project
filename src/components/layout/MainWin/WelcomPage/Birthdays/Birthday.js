import React, { Component } from 'react';
import BirthdayCard from '../Birthdays/BirthdayCard'
import Carousel from 'react-bootstrap/esm/Carousel';
import Card from 'react-bootstrap/Card';



export class Birthday extends Component {


  // Split the users list to set of three in order to render them properly in the BirthdayCard
  // getThreeItems = (userList) => {
  //       let newData = [];
  //       let setOfThree = [];

  //       for (let i = 0; i < userList.length; i++) {
  //         setOfThree.push(userList[i]);
  //         // Insert a set of three users into the new list of threes'
  //         if (setOfThree.length == 3) {
  //           newData.push(setOfThree);
  //           setOfThree = [];
  //         }
  //       }
  //       // Add the leftover list of users
  //       if (setOfThree.length > 0){
  //         newData.push(setOfThree);
  //       }
  //       return (newData)
  // }
  
  render() {  
    let userList = this.props.users;
    // let threeUsers= this.getThreeItems(userList);
    
      
    return (
      <div>
        <Card className="text-right">
        <Card.Header as="h5">ימי הולדת</Card.Header>
        <marquee behavior="scroll" direction="up" Scrollamount="4" loop="" overflow="hidden" display="inline-block">
          <Card.Body dir="rtl">
            <Card.Text>
              {/* <Carousel controls={false} indicators={false}>   */}
                {userList.map(users=>(
                   <BirthdayCard users={users} />
                ))}
              {/* </Carousel> */}
            </Card.Text>
          </Card.Body>
          </marquee>
        </Card>
        
      </div>
    );
  }
}

export default Birthday;
