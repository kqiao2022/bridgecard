import { shuffle, make_deck } from "./GameManager";
import { cardsResult } from "./MockData";

test("make_deck function", () => {
  const cards = [];
  make_deck(cards);
  expect(JSON.stringify(cards)).toBe(JSON.stringify(cardsResult));
});
