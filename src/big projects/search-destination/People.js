import React from "react";

function People({
  adult,
  children,
  room,
  decreaseRoom,
  increaseRoom,
  decreaseAdult,
  increaseAdult,
  decreaseChildren,
  increaseChildren,
}) {
  return (
    <>
      <div className='search-quantitypeople-room'>
        <div className='room'>
          <span className='quantity'>{room}</span> Phòng
        </div>
        <div>
          <button className='minus-btn' onClick={decreaseRoom}>
            -
          </button>
          <button className='plus-btn' onClick={increaseRoom}>
            +
          </button>
        </div>
      </div>

      <div className='search-quantitypeople-adult'>
        <div className='adult'>
          <span className='quantity'>{adult}</span> Người lớn
        </div>
        <div>
          <button className='minus-btn' onClick={decreaseAdult}>
            -
          </button>
          <button className='plus-btn' onClick={increaseAdult}>
            +
          </button>
        </div>
      </div>

      <div className='search-quantitypeople-children'>
        <div>
          <span className='quantity'>{children}</span> Trẻ em
        </div>
        <div>
          <button className='minus-btn' onClick={decreaseChildren}>
            -
          </button>
          <button className='plus-btn' onClick={increaseChildren}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default People;
