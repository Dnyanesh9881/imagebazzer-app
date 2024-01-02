import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageApi = ({images, setData}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage]=useState(1);

  useEffect(() => {
    loadImages(null, "random");
  },[]);

useEffect(
  ()=>{
    setPage(1)
  },[searchQuery]
)

  async function loadImages(e,flag) {
    if (e) {
      e.preventDefault();
    }
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          headers: {
            "Accept-Version": "v1",
            "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
          },
          params: { query: searchQuery || "random", per_page: 5, page: page },
        }
      );
      //    console.log(response.data.results);
       if(flag==="submit"){
     
        setData(response.data.results)
        
       }else if(flag===undefined){
        setData([...images,...response.data.results]);
        console.log(images);
       }
       else{
        setData([...images,...response.data.results]);
        
       }
       setPage(page+1);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <form onSubmit={(e)=>loadImages(e,"submit")}>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button type="submit">search</button>
      </form>
      <button onClick={loadImages}>next</button>
    </div>
  );
};

export default ImageApi;
