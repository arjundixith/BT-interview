
import './App.css';
import React, {useEffect, useState} from "react";

const App= ()=> {
const [images, setImages]= useState();


useEffect(()=>{
  const url="https://images-api.nasa.gov/search?q=moon";

  const fetchData = async()=>{
    try{
      const response = await fetch(url);
      const json = await response.json();
      debugger;
      console.log(json.collection.items);
      const imagesArray = []
      json.collection.items.map(val=>{
        debugger;
        if(val && val.links){

        
        val?.links.map(images=>{
          imagesArray.push(images);
        })
      }
      })
      debugger;
      setImages(imagesArray);
    }catch(error){
      console.log(error)
    }
  }
  fetchData();
},[]);

  return (
    <div>
        
        {images && images.map(href=>{
                 return <img src={href.href} alt="text"/>
})

}
    </div>
  );
}

export default App;
