import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AnimeTag from './animeTag';
import Link from 'next/link';

interface AnimeCardProps {
    anime_id: number,
    key:string
    image_uri: string,
    title: string,
    tags: string[],
    short_description: string,
}




export default function AnimeCard({anime_id, image_uri, title, tags, short_description }: AnimeCardProps) {
    
    return (
        <Link href={'/anime/'+anime_id}><a>
        <Card style={{marginRight:"30px", marginTop:"40px", }}>
            <CardActionArea style={{height:'400px'}}>
                <CardMedia
                    component="img"
                    height="150"
                    style={{objectFit:"contain"}}
                    image={!image_uri ? '/noimage.svg' : image_uri}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {short_description}
                    </Typography>
                </CardContent>
                <AnimeTag tags={tags}/>
            </CardActionArea>
            
        </Card>
        </a></Link>
    );
}

