import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = 'XA9xNGZHjQqjcLtu6B233GrlHlqVt5Ni';

const Random = () => {
    const {gif, loading, fetchData} = useGif();
    function clickHandler() {
        fetchData();
    }


  return (
    <div className='w-1/2   bg-green-400 border border-black rounded-xl flex flex-col items-center gap-y-5 mt-15px'>
        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>A Random GIF</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt="" width="400" height="400"  />)
        }
        

        <button onClick={clickHandler}
        className='w-9/12  bg-white text-lg py--5 rounded-lg mb-4'>Generate</button>
    </div>
  )
}

export default Random