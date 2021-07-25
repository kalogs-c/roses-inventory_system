// Component
import { TableHeader } from "./TableHeader";
import { TableContent } from "./TableContent";
import TableLI from "./TableLI";

export default function Table() {
  return (
    <div style={{padding: 20}}>
      <TableHeader />
      <TableContent>
        <TableLI name="Nome" date="28 de jul, 2019" />
      </TableContent>
    </div>
  );
}
