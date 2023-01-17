import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [mura, setMura] = useState("");

  const api = "https://taycan-greenshop.uz/api/";
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}Flowers/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  useEffect(() => {
    axios
      .get(`${api}Categorys/`)
      .then((res) => {
        setCategory(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchText = (event) => {
    setMura(event.target.value);
  };



  
  return (
    <Context.Provider
      value={{
        setData,
        category,
        setCategory,
        data,
        searchText,
        mura,
        api
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };