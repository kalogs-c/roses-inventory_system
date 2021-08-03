import { useState, useEffect } from "react";

import nookies from "nookies";
import jwt from "jsonwebtoken";

// Components
import { Sidebar } from "../../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "../../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "../../../src/components/dashboard/DashboardContentBox";
import ContentHeader from "../../../src/components/dashboard/ContentHeader";
import { TableContent } from "../../../src/components/dashboard/Table/TableContent";
import { TableHeader } from "../../../src/components/dashboard/Table/TableHeader";
import { Li } from "../../../src/components/dashboard/Table/TableLI";
import LoadingScreen from "../../../src/components/LoadingScreen";

export default function viewUsers(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../api/users/getUsersList").then(async (response) => {
      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <DashboardContentBox>
        <Sidebar />

        <div className="main-content">
          <DashboardHeader userName={props.userName} />
          <main>
            <>
              <ContentHeader
                title="Usuarios"
                reference="users"
                registers={users.length}
              />
              {loading === true ? (
                <LoadingScreen />
              ) : (
                <div style={{ padding: 20 }}>
                  <TableHeader />
                  <TableContent>
                    {users.map((item) => {
                      return (
                        <Li key={item._id}>
                          <a href={`users/${item._id}`}>
                            <p>{`${item.name} ${item.lastName}`}</p>
                            <p>{item.created}</p>
                          </a>
                        </Li>
                      );
                    })}
                  </TableContent>
                </div>
              )}
            </>
          </main>
        </div>
      </DashboardContentBox>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const cookie = nookies.get(ctx);
  const decodedCookie = jwt.decode(cookie.USER_TOKEN);

  const { isAuthorized } = await fetch(
    "https://balur.vercel.app/api/authentication",
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
