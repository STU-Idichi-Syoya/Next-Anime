import { NextPage } from "next"
import BlogCard from "./components/blogCard"
import { getAllPosts, getPostBySlug } from "../lib/api";


export const getStaticProps = async ({ params }:{params:any}) => {
    const posts=await getAllPosts();
    // const post=getPostBySlug('test')
    // console.log(post);
    return {props: {posts:posts}}
}


const BLOGINDEX:NextPage =(props:any)=>{
    // console.log(props.posts[0])
    return (
        <>
          <h1>最近の投稿</h1>                {
                props.posts.map((c:any) => {
                    return (
                        <BlogCard img={""} slug={c.slug} title={c.data.title} summary={c.data.description} ></BlogCard>
                    )
                }
            )}
        </>
    )
}

export default  BLOGINDEX;