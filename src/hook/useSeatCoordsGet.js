
import React, { useEffect, useCallback } from "react";

function useSeatCoordsGet() {

  const [coords, setCoords] = React.useState();

  useEffect(() => {
    // console.log("update coords")
    initCoords()
    // window.addEventListener('resize', initCoords)
  }, [])
  function initCoords() {
    let seats = [];

    //init north seat
    let seat = { id: "n", cards: [] }
    let y = 170;
    let x = 270;
    for (let i = 0; i < 13; i++) {
      if (i == 6) {
        x = 235;
        y = 100;
      }
      x = x + 50;
      seat['cards'].push({ id: i, seat: "n", x: x, y: y })
    }
    seats.push(seat);

    //init east seat
    seat = { id: "e", cards: [] }
    y = 300;
    x = 700;
    for (let i = 0; i < 13; i++) {
      if (i == 6) {
        x = 770;
        y = 270;
      }
      y = y + 50;
      seat['cards'].push({ id: i, seat: "e", x: x, y: y })
    }
    seats.push(seat);

    //init south seat
    seat = { id: "s", cards: [] }
    y = 650;
    x = 270;
    for (let i = 0; i < 13; i++) {
      if (i == 6) {
        x = 235;
        y = 720;
      }
      x = x + 50;
      seat['cards'].push({ id: i, seat: "s", x: x, y: y })
    }
    seats.push(seat);
    //init west seat
    seat = { id: "w", cards: [] }
    y = 300;
    x = 300;
    for (let i = 0; i < 13; i++) {
      if (i == 6) {
        x = 230;
        y = 270;
      }
      y = y + 50;
      seat['cards'].push({ id: i, seat: "w", x: x, y: y })
    }
    seats.push(seat);

    setCoords(seats)
  }

  return coords;
}

export default useSeatCoordsGet;
