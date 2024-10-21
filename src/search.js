import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import search from "./Assets/search.svg";
import useFetch from "./useFetch";
import { create } from "json-server";
import { getByTitle } from "@testing-library/react";

function SearchBar({ setResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: cars } = useFetch("http://localhost:3001/cars");
  return (
    <div>
      <div className="body">
        <div>
          <div style={{ display: "flex", alignItems: "center",marginTop:"50px" }}>
            <img
              style={{ position: "absolute", marginLeft: "25px" }}
              src={search}
              alt=""
            />
            <input
              style={{
                background: "#2e2e2e",
                width: "100%",
                padding: "15px",
                color: "white",
                border: "none",
                outline: "none",
                paddingLeft: "50px",
              }}
              type="text"
              placeholder="Search for a car"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div>
            {cars &&
              cars
                // data
                .filter((val) => {
                  if (searchTerm === "") {
                    return "";
                  } else if (
                    val.brand.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => {
                  return (
                    <div
                      key={val.id}
                      style={{ borderBottom: "1px solid black" }}
                      className="div"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          height: "160px",
                        }}
                        key={val.id}
                      >
                        <img
                          style={{ width: "170px", height: "150px",background:"white"}}
                          src={val.image}
                          alt=""
                        />
                        <div
                          key={val.id}
                          style={{ fontSize: "20px", marginTop: "12px" }}
                        >
                          <p
                            style={{
                              marginLeft: "10px",
                              fontSize: "15px",
                              color: "red",
                            }}
                          >
                            Toyota {val.brand}
                          </p>
                          <p
                            style={{
                              marginLeft: "10px",
                              fontSize: "15px",
                              color: "red",
                            }}
                          >
                            {val.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
git init