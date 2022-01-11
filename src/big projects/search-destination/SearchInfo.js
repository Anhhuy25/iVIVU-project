import React, { useState } from "react";
import { Link } from "react-router-dom";
import People from "./People";
import "./searchinfo.css";

const SearchInfo = () => {
  const [showPeople, setShowPeople] = useState(false);
  const [adult, setAdult] = useState(2);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(0);

  const decreaseRoom = () => {
    if (room <= 0) {
      setRoom(0);
    } else {
      setRoom(room - 1);
    }
  };
  const increaseRoom = () => {
    setRoom(room + 1);
  };

  const decreaseAdult = () => {
    if (adult <= 0) {
      setAdult(0);
    } else {
      setAdult(adult - 1);
    }
  };
  const increaseAdult = () => {
    setAdult(adult + 1);
  };

  const decreaseChildren = () => {
    if (children <= 0) {
      setChildren(0);
    } else {
      setChildren(children - 1);
    }
  };
  const increaseChildren = () => {
    setChildren(children + 1);
  };

  return (
    <div className="search-info-background">
      <Link to="" target="_blank"></Link>
      <div className="grid wide">
        <h1>Trải nghiệm kỳ nghỉ tuyệt vời</h1>
        <h2>Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất </h2>

        <div className="search-form">
          <div className="search-input">
            <i className="fas fa-map-marker-alt"></i>
            <input type="text" name="" id="" placeholder="Bạn muốn đi đâu?" />
          </div>

          <div className="search">
            <div
              className="search-quantitypeople"
              onClick={() => setShowPeople(!showPeople)}
            >
              <i className="fas fa-user-plus"></i>
              <div>
                <p>
                  {adult} người lớn, {children} trẻ em
                </p>
                <p>{room} Phòng</p>
              </div>
            </div>
            <div
              className="quantitypeople"
              style={{ display: `${showPeople ? "block" : "none"}` }}
            >
              <People
                decreaseRoom={decreaseRoom}
                increaseRoom={increaseRoom}
                decreaseAdult={decreaseAdult}
                increaseAdult={increaseAdult}
                decreaseChildren={decreaseChildren}
                increaseChildren={increaseChildren}
                adult={adult}
                children={children}
                room={room}
              />
            </div>

            <div className="search-btn">
              <button>Tìm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInfo;
