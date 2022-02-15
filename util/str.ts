const seasonName=['winter','spring','summer','autumn'];
export const getNowSeson=()=>{
    const date = new Date();
    const sidx = (date.getMonth()+1)/4;
    const season = seasonName[Math.floor(sidx)];
    return `${date.getFullYear()}-${season}`;
}

export const rangeSeson=(start_year:number,stop_year:number)=>{
    let ret = "";
    for(let i=start_year;i<=stop_year;i++){
        ret+=`"${i}-${seasonName[0]}",`;
        ret+=`"${i}-${seasonName[1]}",`;
        ret+=`"${i}-${seasonName[2]}",`;
        ret+=`"${i}-${seasonName[3]}",`;

    }
    return ret;
}

export const string2Hash=(str:string)=>{
    return( Array.from(str).reduce((hash,char)=>{
        return hash+char.charCodeAt(0);
    },0));
}