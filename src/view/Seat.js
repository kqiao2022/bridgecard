import React, { useEffect } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import {
  useSpring,
  animated
} from '@react-spring/web'
function Seat({ seat, dispatch, event, ...props }) {

  const [styles, api] = useSpring(() => ({ opacity: 0 }))

  useEffect(() => {
    switch (seat['id']) {
      case "e":
        api.start({ transform: `rotate(90deg)` })
        break;
      case "s":
        api.start({ transform: `rotate(180deg)` })
        break;
      case "w":
        api.start({ transform: `rotate(-90deg)` })
        break;
      default:
        break;
    }
  }, [seat, api])
  useEffect(() => {
    if (event['name'] === "settle")
      api.start({ opacity: 1 })
    else if (event['name'] === "playNew")
      api.start({ opacity: 0 })
  }, [event, api])
  function getTop() {

    if (seat['id'] === "n")
      return 260;
    else if (seat['id'] === "s")
      return 600;
    else if (seat['id'] === "w" || seat['id'] === "e")
      return 450;

  }
  function getLeft() {
    if (seat['id'] === "n" || seat['id'] === "s")
      return 430;
    else if (seat['id'] === "w")
      return 300;
    else if (seat['id'] === "e")
      return 550
  }
  return (
    <div style={{ position: "absolute", top: 0, left: 0 }}>
      {seat && seat['cards'].map((c, index) => <Card key={index} position={seat['id']} card={c} />)}
      <animated.div style={{ position: "absolute", top: getTop(), left: getLeft(), width: 120, height: 60, color: "white", ...styles }}>
        {seat ? <div><span style={{ fontSize: 10 }}>{seat['subPoints'] && seat['subPoints'].map((p) => p + "  ")}</span></div> : null}
        {seat ? <div>{seat['points'] && seat['points'] ? seat['points'] : 0}</div> : null}
      </animated.div>
    </div>
  );
}


const mapStateToProps = state => ({
  event: state.event
});
export default connect(
  mapStateToProps
)(Seat);