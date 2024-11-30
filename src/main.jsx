import React from 'react';
import ReactDOM from 'react-dom/client';

function Heading(){
  return <h1>Head Of Dept: CSE</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <Heading />

  </React.StrictMode>
);







/*-----------------1-----------------------
const name = "NS LONI";
const current_date = new Date();
const year = current_date.getFullYear();
--------------------------------------------
    <div>
    <p>I am {name}.</p>
    <p>Current Year is: {year}.</p>
    </div>
--------------------------------------------*/    

/*----------------2------------------------
const name = "NS LONI";
------------------------------------------
    <div>
      <h1>I am: {fname} {lname}</h1>

      <h1>My Self: {fname +" "+ lname}</h1>

      <h1> Hello: {`${fname} ${lname}`}!</h1>

      <p>My Roll-Number: {num}</p>
      
    </div>
------------------------------------------*/

/*--------------3--------------------------
    <div>
      <h1 className='heading'>My Name As Following </h1>
      <ul>
        <li>NS LONI</li>
        <li>Nagaraj Loni</li>
        <li>NS</li>
      </ul>
      <h1 className='heading'>My Friend Favourite Food </h1>
      <div className='main'>
        <img className="food-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfpMYGq05ueeS-S674zyr1MEoutB7j9nSlagvHwZEGb29eYbO3kHZbT33FD3eHn92X80&s'></img>
        <img className="food-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkUzW36TmrE1y1AaWWmrCv50_TInFjTH-Thun4D5Bd71Qs63MdRdptSQ&s'></img>
        <img className="food-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7RZk9kt8LkUZrtL8iCKJP36pvZeYQRZba9rb06YI1Ia_jvKqeqjuvsV3yfT2UKLcsmJ22w&s'></img>
      </div>
    </div>
----------------------------------------*/


/*------------4----------------------------
const custonStyle={
  color: "red",
  fontSize: "20px",
  border:"1px solid black"
}
----------------------------------------

    <h1 style={custonStyle}>Hello NS LONI</h1>
----------------------------------------*/


/*-------------5---------------------------
const date = new Date();
const currentTime = date.getHours();

let greeting;


const custonStyle = {
  color: ""
}

if(currentTime < 12){
  greeting = "Good Morning"
  custonStyle.color = "red"

} else if(currentTime < 18){
  greeting = "Good AfterNone"
  custonStyle.color = "green"


}else{
  greeting = "Good Evening"
  custonStyle.color = "blue"

}
----------------------------------------
      <h1 className='heading' style={custonStyle}>{greeting}</h1>

----------------------------------------*/


/*--------------6---Function-----------------------

----------------------------------------
----------------------------------------*/


/*---------------7-------------------------
----------------------------------------
----------------------------------------*/


/*----------------8------------------------
----------------------------------------
----------------------------------------*/


/*-----------------9-----------------------
----------------------------------------
----------------------------------------*/


/*------------------10----------------------
----------------------------------------
----------------------------------------*/