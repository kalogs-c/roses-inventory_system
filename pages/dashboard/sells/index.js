// Components
import { Sidebar } from "../../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "../../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "../../../src/components/dashboard/DashboardContentBox";
import ContentHeader from '../../../src/components/dashboard/ContentHeader';
import Table from '../../../src/components/dashboard/Table'

export default function seeSells() {
  return (
    <>
      <DashboardContentBox>
        <Sidebar />

        <div className="main-content">
          <DashboardHeader name="Carlos Henrique" />
          <main>
            <ContentHeader title='Vendas' reference="users" />
            <Table />
          </main>
        </div>
      </DashboardContentBox>
    </>
  );
}