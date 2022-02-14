import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import style from './blogCard.module.css'

type blogcardProps={
    img : string,
    title:string,
    // discription:string,
    slug:string,
    summary:string,
}

export default function BlogCard({img,title,slug,summary}:blogcardProps) {
  return (
    <Card className={style.container}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={!img?'https://jss1.jp/wp/wp-content/uploads/2020/03/2586457f2df0e22264a871e594d8fc84.jpg':img}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={'/blog/'+slug}>
           <a><Button size="small">Watch</Button></a>
        </Link>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}