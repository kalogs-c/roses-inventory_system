import nookies from "nookies";
import jwt from "jsonwebtoken";


export async function getServerSideProps(ctx) {
  const cookie = nookies.get(ctx);
  const decodedCookie = jwt.decode(cookie.USER_TOKEN);
  
  const { isAuthorized } = await fetch(
    "http://localhost:3000/api/authentication",
    {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        Authorization: cookie.USER_TOKEN,
      },
    }
    ).then((res) => res.json());
    
    if (!isAuthorized) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    
    const { name, lastName } = decodedCookie;
    const userName = name + " " + lastName;
    return {
    props: {
      userName,
    },
  };
}
