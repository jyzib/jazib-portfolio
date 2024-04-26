'use client';
import React from 'react'
import { useState } from 'react';
import styles from './Item.module.scss';
export default function Item({position, company, duration, location, image, url, responsibilities, color}) {
  const [toggel,setToggel] = useState(false)
console.log(responsibilities[0])
    return (
      <div className="">
        <div className={styles.item} style={{'--h': color.h, '--s': color.s, '--l': color.l}}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h3 data-text={position}>{position}</h3>
            </div>
            <span className={`${styles.info}`}>{company}</span>
          </div>
          <div className={styles.right}>
            <span className={styles.info}>{duration}</span>
            <span className={styles.info}>{location}</span>
          </div>
          <div onClick={()=>setToggel(!toggel)} className={styles.info} >
<span  >
<svg className={styles.drop_down} style={{  transform: toggel ?  'rotate(180deg)' :'rotate(0deg)' }} width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5002 11L3.06686 3M11.5002 11L20.7002 3M11.5002 11L11.5002 10.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



  </span>

          </div>
        
        </div>
     
          <div className={`${styles.drop_down} ${toggel ?styles.visible:styles.hide}`}  >

            <h1 style={{color:'white', fontSize:'30px' ,}} className={styles.info} >{responsibilities[0].role}</h1>
            <p className={styles.info}  >{responsibilities[0].role_summery}</p>
            <h1  style={{color:'white', fontSize:'30px' ,}} className={styles.info}  >{responsibilities[0].Responsibility}</h1>
            <p className={styles.info}  >{responsibilities[0].Responsibility_summery}</p>
            
            
          </div>
      
        </div>
    )
}