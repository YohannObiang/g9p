import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function CardSante() {
  const theme = useTheme();

  return (
    <div>
    <Card sx={{ display: 'flex' }}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxWYvW7y4Mv2rW0_ltkQ-xuV1dQiZ_r-TigIA-fsZ&s"
        alt="Lycee Leon"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            CHU Jeanne Ebori
          </Typography>
          <Typography component="div" variant="h7">
            Notre etablissement hospitalier flambant neuf
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Boulervard du bord de mer
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            066 77 55 52
          </Typography>
        </CardContent>
        
        </Box>
    </Card>
    <br></br>
    <Card sx={{ display: 'flex' }}>
    <CardMedia
    component="img"
    sx={{ width: 151 }}
    image="data:image/jpeg;base64,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"
    alt="Lycee Leon"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
        CHU Angondje
      </Typography>
      <Typography component="div" variant="h7">
        Notre etablissement de cancerologie
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Angondje, Akanda
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        066 18 55 24
      </Typography>
    </CardContent>
    
    </Box>
</Card>
<br></br>
<Card sx={{ display: 'flex' }}>
    <CardMedia
    component="img"
    sx={{ width: 151 }}
    image="https://www.lenouveaugabon.com/media/k2/items/cache/1e7c2689344ef3a5b3e8670b51f909c1_L.jpg"
    alt="Lycee Leon"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
        CHU Owendo
      </Typography>
      <Typography component="div" variant="h7">
        Notre etablissement sanitaire de proximite
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Owendo, Estuaire
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        066 18 55 24
      </Typography>
    </CardContent>
    
    </Box>
</Card>
</div>
  );
}
