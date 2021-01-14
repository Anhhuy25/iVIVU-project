import React from 'react';
import { useGlobalContext } from '../context';
import { sidebar } from './listLP';
import { Link } from 'react-router-dom';
import './navbar.css';

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  return (
    <div>
      <div className="sidebar-times" onClick={() => setShowSidebar(false)}>
        <i className="fas fa-times"></i>
      </div>

      <ul className={`sidebar ${showSidebar ? 'sidebar-slide' : ''}`}>
        {sidebar.map(item => {
          return (
            <Link onClick={() => setShowSidebar(false)} key={item.id} to={`${item.url}`}>
              <li>
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;