import React from 'react';
import { useGlobalContext } from './components/project 6/context';
import Images from './components/project 6/Images';
import Navbar from './components/project 6/Navbar';
import Search from './components/project 6/Search';


const Project6 = () => {
  const { list } = useGlobalContext();

  return (
    <div>
      <Navbar />
      <Search />
      <Images />
    </div>
  );
};

export default Project6;