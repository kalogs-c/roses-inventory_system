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
          <form >
            <input
              type="text"
              autoComplete="off"
              placeholder="Usuario"
              name="username"
            />
            <input
              type="password"
              autoComplete="off"
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

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
