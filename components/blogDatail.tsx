import { createTheme } from "@mui/material";
import TagIcon from '@mui/icons-material/Tag';
import Link from 'next/link';
import 'highlight.js/styles/default.css';
import Head from 'next/head'
import Avatar from '@mui/material/Avatar';
import useSWR from "swr";
import { useEffect, useState } from "react";
import { deepOrange, deepPurple, blueGrey } from '@mui/material/colors';
import { Tag } from '../lib/markutil'
// import style from './blogDetail.module.css'
// import '../../styles/github.code.style.module.css'
type BlogDatailProps = {
    title: string;
    html: string;
    tags: Tag[];
    date: string;
    author: string;
};

type GithubUser = {
    avaterImgUri: string;
    name: string;
    githubUri: string;
}


const fetcherUserData = async (author: string): Promise<GithubUser> => {
    if (author.indexOf('github:') >= 0) {
        const githubUserName = author.split('github:')[1];
        const url = `https://api.github.com/users/${githubUserName}`;
        return fetch(url).then(res => res.json()).then(res => {
            const data: GithubUser = {
                name: res.name,
                avaterImgUri: res.avatar_url,
                githubUri: res.html_url,
            }
            return data;
        })
    } else {
        throw new Error('author is not github user');

    }

}

const getAvaterStringColor = (name: string) => {
    const colors = [deepOrange, deepPurple, blueGrey]
    const namehash = name.split('').reduce((hash, char) => {
        return hash + char.charCodeAt(0);
    }, 0);
    return colors[namehash % colors.length];
}

export default function BlogDatailCard({ title, html, tags, date, author }: BlogDatailProps) {
    // console.log(author)
    const avatarColor = getAvaterStringColor(author);
    const { data, error, isValidating } = useSWR<GithubUser>(author, fetcherUserData, {
        fallbackData: {
            name: author,
            avaterImgUri: "",
            githubUri: "",
        }
    });
    // const [IsexecuteScript, setIsexecuteScript] = useState(false);
    // const [IsIncludeScript, setIsIncludeScript] = useState(false);
    // useEffect(() => {
    //     if (html.includes('<script')) {
    //         setIsIncludeScript(true);
    //         const ret = window.confirm('記事内のスクリプトを実行しますか？');
    //         if (ret) {
    //             setIsexecuteScript(true);
    //         }
    //     }
    //     else {
    //         setIsIncludeScript(false);
    //         setIsexecuteScript(false);
    //     }
    // }, [])
    // console.log(tags)
    return (
        <>
            {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
            {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> */}
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />
                <link href="/github.code.style.module.css" rel="stylesheet" />
            </Head>

            <div style={{ backgroundColor: 'white', paddingLeft:'30px',paddingRight:'30px',paddingTop:'5px',paddingBottom:'10px' }}>
                <div style={{ marginBottom: '3%' }}>
                    <h1>{title}</h1>
                    <time>投稿日:{date}</time>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                        {tags.map((t: Tag) => {
                            return (
                                <>
                                    {console.log(t)}
                                    <TagIcon />
                                    <div key={t.displyTagName} style={{ marginRight: '30px' }}> <Link href={'/blog/byTag/' + t.tagLinkName}><a>{t.displyTagName}</a></Link></div>
                                </>
                            );
                        })}
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <a href={data?.githubUri}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                                {data?.avaterImgUri ? <Avatar style={{ height: 40, width: 40 }} src={data?.avaterImgUri} /> : <Avatar sx={{ bgcolor: avatarColor[500] }} style={{ height: 32, width: 32 }}>{data?.name[0]}</Avatar>}
                                {/* <Avatar  src={data?.avaterImgUri}></Avatar> */}
                                <div style={{ margin: '5px 0 0 10px' }}>{data?.name}</div>
                            </div>
                        </a>
                    </div>
                </div>
                <article className='markdown-body' dangerouslySetInnerHTML={{ __html: html }} />

                {/* {!IsIncludeScript ?
                    <article className='markdown-body' dangerouslySetInnerHTML={{ __html: html }} />
                    : IsexecuteScript ?
                        <article className='markdown-body' dangerouslySetInnerHTML={{ __html: html }} />
                        : <div>表示できません</div>
                } */}
            </div></>
    )
}

