import React, { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'


const News =({news})=> {

  const [newsList,setNewsList]= useState([])

  useEffect(() => {
    setNewsList(news['news']);
    spinnerOrNews();
  }, [news])

  // Put spinner while loading the news, put the news in the card when loaded
  const spinnerOrNews = () =>{
    if (!newsList){
      return (<Card.Body className="align-items-center d-flex justify-content-center">
            <Card.Text dir="rtl">
            <div className="justify-content-center d-flex">
      <h4 className="pl-4">טוען</h4>
            <Spinner animation="border" />
            </div>
           </Card.Text>
          </Card.Body>)
    }
    else {
      return (
        <marquee behavior="scroll" direction="up" Scrollamount="2" loop="" overflow="hidden" display="inline-block">
          <Card.Body>
            <Card.Text dir="rtl">
            {newsList.map(news=>(
                    <div>
                      <p></p>
                      <a href={news.link}><h5><u>{news.name}</u></h5></a>
                      <div>
                        <h7>{news.summary}</h7>
                        <div>
                          <h8>{news.date}</h8>
                        </div>
                      </div>
                    </div>
                  ))}
           </Card.Text>
          </Card.Body>
        </marquee>
      )
      }
    }
    
    return (
      <div>
        <Card className="text-right">
        <Card.Header as="h5">מבזקי חדשות</Card.Header>
           {spinnerOrNews()}
        </Card>
        
      </div>
    );
  }


export default News;
