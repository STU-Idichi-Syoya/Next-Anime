import { NextPage } from "next"
import BlogCard from "../../../components/blogCard"
import { SearchPage } from "../../../components/searchPage";
import { getAllPostTag, getPostsByTag } from "../../../lib/api";



export const getStaticProps = async ({ params }:{params:any}) => {
    const posts=await getPostsByTag(params.tag);
    // const post=getPostBySlug('test')
    // console.log(post);
    return {props: {posts:posts,tag:params.tag}}
}

// //どんなpathがあるか
export const getStaticPaths = async () => {
    // const res = await fetch("http://localhost:3001/blog");
    // const json = await res.json();

    // const paths = json.contents.map((content) => `/anime/${content.id}`);
    const posts=await getAllPostTag()

    const paths=Array.from(posts).map(p=>{return '/blog/byTag/'+p})
    // const paths=["/anime/1","/anime/2","/anime/3"];
    return { paths:paths, fallback: false };
}

const BLOGINDEX:NextPage =(props:any)=>{
    // console.log(props.posts[0])
    return (
        <>
              <SearchPage searchWord={props.tag} posts={props.posts}></SearchPage>
        </>
    )
}

export default  BLOGINDEX;