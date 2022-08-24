import { shuffle, makeDeck,settleSeat} from "./GameManager";
import { cardsMock,seatsMock } from "./MockData";

test("shuffle function", () => {
  const cards = shuffle();
  for(let card of cardsMock){
    let cs = cards.filter((c)=>c['rank']===card['rank']&&c['point']===card['point']&&c['suit']===card['suit']&&c['value']===card['value']);
    expect(cs.length).toBe(1)
  }
  expect(cards.length).toBe(52)
});

test("settleSeat function", () => {
  for(let seat of seatsMock){
   settleSeat(seat);
   expect(seat['points']).toBe(seat['assertPoints'])
  }
});