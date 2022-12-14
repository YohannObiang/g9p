import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Cards from './Card';
import CardList from './CardList';
import CardListSante from './CardListSante';
import CardListPolitics from './CardsListPolitics';

const theme = createTheme({
  palette: {
    primary: {

      main: '#3f50b5',

    },
    secondary: {

      main: '#00AA4F',
      
    },
  },
});

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

export default function BasicTabs({Population,Education,Economie,Sante,Histoire,Politique}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <ThemeProvider theme={theme}>
    <Box className='tabs-container2' sx={{ width: '100%' }}>
      <Box className='three2' >
        <Tabs className='detailsTabsBox' value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary" indicatorColor="secondary">
          <Tab className='tab2' label="Histoire" {...a11yProps(0)} />
          <Tab className='tab2' label="Population" {...a11yProps(1)} />
          <Tab className='tab2' label="Economie" {...a11yProps(2)} />
          <Tab className='tab2' label="Sante" {...a11yProps(3)} />
          <Tab className='tab2' label="Education" {...a11yProps(4)} />
          <Tab className='tab2' label="Politique" {...a11yProps(5)} />
          <div className='underline2'></div>
        </Tabs>
      </Box>
      <div>
      <TabPanel value={value} index={0}>
      Les premiers habitants de la province sont les pygm??es ??migr??s
d???Afrique centrale. Ils ont ??t?? pouss??s par les migrations bantu, qui ??
leur tour, ont peupl?? la province du XI
??me au XIX??me si??cle. <br></br><br></br>
En 1472, les portugais furent les premiers Europ??ens ?? accoster sur
les bords du Komo. L???estuaire de ce fleuve en forme de caban, un
manteau de marin, en portugais gab??o, donna son nom au Gabon. <br></br><br></br>
Le 9 f??vrier 1839, un trait?? fut sign?? entre le Chef Mpongw?? nomm??
Rapotchombo et Louis Edouard Bou??t-Willaumez. A partir de ce trait??
les Fran??ais ??tendent progressivement leur influence sur le Gabon en
cr??ant un poste militaire dans l???estuaire du Komo. En 1850 Libreville
est n??e. Ce nom est choisi pour exprimer la libert?? acquise de 30
esclaves lib??r??s, suite ?? l???incident du navire n??grier br??silien Elizia.
      </TabPanel>
      <TabPanel value={value} index={1}>
      Cette r??gion est de loin la plus peupl??e de l'??tat puisqu???avec 895 689 habitants en 20133 elle rassemble ?? elle seule la moiti?? de sa population totale.<br></br><br></br>
      Population globale: 895 689 hab<br></br><br></br>

komo: 17 575 hab<br></br>
komo mondah: 90 096 hab<br></br>
Noya: 4 225 hab<br></br>
komo ocean: 4 225 hab<br></br>
d??partement de Libreville: 753 550 hab.<br></br>


      </TabPanel>
      <TabPanel value={value} index={2}>
      Les informations ??conomiques portent sur les infrastructures et sur l?????volution de l???activit?? des secteurs productifs.<br></br>  <br></br>
Les infrastructures rev??tent un r??le moteur dans le d??veloppement ??conomique et social. La province de l???Estuaire est dot??e des infrastructures a??roportuaires, routi??res, ferroviaires, portuaires et de t??l??communication. <br></br> <br></br>
La province de l???Estuaire ne dispose que de l???A??roport International L??on MBA situ?? dans la capitale provinciale Libreville. Il a ??t?? construit depuis les ann??es 50. <br></br>
La province de l???Estuaire dispose d???un r??seau routier d???une longueur de pr??s de 500 km dont 163 sont praticables en toutes saisons. Situation socio-??conomique - ESTUAIRE 2012 45 INFORMATIONS ECONOMIQUES PARTIE : III Les principaux tron??ons sont :<br></br><br></br>
- Libreville-Cap-Est??rias : 24 km bitum??s en partie ; <br></br>
- Libreville-Owendo : 16 km bitum??s ; <br></br>
- Libreville-Ntoum-Kango : 91,5 km en r??fection ; <br></br>
- Ntoum-Cocobeach : 83 km lat??rit??s ;<br></br>
 - Ntoum-Donguila : 28 km lat??rit??s.  <br></br>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <CardListSante/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <CardList Education= {Education}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <CardListPolitics/>
      </TabPanel>
      </div>
    </Box></ThemeProvider></div>
  );
}
