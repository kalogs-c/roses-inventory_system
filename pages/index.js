//Components
import Main from "./../src/components/Main";

export default function Home() {
  return (
    <Main>
      <img
        className="logo"
        src="https://i.ibb.co/GkDhYF0/logo-nobg.png"
        alt="Balur logo"
      />
      <div className="container">
        <h1>Login</h1>

        <div className="form-div">
          <form action="" method="POST">
            <input
              type="text"
              autocomplete="off"
              placeholder="Usuario"
              name="username"
            />
            <input
              type="password"
              autocomplete="off"
              placeholder="Senha"
              name="password"
            />
            <button>Entrar</button>
          </form>
        </div>
      </div>
      <img className="wave" src="https://svgshare.com/i/ZHC.svg" title="" />
    </Main>
  );
}
