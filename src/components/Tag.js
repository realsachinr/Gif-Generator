import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY = "XA9xNGZHjQqjcLtu6B233GrlHlqVt5Ni";

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData();
  }


  return (
    <div className="w-1/2   bg-blue-400 border border-black rounded-xl flex flex-col items-center gap-y-5 mt-15px">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">
        Random GIF
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="" width="400" height="400" />
      )}

      <input
        className="w-9/12  bg-white text-lg py-1 rounded-lg mb-2 text-center placeholder:p-2"
        placeholder="Enter Input"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        onClick={() => fetchData(tag)}
        className="w-9/12  bg-white text-lg py--5 rounded-lg mb-4"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
