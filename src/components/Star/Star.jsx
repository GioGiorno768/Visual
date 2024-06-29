import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <FontAwesomeIcon key={i} className="text-yellow-400" icon={e} />
      ))}
      <span style={nilai !== null ? {display: "inline-block"} : {display: "none"}} className="text-sm mx-3 text-gray-500">({nilai})</span>
    </div>
  );
}
