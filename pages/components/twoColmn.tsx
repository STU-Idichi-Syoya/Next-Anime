import { Box, Grid } from "@mui/material";

export default function TwoColmnLayout({Component,pageProps}:any){
    return(
    <Box sx={
        { display: 'flex',
         marginTop: '10px',
         padding:{xs:'30px',md:'40px'}

        }}  justifyContent={"space-between"} style={{width:'100%'}
        }>
      <Grid container spacing={1}>
            <Grid item xs={12} md={9}>
                <Component {...pageProps} />
            </Grid>
            <Grid item xs={12} md={3}>
                <div style={{backgroundColor:'red',width:'100%',height:'100vh'}}></div>
            </Grid>
      </Grid>
    </Box>
    )
}