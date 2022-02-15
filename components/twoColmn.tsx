import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Box, Grid } from "@mui/material";
// import {SideBar} from './sideBar';
export default function TwoColmnLayout({Component,pageProps}:any){
    // const SideBarElem = Component.getSideBar || SideBar;
    // console.log(SideBar);
    return(
    <Box sx={
        { display: 'flex',
         marginTop: '10px',
         padding:{xs:'10px',md:'40px'}

        }}  justifyContent={"space-between"} style={{width:'100%'}
        }>
      <Grid container spacing={1}>
            <Grid item xs={12} md={9}>
                <Component {...pageProps} />
            </Grid>
            <Grid item xs={12} md={3}>


            <Card sx={{ width: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://assets.st-note.com/production/uploads/images/66964896/picture_pc_a2f22c2c40bf7a9262e7bc31db7731a2.jpg?width=800"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
            IPLAB(Image Processing Lab)<br/>
            画像処理研究室
          </Typography>
          <Typography variant="body2" color="text.secondary">
            大阪工業大学 画像処理研究室のブログサイトです。
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>




            </Grid>
      </Grid>
    </Box>
    )
}