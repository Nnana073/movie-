import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useCallback } from "react";

 const options = {
   method: "GET",
   url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
   headers: {
     "X-RapidAPI-Key": "12c87bf7ddmsh670823fac8c68a3p1fbb5ejsnec134c956a31",
     "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
   },
 };

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);

      const getMovies = useCallback(async () => {
          setLoading(true)
           try {
             const response = await axios.request(options);
             console.log(response);
             const { results } = response;
             if (results) {
               const newMovies = results.map((item) => {
                 const {
                   titleText,
                   primaryImage,
                   titleType,
                   releaseDate,
                   releaseYear,
                 } = item;

                 return {
                   name: titleText,
                   image: primaryImage,
                   warmovie: titleType,
                   date: releaseDate,
                   year: releaseYear,
                 }
               })
               setMovies(newMovies)
             } else {
               setMovies([])
             }
              setLoading(false);
               
           } catch (error) {
             console.log(error);
             setLoading(false);
           }
      })

      useEffect(() => {
      getMovies()
  })

  return (
    <AppContext.Provider
      value={{
              loading,
          movies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };