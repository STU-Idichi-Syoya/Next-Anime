// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


export interface animeListData {
  data: {
    searchWorks: {
      nodes: {
        title: string,
        malAnimeId: number,
        image: {
          recommendedImageUrl: string | null
        },
        satisfactionRate: number,
        twitterHashtag: string
      }[]
    }
  }
}





export const fetchAnimeInfo=async (gql: string): Promise<animeListData> =>{
  const g = await fetch('https://api.annict.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + process.env.TOKEN,
    },
    body: JSON.stringify({
      query: gql,
    })
  })
  
  return g.json();
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const g=await fetchAnimeInfo("");
  res.status(200).json(g);
}
