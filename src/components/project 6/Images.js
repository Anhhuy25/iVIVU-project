import React from 'react';
import { useGlobalContext } from '../project 6/context';

const Images = () => {
  const { list } = useGlobalContext();
  return (
    <div>
      {
        list.length > 0 ? (
          <div className="container">
            {list.map(item => {
              const { id, tags, user, largeImageURL } = item;
              return (
                <div key={id} >
                  <img src={largeImageURL} alt="" className="img" />
                  {/* <p>{tags}</p> */}
                </div>
              );
            })}
          </div>
        ) : null}

    </div>
  );
};


export default Images;