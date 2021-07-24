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
              <div className="tableHeader">
                <input type="checkbox" />
                <a>Nome</a>
                <a>Ultima atualização</a>                
              </div>
              <ul>
                <li>
                  <input type="checkbox" />
                  <a>
                    <p>Nome  do item</p>
                    <p>21 de jul, 18:53</p>
                  </a>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </DashboardContentBox>
    </>
  );
}
