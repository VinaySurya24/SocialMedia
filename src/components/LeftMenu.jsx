import React from 'react';
import '../styles/LeftMenu.css';

const LeftMenu = ({ isCollapsed, toggleMenu }) => {
  const menuItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '👤', label: 'Profile' },
    { icon: '💬', label: 'Messages' },
    { icon: '🔔', label: 'Notifications' },
    { icon: '⭐', label: 'Favorites' },
    { icon: '⚙️', label: 'Settings' }
  ];

  return (
    <div className={`left-menu ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="collapse-button" onClick={toggleMenu}>
        {isCollapsed ? '➡️' : '⬅️'}
      </button>
      <nav>
        {menuItems.map((item, index) => (
          <a key={index} href="#" className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            {!isCollapsed && <span className="menu-label">{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default LeftMenu;
