import React, { useEffect} from "react";
import Card from "./Card";
import { connect } from "react-redux";
function Seat({seat,dispatch,event,...props}) { 
  const [settled, setSettled]=React.useState(false)
  useEffect(() => {
    if(event['name']==="settle")
       setSettled(true)
  }, [event])
  function getTop(){

     if(seat['id']==="n")
        return 260;
     else if(seat['id']==="s")
        return 630;
     else if(seat['id']==="w"||seat['id']==="e")
        return 450;

  }
  function getLeft(){
    if(seat['id']==="n"|| seat['id']==="s")
       return 430;
    else if(seat['id']==="w")
       return 300;
    else if(seat['id']==="e")
       return 550
 }
  return (
    <div style={{position:"absolute",top:0,left:0}}>
        {seat&&seat['cards'].map((c,index)=><Card key={index} position={seat['id']} card={c}/>)}
        {seat&&settled?<div style={{position:"absolute",top:getTop(),left:getLeft(),width:80,height:100,color:"white"}}>{seat['points']?seat['points']:0}</div>:null}
    </div>
  );
}


const mapStateToProps = state => ({
  event:state.event
});
export default connect(
  mapStateToProps
)(Seat);