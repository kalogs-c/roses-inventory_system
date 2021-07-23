// Components
import { Sidebar } from "./../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "./../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "./../../src/components/dashboard/DashboardContentBox";
import ContentHeader from './../../src/components/dashboard/ContentHeader';

export default function viewUsers() {
  return (
    <>
      <DashboardContentBox>
        <Sidebar />

        <div className="main-content">
          <DashboardHeader name="Carlos Henrique" />
          <main>
            <ContentHeader title='Usuarios' />

            <div>
              <div>
                <input type="checkbox" />
                
              </div>
            </div>
          </main>
        </div>
      </DashboardContentBox>
    </>
  );
}
