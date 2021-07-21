// Components
import { Sidebar } from "./../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "./../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "./../../src/components/dashboard/DashboardContentBox";

export default function viewUsers() {
  return (
    <>
      <DashboardContentBox>
        <Sidebar />

        <div className="main-content">
          <DashboardHeader name="Carlos Henrique" />
          <main>
            
          </main>
        </div>
      </DashboardContentBox>
    </>
  );
}
