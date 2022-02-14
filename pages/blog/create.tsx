import React, { useState,useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import {DatetoString, markdownToHtml, markdownToPost, post} from '../../lib/markutil'
import BlogDatailCard from "../components/blogDatail";
const SimpleMde = dynamic(() => import("react-simplemde-editor"), { ssr: false });
import OneColmnLayout from '../components/oneColmn';
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material";







const MarkdownEditor = () => {
    
    const [EditormarkdownValue, setEditorMarkdownValue] = useState<string>('');
    const [post,setPost] = useState<post>();
    const [html,setHtml] = useState<string>('');

    const [title,setTitle]=useState('タイトルを入力');
    const [discription,setDiscription]=useState('記事の説明を入力');
    const [author,setAuthor]=useState('執筆者を入力');
    const [tags,setTags]=useState<string[]>([])
    const [date,setDate]=useState<Date>(new Date());
    const [isDraft,setDraft]=useState<boolean>(false);

    const [isPreview,setPreview]=useState<boolean>(false);


    const slug=Date();

    // editorのvalueを取得
    const onChange = useCallback( (value) => {
      setEditorMarkdownValue(value);
    },[EditormarkdownValue]);
    
    // エディタの変化とfrontmatterの入力ごとにhtmlを生成
    useEffect( () => {
      let unmount=false;
      (async ()=>{
         const htmk=await markdownToHtml(EditormarkdownValue);
         // console.log(init);
         setHtml(htmk)
      })();
      return ()=>{unmount=true;}
    },[EditormarkdownValue]);

   // 初期処理
    useEffect(()=>{
      let unmount=false;
      (async ()=>{
         const htmk=await markdownToHtml(EditormarkdownValue);
         // console.log(init);
         setHtml(htmk)
      })();
       return ()=>{unmount=true;}
    },[])


    return(
       <> 
      <div style={{display:'flex',flexDirection:'row',marginTop:'10%'}}>

       <TextField
         helperText="タイトルを入力せよ"
         id="demo-helper-text-misaligned"
         label="Title"
         value={title}
         onChange={(e)=>{setTitle(e.target.value)}}
      />
      <TextField
         helperText="名前を入力せよ"
         id="demo-helper-text-misaligned"
         label="Author"
         value={author}
         onChange={(e)=>{setAuthor(e.target.value)}}
      />
      <TextField
         helperText="タグを半角コンマで区切って入力せよ"
         id="demo-helper-text-misaligned"
         label="Tags"
         value={tags}
         onChange={(e)=>{setTags(e.target.value.split(','))}}
      />

      <FormGroup>
         <FormControlLabel control={<Switch defaultChecked onChange={(e)=>{setDraft(!isDraft)}}/>} label="下書き(公開しない)" />
         <FormControlLabel control={<Switch defaultChecked onChange={(e)=>{setPreview(e.target.value=='true')}} />} label="プレビューを表示" />
      </FormGroup>
      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
      <div style={{minWidth:'50%',minHeight:'50%'}}>
         <p>Editor</p>
         <SimpleMde value={EditormarkdownValue} onChange={onChange} />
       </div>

       {isPreview?
       <div style={{minWidth: '50%',minHeight:'50%'}}>
         <p>Preview</p>
         <BlogDatailCard title={title} html={html} tags={tags.map(t => { return { displyTagName: t, tagLinkName: t.toLowerCase() }; })} date={DatetoString(date)} author={author}/>
       </div>
       :<></>}
      </div> 
      </>

    )
   };


export default  MarkdownEditor;
MarkdownEditor.getLayout=OneColmnLayout;
