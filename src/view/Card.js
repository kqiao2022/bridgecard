import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  useSpring,
  useChain,
  animated,
  useSpringRef
} from '@react-spring/web'

function Card({ card, position, event, ...props }) {
  const [flipped, setFlipped] = React.useState(false)

  const flipApi = useSpringRef();
  const coverApi = useSpringRef();
  const flipStyles = useSpring({
    ref: flipApi,
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 0 : 180}deg)`,
    config: { mass: 1, tension: 100, friction: 14, duration: 100 }
  });
  const coverStyles = useSpring({
    ref: coverApi,
    from: { opacity: 0, zIndex: 500, x: 0, y: 0, filter: `grayscale(0)` },
    config: { mass: 1, tension: 100, friction: 14 }
  });
  useChain([coverApi, flipApi])
  useEffect(() => {
    if (card && (card['seat'] === 'w' || card['seat'] === "e"))
      coverApi.start({ transform: `rotate(90deg)` })
  }, [card, coverApi])
  useEffect(() => {
    if (event) {
      if (event['name'] === "playNew") {
        setFlipped(false);
        coverApi.start({ opacity: 0 })
      } else if (event && event['seat'] === card['seat'] && event['card'] === card['id']) {

          if (event['name'] === "flip") {
            card['data'] = event['data']
            setFlipped(true)
          } else if (event['name'] === "shuffle") {
            card['data'] = event['data']
            coverApi.start({ opacity: 1 })
          }
      }
    }

  }, [event, card, coverApi])
const cardImage = () => {
  let src = "./images/10_of_clubs.png"
  let data = card['data'];
  if (data) {
    src = "./images/";
    if (data['rank'] === 13)
      src = src + "ace_of_";
    else if (data['rank'] === 10)
      src = src + "jack_of_";
    else if (data['rank'] === 11)
      src = src + "queen_of_"
    else if (data['rank'] === 12)
      src = src + "king_of_"
    else
      src = src + (data['rank'] + 1) + "_of_"

    switch (data['suit']) {
      case 'd':
        src = src + "diamonds.png";
        break;
      case 'c':
        src = src + "clubs.png";
        break;
      case 's':
        src = src + "spades.png";
        break;
      case 'h':
        src = src + "hearts.png";
        break;
      default:
        break;
    }

  }
  return src;
}

return (
  <React.Fragment>
    {card ? <div style={{ position: "absolute", top: card['y'], left: card['x'], height: 90, width: 45 }}>
      <animated.div style={{ ...coverStyles }}>
        <animated.div
          className="card"
          style={{ width: 45, height: 90, opacity: flipStyles.opacity.to(o => 1 - o), transform: flipStyles.transform, backgroundImage: `url("./images/back.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}
        >
        </animated.div>
        <animated.div
          className="card"
          style={{ width: 45, height: 90, opacity: flipStyles.opacity, transform: flipStyles.transform, backgroundImage: `url(${cardImage(0)})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}
        >
        </animated.div>
      </animated.div>
    </div> : null}

  </React.Fragment>
);
}
const mapStateToProps = state => ({
  event: state.event
});
export default connect(
  mapStateToProps
)(Card);

