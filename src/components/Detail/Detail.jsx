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
      Les premiers habitants de la province sont les pygmées émigrés
d’Afrique centrale. Ils ont été poussés par les migrations bantu, qui à
leur tour, ont peuplé la province du XI
ème au XIXème siècle. <br></br><br></br>
En 1472, les portugais furent les premiers Européens à accoster sur
les bords du Komo. L’estuaire de ce fleuve en forme de caban, un
manteau de marin, en portugais gabâo, donna son nom au Gabon. <br></br><br></br>
Le 9 février 1839, un traité fut signé entre le Chef Mpongwé nommé
Rapotchombo et Louis Edouard Bouët-Willaumez. A partir de ce traité
les Français étendent progressivement leur influence sur le Gabon en
créant un poste militaire dans l’estuaire du Komo. En 1850 Libreville
est née. Ce nom est choisi pour exprimer la liberté acquise de 30
esclaves libérés, suite à l’incident du navire négrier brésilien Elizia.
      </TabPanel>
      <TabPanel value={value} index={1}>
      Cette région est de loin la plus peuplée de l'État puisqu’avec 895 689 habitants en 20133 elle rassemble à elle seule la moitié de sa population totale.<br></br><br></br>
      Population globale: 895 689 hab<br></br><br></br>

komo: 17 575 hab<br></br>
komo mondah: 90 096 hab<br></br>
Noya: 4 225 hab<br></br>
komo ocean: 4 225 hab<br></br>
département de Libreville: 753 550 hab.<br></br>


      </TabPanel>
      <TabPanel value={value} index={2}>
      Les informations économiques portent sur les infrastructures et sur l’évolution de l’activité des secteurs productifs.<br></br>  <br></br>
Les infrastructures revêtent un rôle moteur dans le développement économique et social. La province de l’Estuaire est dotée des infrastructures aéroportuaires, routières, ferroviaires, portuaires et de télécommunication. <br></br> <br></br>
La province de l’Estuaire ne dispose que de l’Aéroport International Léon MBA situé dans la capitale provinciale Libreville. Il a été construit depuis les années 50. <br></br>
La province de l’Estuaire dispose d’un réseau routier d’une longueur de près de 500 km dont 163 sont praticables en toutes saisons. Situation socio-économique - ESTUAIRE 2012 45 INFORMATIONS ECONOMIQUES PARTIE : III Les principaux tronçons sont :<br></br><br></br>
- Libreville-Cap-Estérias : 24 km bitumés en partie ; <br></br>
- Libreville-Owendo : 16 km bitumés ; <br></br>
- Libreville-Ntoum-Kango : 91,5 km en réfection ; <br></br>
- Ntoum-Cocobeach : 83 km latérités ;<br></br>
 - Ntoum-Donguila : 28 km latérités.  <br></br>
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
