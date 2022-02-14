import { useRouter } from "next/router";
import { getAllPosts, getPostBySlug} from "../../lib/api";
import { post } from "../../lib/markutil";
import BlogDatailCard from "../../components/blogDatail";

// //どんなpathがあるか
export const getStaticPaths = async () => {
    // const res = await fetch("http://localhost:3001/blog");
    // const json = await res.json();

    // const paths = json.contents.map((content) => `/anime/${content.id}`);
    const posts=await getAllPosts()
    // const p= posts.then(
    //   (p)=>{ return posts.map(p=>{return '/blog/'+p.title})}
    // )
    // posts.keys().map((k)=>{
    //   console.log(k);
    // })
    // console.log(posts.keys())
    const paths=posts?.map(p=>{return '/blog/'+p.slug})
    // const paths=["/anime/1","/anime/2","/anime/3"];
    return { paths:paths, fallback: false };
}

export const getStaticProps = async ({ params }:{params:any}) => {
    // const posts=getAllPosts();
    // console.log(params.id)
    const post=await getPostBySlug(params.id)
    // console.log(post);
    return {props: {post:post}}
}



export default function BlogDatail(props: { post: post; }) {
  // const router = useRouter();
//   console.log(props);
  return (<>
      <BlogDatailCard title={props.post.data.title} html={props.post.content_html} tags={props.post.data.tags} date={props.post.data.date} author={props.post.data.author}/>
  </>);
}