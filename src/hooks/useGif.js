import React from "react";
import Tag from "../components/Tag";
import { useState, useEffect } from "react";
import axios from "axios";


const API_KEY = 'XA9xNGZHjQqjcLtu6B233GrlHlqVt5Ni';


const useGif = (tag) => {

    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchData(tag) {
    setLoading(true);
     
    const { data } = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
    const imageSource = data.data.images.downsized.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

return{gif, loading, fetchData};

  
};

export default useGif;
