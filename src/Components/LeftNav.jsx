
"use client";
import React from 'react';
import Link from 'next/link';
import './LeftNav.css';
import { useGlobalStore } from '@/Store/GlobalStore';



const menuList = [
  { title: 'Dashboard', icon: 'dashboard', link: '/' },
  { title: 'All Products', icon: 'deployed_code', link: 'all_products' },
  { title: 'Orders', icon: 'home_storage', link: '/orders' },
  { title: 'Favorite', icon: 'favorite', link: '/favourite' },
  { title: 'New Arrivals', icon: 'verified', link: '/newarrivals' },
  // { title: 'Admin Panel', icon: 'lock', link: '/adminpanel' },
]

function LeftNav() {
  const {isAdmin} = useGlobalStore();  
  return (
    <>
        <div className='leftOption'>
          {menuList.map((item, index) => {
            return (
              <div className='menuopt' key={index} >
                <Link href={item.link}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <p>{item.title}</p>
                </Link>
              </div>
            )
          })}

            {isAdmin && (<div className='menuopt'>
              <Link href='/adminpanel'>
              <span className="material-symbols-outlined">lock</span>
              <p>Admin Panel</p> 
              </Link>
              </div>)}
        </div>

    </>
  )
}

export default LeftNav
