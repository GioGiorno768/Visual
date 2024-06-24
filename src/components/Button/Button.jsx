import { NavLink } from "react-router-dom";

export default function Button({ text }) {
  return (
    <a
      href=""
      className="inline-block rounded-sm bg-orange-400 hover:bg-orange-600 text-white px-4 py-2"
    >
      {text}
    </a>
  );
}

export function ButtLink({ text, to }) {
  return (
    <NavLink
      to={to}
      className="inline-block rounded-sm bg-orange-400 hover:bg-orange-600 text-white px-4 py-2"
    >
      {text}
    </NavLink>
  );
}
