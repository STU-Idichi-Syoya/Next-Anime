import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html'
// import remarkCodeTitles from 'remark-code-titles';
import remarkBreaks from 'remark-breaks'
// import remarkImages from 'remark-images'
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import matter from 'gray-matter';

export type postMetaData={
    author:string,
    categories:string[],
    date:string, //ex: 2020-01-19T21:16:05+09:00
    description:string,
    title:string,
    tags:Tag[],
}

export const postMetadataDefaultValue:postMetaData={
    author:'unknown',
    categories:['nocategory'],
    date:new Date().toString(),
    description:'no explanation',
    title:'no title',
    tags:[{
        displyTagName:'no_tag',
        tagLinkName:'no_tag',
    }],
}

export type post={
    slug:string,
    data:postMetaData,
    content_html:string,
}
export type Tag={
  displyTagName:string,
  tagLinkName:string,
}


export const markdownToHtml = async (markdown: string) :Promise<string> => {
    const result = await unified()
      .use(remarkParse)
      .use(remarkHtml,{sanitize:false})
      .use(remarkGfm) // table etc...
      .use(remarkEmoji,{emoticon:true})
      .use(remarkBreaks) // 改行をそのまま反映する
    //   .use(remarkImages)
    //   .use(remarkCodeTitles)
      .use(remarkRehype,{allowDangerousHtml:true})
      .use(rehypeHighlight,{ignoreMissing:true})
      .use(rehypeStringify,{allowDangerousHtml:true})
      .process(markdown);
    return result.toString();
  };

  const typeToString=(s:any):string=>{
    return Object.prototype.toString.call(s);
  }

  export const markdownToPost=async (slug:string,markdownContent:string):Promise<post> =>{
    const matterResult=matter(markdownContent)
    const data=await markdownToHtml(matterResult.content)

    if(typeof(matterResult.data?.tags)==='string'){
      console.log('tags is string')
      matterResult.data.tags=matterResult.data.tags.split(' ').map(t=>{
            return {
                displyTagName:t,
                tagLinkName:t.toLowerCase()
            }
        })
    }
    // }else if(!!matterResult.data?.tags &&  matterResult.data.tags== && !('displyTagName' in matterResult.data.tags) && !('tagLinkName' in matterResult.data.tags)){  
    else{  
      console.log('tags is array')
      console.log(typeof(matterResult.data.tags))
      console.log(matterResult.data.tags)
      // 配列である場合
      let tags:Tag[]=[];
      for(const t of matterResult.data.tags){
        if(typeof(t)==='string'){
          tags.push({
            displyTagName:t,
            tagLinkName:t.toLowerCase()
          })
        }else{
          tags.push(t)
        }
      }

      matterResult.data.tags=tags;
      // matterResult.data.tags=matterResult.data.tags.map((t:string)=>{
      //   console.log('tag_object') 
      //   console.log(typeof(t));
      //     return {
      //       displyTagName:t,
      //       tagLinkName:t.toLowerCase()
      //     }
      //   })
    }
    // console.log('tags')

    // console.log(matterResult.data.tags)

    const d=new Date(matterResult.data?.date)
    const fmt=DatetoString(d);
    // console.log(d.getMonth()+1)

    let mr:postMetaData={
        ...postMetadataDefaultValue,
        ...matterResult.data,
        date:fmt
    };
    // console.log('meta')
    // console.log(mr);
    const post={
        slug:slug,
        // title:title,
        data:mr,
        content_html:data
    }
    return post;
  }

  export const DatetoString=(d:Date):string=>{
    return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`
  }