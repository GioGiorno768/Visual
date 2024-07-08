import { useState } from "react";

export default function Count({count}) {
  const [jumlah, setJumlah] = useState(count);
  return (
    <div className="w-fit p-2 px-4 flex font-semibold gap-4 border rounded-md border-gray-500">
      <button
        onClick={() =>
          jumlah === 1 ? setJumlah(jumlah) : setJumlah(jumlah - 1)
        }
      >
        -
      </button>
      <span>{jumlah}</span>
      <button onClick={() => setJumlah(jumlah + 1)}>+</button>
    </div>
  );
}

Count.defaultProps = {
    count: 1
}