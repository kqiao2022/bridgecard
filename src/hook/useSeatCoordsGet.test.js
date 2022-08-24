import useSeatCoordsGet from "./useSeatCoordsGet";
import { renderHook } from "@testing-library/react";

describe("useSeatCoordsGet", () => {
  it("return correct object", () => {
    const mockResult = {
      current: [
        {
          id: "n",
          cards: [
            { id: 0, seat: "n", x: 320, y: 170 },
            { id: 1, seat: "n", x: 370, y: 170 },
            { id: 2, seat: "n", x: 420, y: 170 },
            { id: 3, seat: "n", x: 470, y: 170 },
            { id: 4, seat: "n", x: 520, y: 170 },
            { id: 5, seat: "n", x: 570, y: 170 },
            { id: 6, seat: "n", x: 285, y: 100 },
            { id: 7, seat: "n", x: 335, y: 100 },
            { id: 8, seat: "n", x: 385, y: 100 },
            { id: 9, seat: "n", x: 435, y: 100 },
            { id: 10, seat: "n", x: 485, y: 100 },
            { id: 11, seat: "n", x: 535, y: 100 },
            { id: 12, seat: "n", x: 585, y: 100 },
          ],
        },
        {
          id: "e",
          cards: [
            { id: 0, seat: "e", x: 700, y: 350 },
            { id: 1, seat: "e", x: 700, y: 400 },
            { id: 2, seat: "e", x: 700, y: 450 },
            { id: 3, seat: "e", x: 700, y: 500 },
            { id: 4, seat: "e", x: 700, y: 550 },
            { id: 5, seat: "e", x: 700, y: 600 },
            { id: 6, seat: "e", x: 770, y: 320 },
            { id: 7, seat: "e", x: 770, y: 370 },
            { id: 8, seat: "e", x: 770, y: 420 },
            { id: 9, seat: "e", x: 770, y: 470 },
            { id: 10, seat: "e", x: 770, y: 520 },
            { id: 11, seat: "e", x: 770, y: 570 },
            { id: 12, seat: "e", x: 770, y: 620 },
          ],
        },
        {
          id: "s",
          cards: [
            { id: 0, seat: "s", x: 320, y: 650 },
            { id: 1, seat: "s", x: 370, y: 650 },
            { id: 2, seat: "s", x: 420, y: 650 },
            { id: 3, seat: "s", x: 470, y: 650 },
            { id: 4, seat: "s", x: 520, y: 650 },
            { id: 5, seat: "s", x: 570, y: 650 },
            { id: 6, seat: "s", x: 285, y: 720 },
            { id: 7, seat: "s", x: 335, y: 720 },
            { id: 8, seat: "s", x: 385, y: 720 },
            { id: 9, seat: "s", x: 435, y: 720 },
            { id: 10, seat: "s", x: 485, y: 720 },
            { id: 11, seat: "s", x: 535, y: 720 },
            { id: 12, seat: "s", x: 585, y: 720 },
          ],
        },
        {
          id: "w",
          cards: [
            { id: 0, seat: "w", x: 300, y: 350 },
            { id: 1, seat: "w", x: 300, y: 400 },
            { id: 2, seat: "w", x: 300, y: 450 },
            { id: 3, seat: "w", x: 300, y: 500 },
            { id: 4, seat: "w", x: 300, y: 550 },
            { id: 5, seat: "w", x: 300, y: 600 },
            { id: 6, seat: "w", x: 230, y: 320 },
            { id: 7, seat: "w", x: 230, y: 370 },
            { id: 8, seat: "w", x: 230, y: 420 },
            { id: 9, seat: "w", x: 230, y: 470 },
            { id: 10, seat: "w", x: 230, y: 520 },
            { id: 11, seat: "w", x: 230, y: 570 },
            { id: 12, seat: "w", x: 230, y: 620 },
          ],
        },
      ],
    };

    const { result } = renderHook(() => useSeatCoordsGet());
    expect(JSON.stringify(result)).toBe(JSON.stringify(mockResult));
  });
});
