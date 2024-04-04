import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {

const [hotels, setHotels] = useState(data);
const [showText, setShowText] = useState(false);

const showTextClick = (item) => {
  item.showMore = !item.showMore
  setShowText(!showText)
}

return ( 
<div>
  <div className="container">
    <h1>NYC TOP {hotels.length} HOTELS</h1>
  </div>

{hotels.map((item => {
  const {id, hotelName, description, image, source, showMore} = item;
  
  const removeHotel = (id) => {
    let newHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(newHotels);
  }
  
  return (
  <div key={id}>
    <div className="container">
      <h2>{id} - {hotelName}</h2>
      <p>{showMore ? description : description.substring(0, 200) + "..."}
      <button onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button></p>
      <img src={image} width="500px" alt='pic'/>
      <p>{source}</p>
      <button className="btn" onClick={() => removeHotel(id)}>Remove</button>
    </div>
    
  </div>
  )
}))}
</div>
)
}


export default App;