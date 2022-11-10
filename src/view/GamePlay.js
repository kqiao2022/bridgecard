
import Table from "./Table";

function GamePlay() {

  return (
    <div  style={{width:"100%",height:window.innerHeight,overflow:"auto"}}>
       {window.innerWidth<870?<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",fontSize:30}}><span>Only Support PC</span></div>:<Table/>}
    </div>
  );
}

export default GamePlay;
