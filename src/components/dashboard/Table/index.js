import { TableHeader } from "./TableHeader";

export default function Table() {
  return (
    <div>
      <TableHeader />
      <ul>
        <li>
          <input type="checkbox" />
          <a>
            <p>Nome do item</p>
            <p>21 de jul, 18:53</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
