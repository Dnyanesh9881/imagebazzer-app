import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageApi = ({ setData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadImages(null);
  }, []);
  async function loadImages(e) {
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
          params: { query: searchQuery || "random", per_page: 5, page: 1 },
        }
      );
      //    console.log(response.data.results);
      setData(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <form onSubmit={loadImages}>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default ImageApi;
