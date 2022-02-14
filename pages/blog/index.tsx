import { NextPage } from "next"
import BlogCard from "../components/blogCard"
import { getAllPosts, getPostBySlug } from "../../lib/api";


export const getStaticProps = async ({ params }:{params:any}) => {
    const posts=await getAllPosts();
    // const post=getPostBySlug('test')
    // console.log(post);
    return {props: {posts:posts}}
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