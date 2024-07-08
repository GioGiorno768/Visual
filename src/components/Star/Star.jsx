import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Star({ count, nilai = null }) {
  const star = [
    [
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
    ],
    [
      "fa-regular fa-star-half-stroke",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-solid fa-star",
    ],
    [
      "fa-solid fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
    ],
    [
      "fa-solid fa-star",
      "fa-regular fa-star-half-stroke",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
    ],
    [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
    ],
    [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star-half-stroke",
      "fa-regular fa-star",
      "fa-regular fa-star",
    ],
    [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
    ],
    [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star-half-stroke",
      "fa-regular fa-star",
    ],
    [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
    ],
    [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star-half-stroke",
    ],
    [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
  ];
  return (
    <div>
      {star[count].map((e, i) => (
        <FontAwesomeIcon key={i} className="text-yellow-400 text-sm" icon={e} />
      ))}
      <span style={nilai !== null ? {display: "inline-block"} : {display: "none"}} className="text-xs mx-3 text-gray-500">({nilai})</span>
    </div>
  );
}

export function StarRiview() {
  const [isStar, setStar] = useState(0)
  return (
    <div>
      <button onClick={() => isStar == 1 ? setStar(0) : setStar(1)}><FontAwesomeIcon className="text-yellow-400 text-xl " icon={`${isStar > 0 ? "fa-solid" : "fa-regular"} fa-star`}/></button>
      <button onClick={() => isStar == 2 ? setStar(1) : setStar(2)}><FontAwesomeIcon className="text-yellow-400 text-xl " icon={`${isStar > 1 ? "fa-solid" : "fa-regular"} fa-star`}/></button>
      <button onClick={() => isStar == 3 ? setStar(2) : setStar(3)}><FontAwesomeIcon className="text-yellow-400 text-xl " icon={`${isStar > 2 ? "fa-solid" : "fa-regular"} fa-star`}/></button>
      <button onClick={() => isStar == 4 ? setStar(3) : setStar(4)}><FontAwesomeIcon className="text-yellow-400 text-xl " icon={`${isStar > 3 ? "fa-solid" : "fa-regular"} fa-star`}/></button>
      <button onClick={() => isStar == 5 ? setStar(4) : setStar(5)}><FontAwesomeIcon className="text-yellow-400 text-xl " icon={`${isStar > 4 ? "fa-solid" : "fa-regular"} fa-star`}/></button>
    </div>
  )
}
