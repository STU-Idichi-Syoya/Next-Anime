import {post} from "../lib/markutil";
import styles from "../styles/Home.module.css";
import BlogCard from "./blogCard";

type SearchPageProps={
    searchWord:string;
    posts:post[];
}

export function SearchPage({searchWord,posts}:SearchPageProps){
    return(
        <>
            <h1 className={styles.searchTitle}>{searchWord}</h1>
            {
                posts.map((c:post)=>{
                    return(
                        <BlogCard key={c.slug} slug={c.slug} title={c.data.title} summary={c.data.description} img={c.data.img} ></BlogCard>
                    )
                })
            }
        </>
    )
}
