'use client'
import React from 'react'
import { useState } from 'react';
import { navTabsContent } from './navtabsconfig';



const NavTabs = ({tabName, style, border}) => {
    const tabs =  navTabsContent[tabName]
    const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    
    <div className={`flex gap-5 ${border? border: 'border-b-2 border-solid border-additional2'}   container`} >
        
        {tabs.map(tab => {
            return (
              <div
                onClick={() => setActiveTab(tab.id)}
                className={`${style ? style : 'py-[16px] px-[24px]' }  ${
                  activeTab === tab.id
                    ? "bg-additional2 text-main1"
                    : "bg-main1 text-additional2"
                } `}
              >
                {tab.text}
              </div>
            );
        })}
</div>
  )
}

export default NavTabs



