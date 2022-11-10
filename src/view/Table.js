
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import { shuffle, settleSeat } from "../common/GameManager";
import Seat from "./Seat"
import useSeatCoordsGet from "../hook/useSeatCoordsGet";
import { createEvent } from "../redux/actions/event"
import {
  useSprings,
  animated
} from '@react-spring/web'
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
function Table({ event, ...props }) {
  const [status, setStatus] = React.useState(0)
  const seats = useSeatCoordsGet();
  const dispatch = useDispatch();
  const [springs, api] = useSprings(52, index => {
    if (index < 13)
      return { opacity: 1, x: 15, y: 0 }
    else if (index >= 13 && index < 26)
      return { opacity: 1, x: 10, y: 0 }
    else if (index >= 26 && index < 39)
      return { opacity: 1, x: 5, y: 0 }
    else
      return { opacity: 1, x: 0, y: 0 }

  })
  useEffect(() => {
    if (event['name'] === "gameOver")
      setStatus(2)
    else if (event['name'] === "settle")
      setStatus(4)
  }, [event])
  const play = async () => {
    setStatus(1)
    let cards = shuffle();
    var count = 0;
    for (let s of seats) {
      for (let c of s['cards']) {
        await sleep(100);
        api.start(index => {
          if (index === count) {
            dispatch(createEvent({ name: "shuffle", seat: s['id'], card: c['id'], data: cards[count] }))
            return { opacity: 0, x: c['x'] - 400, y: c['y'] - 400 }
          }
        })
        count++
      }
    }
    await sleep(10);
    dispatch(createEvent({ name: "gameOver" }))
  }
  const settle = async () => {
    setStatus(3)
    for (let seat of seats) {
      settleSeat(seat);
      let cs = seat['cards'].map((c) => c['data']).sort((a, b) => {
        if ((a['value'] - b['value']) === 0)
          return b['rank'] - a['rank']
        else
          return a['value'] - b['value']
      })
      for (let i = 0; i < 13; i++) {
        await sleep(10);
        dispatch(createEvent({ name: "flip", seat: seat['id'], card: i, data: cs[i] }));
      }
    }
    await sleep(10);
    dispatch(createEvent({ name: "settle" }));


  }
  const playAgain = async () => {

    api.start(index => {
      if (index < 13)
        return { opacity: 1, x: 15, y: 0 }
      else if (index >= 13 && index < 26)
        return { opacity: 1, x: 10, y: 0 }
      else if (index >= 26 && index < 39)
        return { opacity: 1, x: 5, y: 0 }
      else
        return { opacity: 1, x: 0, y: 0 }

    })

    await sleep(10);
    dispatch(createEvent({ name: "playNew" }))
    setTimeout(() => setStatus(0), 100)
  }
  return (
    <div className="table-container">

      <div className="table-body">
        {springs.map((styles, index) => <animated.div key={index}
          className="card"
          style={{ width: 45, height: 90, backgroundImage: `url("./images/back.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain", ...styles }}
        >
        </animated.div>)}
      </div>
      {seats && seats.map((s, index) => <Seat key={index} seat={s} />)}

      <div className="action-panel">
        {status === 0 ? <div className="action-btn" onClick={play}><span>Play</span></div> : null}
        {status === 2 ? <div className="action-btn" onClick={settle}><span>Settle</span></div> : null}
        {status === 4 ? <div className="action-btn" onClick={playAgain}><span>Ready For Play Again</span></div> : null}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  event: state.event
});
export default connect(
  mapStateToProps
)(Table);