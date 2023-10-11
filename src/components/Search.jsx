import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";



const Search = () => {

    const history = useNavigate()

    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
      e.preventDefault();
      if (keyword.trim()) {
        history(`/dash/register?${keyword}`);
      } else {
        history("/dash/register");
      }
    };

  return (
    <>
    {/* <MetaData title="Search a product "/> */}
      <form  onSubmit={searchSubmitHandler}>
        <input
          type="search"
          placeholder="Search Here"
          onChange={(e) => setKeyword(e.target.value)}
        />
        {/* <input type="submit" value="Search" /> */}
      </form>
    </>
  );
};

export default Search;
