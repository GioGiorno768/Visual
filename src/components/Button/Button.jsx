import { NavLink } from "react-router-dom";

export function ButtLink({ text, to }) {
  const clases =
    "inline-block rounded-sm bg-orange-400 hover:bg-orange-600 text-white px-4 py-2";
  return (
    <NavLink to={to} className={clases}>
      {text}
    </NavLink>
  );
}

export function Button({ text }) {
  return (
    <button
      type="submit"
      className="inline-block rounded-sm bg-orange-400 hover:bg-orange-600 text-white px-5 py-2"
    >
      {text}
    </button>
  );
}

