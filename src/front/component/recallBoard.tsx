import { useState } from "react";
import "./css/recallBoard.css";

export default function recallBoard() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  );

  return (
    <>
      <div className="recallBoard">
        <div className="boardTitle">1st Recall</div>
        <div className="recallItemCard">
          <div className="detailIcon"/>
        </div>
      </div>
    </>
  );
}
