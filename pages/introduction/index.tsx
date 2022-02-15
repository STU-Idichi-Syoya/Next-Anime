import { NextPage } from "next"
import AboutDetail from "../../components/aboutDatail"
import {getAboutContent } from "../../lib/api";


export const getStaticProps = async ({ params }:{params:any}) => {
    const post=await getAboutContent();
    // const post=getPostBySlug('test')
    // console.log(post);
    return {props: {post:post}}
}


const BLOGINDEX:NextPage =(props:any)=>{
    // console.log(props.posts[0])
    return (
        <>
        <AboutDetail html={props.post.content_html}></AboutDetail>
        </>
    )
}

export default  BLOGINDEX;
// BLOGINDEX.