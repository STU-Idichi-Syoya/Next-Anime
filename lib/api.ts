import fs from 'fs';
import path from 'path';
import { markdownToPost, post, postMetaData, postMetadataDefaultValue } from './markutil';
import {Semaphore} from 'await-semaphore';
const postsDirectory = path.join(process.cwd(), 'contents')
const aboutDirectory = path.join(process.cwd(), 'about')
let files: string[] | null=null;
let posts:post[]|null=null;
let postsBySlug:Map<string,post>=new Map();
//小文字で格納し表記ゆれを防止
let postsByTag:Map<string,post[]>=new Map();


const semaphore=new Semaphore(1);
//排他制御を行う
export async function getAllPosts():Promise<post[]|null>{
    return await semaphore.use(()=>{
        return _getAllPosts();
    });
}

export async function _getAllPosts():Promise<post[]|null>{
    
    files= files || fs.readdirSync(postsDirectory);
    // console.log(files);
    posts= posts||await Promise.all(files.map(async filename=>{
        const slug=filename.replace(/.md$/,'')
        const fullpath=path.join(postsDirectory,filename)
        const fileContents=fs.readFileSync(fullpath,'utf8')
        
        const post=await markdownToPost(slug,fileContents)
        
        return post
    }))

    if((!postsBySlug.size||!postsByTag.size)&&posts?.length){
        postsBySlug.clear();postsByTag.clear();
        posts.map(p=>{
            // by tag
            p.data.tags.map((t)=>{
                const postsArray=postsByTag.get(t.tagLinkName)
                if(!postsArray){
                    postsByTag.set(t.tagLinkName,[p])
                }
                else{
                    postsByTag.set(t.tagLinkName,[...postsArray,p])
                }
            })
            // by slug
            if(!postsBySlug.has(p.slug)){
                postsBySlug.set(p.slug,p)
            }
            else{
                console.warn("記事のリンクタイトルが重複している！！記事ファイル名を変更してください "+p.slug);
            }
        })
    }


    console.log('getPosts');
    // console.log(posts);
    if(posts)
        posts.sort((a,b)=>{
            console.log(a.data.date);
            console.log(b.data.date);
            if(a.data.date<b.data.date){
                return 1
            }else if(a.data.date>b.data.date){
                return -1;
            }else{
                return 0;
            }
        })

    return posts;
}

export async function getPostBySlug(slug:string){
    posts = posts || await getAllPosts();
    const post=postsBySlug.get(slug);
    if(!post)throw Error('article '+slug+' is not found')
    return post
}

export async function getPostsByTag(tag:string){
    tag=tag.toLowerCase()
    posts = posts || await getAllPosts();
    const poststag=postsByTag.get(tag);
    if(!poststag)throw Error('tag '+tag+' is not found')
    return poststag
}
// export async function getPostByTag(tag:string){
//     tag=tag.toLowerCase()
//     posts = posts || await getAllPosts();
//     const poststag=postsByTag.get(tag);
//     if(!poststag)throw Error('tag '+tag+' is not found')
//     return poststag
// }

export async function getAllPostTag(){
    posts = posts || await getAllPosts();
    const tags=postsByTag.keys()
    console.log(tags);
    return tags
}

// function markdownToHtml(content: string) {
//     throw new Error('Function not implemented.');
// }

export function getAboutContent() {
    const fileContent= fs.readFileSync(aboutDirectory+'/about.md', 'utf8');
    return markdownToPost('about',fileContent); ;
}