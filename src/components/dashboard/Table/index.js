// Component
import { TableHeader } from "./TableHeader";
import { TableContent } from "./TableContent";
import TableLI from "./TableLI";

export default function Table({ items }) {
  return (
    <div style={{ padding: 20 }}>
      <TableHeader />
      <TableContent>
        {items.map((item) => {
          return (
            <TableLI key={item.__id} name={item.name} date={item.created} />
          );
        })}
      </TableContent>
    </div>
  );
}
