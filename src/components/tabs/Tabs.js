import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../App.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({value, handleChange}) {



  return (
    <Box className='tabs-container'>
        <Tabs className='three' sx={{ position: 'relative' }} value={value} onChange={(event, newValue)=>handleChange(newValue)} aria-label="basic tabs example">
          <Tab className='tab' label="estuaire" {...a11yProps(0)} />
          <Tab className='tab' label="haut-ogooue" {...a11yProps(1)} />
          <Tab className='tab' label="moyen-ogooue" {...a11yProps(2)} />
          <Tab className='tab' label="ngounie" {...a11yProps(3)} />
          <Tab className='tab' label="nyanga" {...a11yProps(4)} />
          <Tab className='tab' label="ogooue-ivindo" {...a11yProps(5)} />
          <Tab className='tab' label="ogooue-lolo" {...a11yProps(6)} />
          <Tab className='tab' label="ogooue-maritime" {...a11yProps(7)} />
          <Tab className='tab' label="woleu-ntem" {...a11yProps(8)} />
          <div className='underline'></div>
        </Tabs>
    </Box>
  );
}

