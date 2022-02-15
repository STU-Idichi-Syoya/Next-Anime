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

// import {myRehypePlugin} from './custommark';

export type postMetaData={
    author:string,
    categories:string[],
    date:string, //ex: 2020-01-19T21:16:05+09:00
    description:string,
    title:string,
    tags:Tag[],
    img:string,
}

export const postMetadataDefaultValue:postMetaData={
    author:'unknown',
    categories:['nocategory'],
    date:new Date().toString(),
    description:'no explanation',
    title:'no title',
    img:'',
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
      // .use(myRehypePlugin)
      .use(rehypeHighlight,{ignoreMissing:true})
      .use(rehypeStringify,{allowDangerousHtml:true})
      .process(markdown);
      const ret=result.toString();
      // ret.replace(/<iframe +width=([\S])+/ >)
    return ret
  };

  const typeToString=(s:any):string=>{
    return Object.prototype.toString.call(s);
  }

  export const markdownToPost=async (slug:string,markdownContent:string):Promise<post> =>{
    const matterResult=matter(markdownContent)
    const data=await markdownToHtml(matterResult.content)

    if(typeof(matterResult.data?.tags)==='string'){
      // console.log('tags is string')
      matterResult.data.tags=matterResult.data.tags.split(' ').map(t=>{
            return {
                displyTagName:t,
                tagLinkName:t.toLowerCase()
            }
        })
    }
    // }else if(!!matterResult.data?.tags &&  matterResult.data.tags== && !('displyTagName' in matterResult.data.tags) && !('tagLinkName' in matterResult.data.tags)){  
    else{  
      // console.log('tags is array')
      // console.log(typeof(matterResult.data.tags))
      // console.log(matterResult.data.tags)
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


  // pluginの作り方は
//https://github.com/azyobuzin/blog/blob/7913138eff88596512ec8403c17005bba57beb31/generator/lib/posts.ts#L20
// を参照

// import type { VFile } from "vfile"
// import { SKIP, visit } from "unist-util-visit"
// import { FrozenProcessor, Plugin, unified } from "unified"
// import { isElement as isHastElement } from "hast-util-is-element"
// import type {
//     Element,
//     Node as HastNode,
//     Root as HastRoot,
//     Text as HastText,
//   } from "hast"

// 

// export const test: Plugin<[], HastRoot> = () => {
//     return (tree: HastRoot,vfile,done) => {
//       visit(tree, (node) => {
//         // console.log(node);
//         if(node.type==='element'){
//             console.log('element?');
//             console.log(!!node.children?.length);
//             if(!!!node.children?.length||node?.visited_test){return SKIP}
//             for(let i=0;i<node.children.length;i++){
//                 let e = node.children[i]
//                 if(e.type==='element'&&e.tagName==='iframe'){
//                     console.log('found iframe');
//                     delete e.properties?.width
//                     delete e.properties?.height

//                     let iframeWrapper:Element={
//                         type:'element',
//                         tagName:'div',
//                         properties:{className:['iframe-wrapper']},
//                         children:[e],
//                     }
//                     node.children[i]=iframeWrapper
//                     console.log('replace iframe to div');
//                 }
//             }
//             node.visited_test=true
//         }
//         return true;
//         // for(const child of node.data)
//     })
// }
//     done();
// }

// node, vfile, done を受け取る関数を返す
// export function myRehypePlugin() {
//     return function (node, vfile, done) {
//       try {
//         visit(convertCode, node, null, 0);
//         done();
//       } catch (err) {
//         done(err);
//       }
//     };
//   }
  
//   // hastの要素を訪問する関数
//   function visit(visitor, node, parentNode, index) {
//     if (visitor(node, parentNode, index)) {
//       return;
//     }
  
//     if (!node.children) {
//       return;
//     }
  
//     for (let i = 0; i < node.children.length; i++) {
//       visit(visitor, node.children[i], node, i);
//     }
//   }

//   function convertCode(node) {
//     // syntaxhighlighter のコードだけをいじるという強い意思
//     if (
//       node.type === "element" &&
//       node.tagName === "iframe"
//     ) {
//       return convertIframe2responsive(node);
//     }
//     return false;
//   }
  
//   function convertIframe2responsive(node) {
//     console.log('found iframe');
//     delete node.properties.width  ;
//     delete node.properties.height  ;
//     node.children=[{...node}]
//     node.TagName = "div";
//     node.properties = {className:["iframe-wrapper"]};
//     return true;
//   }