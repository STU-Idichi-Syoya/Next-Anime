import { Button, CardActions } from "@mui/material";

interface AnimeTagProps {
    tags:string[]
}

export default function AnimeTag({ tags }: AnimeTagProps) {
    function getTagColor(str:string){
        const colors = ["#f44336","#9c27b0","#673ab7","#3f51b5","#2196f3","#ffeb3b"];
        const fontColors=['white','white','white','white','black','black'];
        const idx=Array.from(str).reduce((acc, curr) => acc+curr.charCodeAt(0),0) % colors.length;
        return [colors[idx],fontColors[idx]];
    }

    return (
    <CardActions>
                {
                    tags.map((tag: string) => {
                        const [color,fcolor]=getTagColor(tag);
                        return (
                            <Button key={tag} size="small" color="primary" style={{border:'solid '+color,backgroundColor:color,color:fcolor}}>
                                {tag}
                            </Button>
                        )
                    })
                }

    </CardActions>
    )
}