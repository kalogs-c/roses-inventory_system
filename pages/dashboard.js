import styled from "styled-components";

const ContentBox = styled.ma

export default function Dashboard() {
  return (
    <div>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="#" className="active">
                <i className="fas fa-columns"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-eye"></i>
                <span>Ver produtos</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-file-signature"></i>
                <span>Cadastrar produto</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-barcode"></i>
                <span>Ver vendas</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user-plus"></i>
                <span>Adicionar usuario</span>
              </a>
            </li>
          </ul>
        </div>

        <a href="#" className="sign-out-btn">
          <i className="fas fa-sign-out-alt"></i>
          <p>Sair</p>
        </a>
      </div>

      <div class="main-content">
        <header>
          <h2>
            <label for="nav-toggle">
              <i class="fas fa-bars"></i>
            </label>
          </h2>

          <div class="user-wrapper">
            <h4>Carlos</h4>
            <div>
              <i class="far fa-user"></i>
            </div>
          </div>
        </header>
      </div>
      <main>
        <div class="cards">
          <div class="card-single">
            <div>
              <h1>28</h1>
              <span>Produtos</span>
            </div>
            <div>
              <i class="far fa-gem"></i>
            </div>
          </div>
          <div class="card-single">
            <div>
              <h1>21</h1>
              <span>Vendas</span>
            </div>
            <div>
              <i class="fas fa-cash-register"></i>
            </div>
          </div>
          <div class="card-single">
            <div>
              <h1>R$4500</h1>
              <span>Entrada</span>
            </div>
            <div>
              <i class="fas fa-piggy-bank"></i>
            </div>
          </div>
          <div class="card-single">
            <div>
              <h1>R$3700000</h1>
              <span>Saldo</span>
            </div>
            <div>
              <i class="fab fa-google-wallet"></i>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
