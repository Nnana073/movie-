import React from 'react'
 import axios from 'axios';


const MoviesList = async  () => {
   

const options = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D",
  headers: {
    "X-RapidAPI-Key": "73f66a6209msh6bc008465261f32p175d56jsn95c7acaa83d9",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
  return (
    <div>MoviesList</div>
  )
}

export default MoviesList