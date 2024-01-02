import React, { useState } from "react";

import ImageApi from "./ImageApi";
import ImageList from "./ImageList";

const App=()=>{

 const [data, setData]=useState([]);
    return (
        <div>
            <ImageApi setData={setData} images={data}/>
         <ImageList  images={data}/>
        </div>
    )
}

export default App;