import { NextPage } from "next"
import { SearchPage } from "../components/searchPage";
import { getAllPosts, getPostBySlug } from "../lib/api";

export const getStaticProps = async ({ params }: { params: any }) => {
    const posts = await getAllPosts();
    // const post=getPostBySlug('test')
    // console.log(post);
    return { props: { posts: posts } }
}


const BLOGINDEX: NextPage = (props: any) => {
    // console.log(props.posts[0])
    return (
        <>
           <SearchPage searchWord={"最近の投稿"} posts={props.posts} ></SearchPage>
        </>
    )
}

export default BLOGINDEX;
// BLOGINDEX.