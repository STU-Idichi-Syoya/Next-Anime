import { NextPage } from "next"
import BlogCard from "../../components/blogCard"
import { getAllPostTag, getPostsByTag } from "../../../lib/api";



export const getStaticProps = async ({ params }:{params:any}) => {
    const posts=await getPostsByTag(params.tag);
    // const post=getPostBySlug('test')
    // console.log(post);
    return {props: {posts:posts}}
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

const BLOGINDEX:NextPage =(props)=>{
    // console.log(props.posts[0])
    return (
        <>
                {
                props.posts.map((c) => {
                    return (
                        <BlogCard img={""} slug={c.slug} title={c.data.title} summary={c.data.description} ></BlogCard>
                    )
                }
            )}
        </>
    )
}

export default  BLOGINDEX;