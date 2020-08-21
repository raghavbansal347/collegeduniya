import React, { useState, useEffect } from "react";
import "./App.css";
import jsonData from "./json/colleges.json";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  let [nextItem, setNextItem] = useState(10)
  const [displayData, setDisplayData] = useState(jsonData.colleges.slice(0,10))

  useEffect(() => {
    var listElm = document.querySelector('#infinite-list');
    // Detect when scrolled to bottom.
    listElm.addEventListener('scroll', function() {
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          scrolling()
        }
    });
  });
  
  const scrolling = ()=>{
      const tempDisplayData = jsonData.colleges.slice(0, nextItem+10);
      setDisplayData(tempDisplayData);
      setNextItem(nextItem+10);
      console.log('nextitem ki value', nextItem);
  }

  return (
    <div className="App" id='infinite-list'>
      <div className="wrapper">
        <div className="heading">
          <p>Colleges in North India</p>
        </div>
<div className="wrapperDiv">
        {displayData.map((college, index) => {
          return (
            
              <div className="parentDiv"  >
                <div className="college">
                  {college.promoted ? (
                    <div className="promoted">
                      <p>PROMOTED</p>
                    </div>
                  ) : null}

                  <div className="rating">
                    <div className="smallWrapper">
                      <small>
                        
                        <span className="ratingFinal">{college.rating}</span> /5
                      </small>
                      <small>Very Good</small>
                    </div>
                  </div>

                  <div className="filterWrapper">
                    <div className="filter">{college.tags[0]}</div>
                    <div className="distance">{college.tags[1]}</div>

                    <div className="rank">
                      <p>#{college.ranking}</p>
                    </div>
                  </div>
                </div>
                <div className="bottomDetails">
                  <div className="detailsWrapper">
                    <div className="collegeDetailsWrapper">
                      <div className="collegeName">
                        <p>{college.college_name}</p>
                        <small>{
                          [1,2,3,4,5].slice(0,college.rating).map((v, i) => {
                            return <span>★</span>;
                          })} </small>
                          <small style={{"color": "gray"}}>
                          {
                          [1,2,3,4,5].slice(college.rating,5).map((v, i) => {
                            return <span>★</span>;
                          })}
                          </small>
                      </div>
                      <div className="distanceFrom">
                        <p>{college.nearest_place[0]}</p>
                        <div className="verticalLine"></div>
                        <p style={{ color: "#adadad" }}>
                         {college.nearest_place[1]}
                        </p>
                      </div>

                      <div className="match">
                        <p>
                          <span className="green1">93% Match:</span> <span className="bold">{(college.famous_nearest_places.split(',')[0]).split("from")[0]}</span>  from {(college.famous_nearest_places.split(',')[0]).split("from")[1]}
                          <span className="green">,</span> <span className='bold'> {(college.famous_nearest_places.split(',')[1]).split("from")[0]}</span> from {(college.famous_nearest_places.split(',')[0]).split("from")[1]}
                        </p>
                      </div>
                    </div>

                    <div className="details">
                      <div className="strikePrice">
                        <small>
                          {" "}
                          <del>₹{college.original_fees}</del>{" "}
                        </small>
                        <div className="discount">
                          <small>{college.discount}</small>
                        </div>
                      </div>
                      <div className="finalPrice">
                  <p>₹ {college.discounted_fees}</p>
                      </div>
                      <div className="sem">
                        <p className="grey1">{college.fees_cycle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="offers">
                    <div className="off">
                      <p>
                        <span className="flat">Flat </span>Rs{" "}
                        <span className="green1">2000 </span>off + upto Rs{" "}
                        <span className="green1">500 </span>wallet! to avail...{" "}
                        <span className="login">LOGIN</span>{" "}
                      </p>
                    </div>

                    <div className="amenities">
                      <div className="features">
                        <p className="green1">{college.amenties[0]}</p>
                        <p className="green1 dot">•</p>
                        <p className="green1">{college.amenties[1]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default App;
