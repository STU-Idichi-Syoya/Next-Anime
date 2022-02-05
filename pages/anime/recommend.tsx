import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@mui/styles'
import type { NextPage } from 'next'
import React from 'react';
import { useEffect } from 'react';
import AnimeCard from '../components/animeCard'
import {animeListData} from '../api/getAnime'
import { fetchAnimeInfo } from '../api/getAnime';
import { getNowSeson } from '../../util/str';


type Props = {
  animeListData: animeListData
}


const gql=`
{
  searchWorks(seasons:["${getNowSeson()}"],first:40, orderBy: {field: WATCHERS_COUNT, direction: DESC}) {
    nodes {
      title
      malAnimeId
      image {
        recommendedImageUrl
      }
      satisfactionRate
      twitterHashtag
      watchersCount
    }
  }
}`;

console.log(gql);

export async function getStaticProps() {
  // `getStaticProps` はサーバー側で実行されます
  const res = await fetchAnimeInfo(gql);
//   let a=null;
//   res.then(res=>{a=res}).catch(e=>{console.log(e);throw e});
  const props= {
    props:{
      animeListData:res
    }
  }
  console.log(props)
  return props;
}



const RECOMMEND: NextPage<Props> = ({ animeListData }) => {
  console.log(animeListData);
  return (
    <Grid container>
      {!animeListData ? <h1>Loading...</h1> : animeListData.data.searchWorks.nodes.map((anime: { malAnimeId: number; image: { recommendedImageUrl: string; }; title: string; }) => {
        // {{console.log(anime)}}
        return (
          <Grid key={anime.title} item xs={12} md={12 / 2} xl={12 / 4} style={{ margin: 'auto' }}>
            <AnimeCard
              key={String(anime.malAnimeId)}
              image_uri={anime.image?.recommendedImageUrl ? anime.image.recommendedImageUrl : ''}
              title={anime.title}
              tags={['anime', 'iguana']}
              short_description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
              anime_id={anime.malAnimeId}></AnimeCard>
          </Grid>
        )
      })}

    </Grid>
  )
}

export default RECOMMEND;
