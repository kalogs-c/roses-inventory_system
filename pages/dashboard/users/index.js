import { useState, useEffect } from "react";

import nookies from "nookies";
import jwt from "jsonwebtoken";

// Components
import { Sidebar } from "../../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "../../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "../../../src/components/dashboard/DashboardContentBox";
import ContentHeader from "../../../src/components/dashboard/ContentHeader";
import Table from "../../../src/components/dashboard/Table";

export default function viewUsers(props) {
  const [users, setUsers] = useState([]);

  fetch("http://localhost:3000/api/users/getUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  }).then(async (response) => {
    setUsers(await response.json());
  });

  return (
    <>
      <DashboardContentBox>
        <Sidebar />

        <div className="main-content">
          <DashboardHeader userName={props.userName} />
          <main>
            <ContentHeader title="Usuarios" reference="users" />
            <Table items={users} />
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
