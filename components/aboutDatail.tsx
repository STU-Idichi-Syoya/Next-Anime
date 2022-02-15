import 'highlight.js/styles/default.css';
import Head from 'next/head'
import {Box} from '@mui/material'

// import style from './blogDetail.module.css'
// import '../../styles/github.code.style.module.css'
type AboutDatailProps = {
    html: string;
};




export default function AboutDetail({ html }: AboutDatailProps) {
    // console.log(author)
   
//     <script
// //   src={url} // consent mangagement
// //   strategy="beforeInteractive"
//   onLoad={() => {
//       document.querySelector('markdown-body iframe').map(
//             (iframe: HTMLIFrameElement) => {
//                 iframe.width = '100%';
//             }
//       )
//     // If loaded successfully, then you can load other scripts in sequence
//   }}
// />
    // const [IsexecuteScript, setIsexecuteScript] = useState(false);
    // const [IsIncludeScript, setIsIncludeScript] = useState(false);
    // useEffect(() => {
    //     if (html.includes('<script')) {
    //         setIsIncludeScript(true);
    //         const ret = window.confirm('記事内のスクリプトを実行しますか？');
    //         if (ret) {
    //             setIsexecuteScript(true);
    //         }
    //     }
    //     else {
    //         setIsIncludeScript(false);
    //         setIsexecuteScript(false);
    //     }
    // }, [])
    // console.log(tags)
    return (
        <>
            {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
            {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> */}
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />
                <link href="/github.code.style.module.css" rel="stylesheet" />
            </Head>

            <Box sx={{ backgroundColor: 'white', paddingLeft:{xs:'10px',md:'30px'},paddingRight:{xs:'10px',md:'30px'},paddingTop:'5px',paddingBottom:'10px' }}>

                <article className='markdown-body' dangerouslySetInnerHTML={{ __html: html }} />

                {/* {!IsIncludeScript ?
                    <article className='markdown-body' dangerouslySetInnerHTML={{ __html: html }} />
                    : IsexecuteScript ?
                        <article className='markdown-body' dangerouslySetInnerHTML={{ __html: html }} />
                        : <div>表示できません</div>
                } */}
            </Box></>
    )
}

