import React from 'react';
import "./tabs.css"
import {AppBar, Tabs, Tab } from '@material-ui/core';
import Content from "./Content";
import SecondContent from "./SecondContent";



const SimpleTabs = () => {
  const[value, setValue] = React.useState(0);

  const handleTabs = (e, val) => {
  setValue(val);
}
  return(
      <div className="tabs-wrapper">
        <div > 
        <AppBar position="static"  style={{ background: '#848482' }}>
          <Tabs value={value} onChange={handleTabs} TabIndicatorProps={{style: {background:'white'}}}>
            <Tab label="Charges"  />
            <Tab label="Incones"/>
          </Tabs>
        </AppBar>
        </div>
        <TabPanel value={value} index={0}> <Content/> </TabPanel>
        <TabPanel value={value} index={1}> <SecondContent/> </TabPanel>
       
      </div>
  )
}

function TabPanel(props) {
  const {children, value, index } =props;
  return(
    <div>
      {
      value===index&&(
        <div>{children}</div>
      )

      }
    </div>

  )
}
export default SimpleTabs;

