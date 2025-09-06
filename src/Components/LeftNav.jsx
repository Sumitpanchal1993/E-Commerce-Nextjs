"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import './LeftNav.css';
import { useGlobalStore } from '@/Store/GlobalStore';

const menuList = [
  { title: 'Home', icon: 'home', link: '/' },
  { title: 'New Arrivals', icon: 'verified', link: '/newarrivals' },
  { title: 'All Products', icon: 'deployed_code', link: 'all_products' },
  { title: 'Category', icon: 'category', link: '/orders' },
  { title: 'Brands', icon: 'loyalty', link: '/favourite' },
  { title: 'sale', icon: 'percent_discount', link: '/favourite' },
];

function LeftNav() {
  const { isAdmin } = useGlobalStore();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div className={`leftNavWrapper ${collapsed ? '' : 'collapsed'}`}>
      <div className="toggle-button" onClick={toggleCollapse}>
        <span className="material-symbols-outlined">
          {!collapsed ? 'chevron_right' : 'chevron_left'}
        </span>
      </div>

      <nav className="menu">
        {menuList.map((item, index) => (
          <Link href={item.link} key={index} className="menuItem">
            <span className="material-symbols-outlined">{item.icon}</span>
            <p className="menuLabel">{item.title}</p>
          </Link>
        ))}

        {isAdmin && (
          <>
            <hr />
            <Link href='/adminpanel' className="menuItem">
              <span className="material-symbols-outlined">lock</span>
              <p className="menuLabel">Admin Panel</p>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default LeftNav;
