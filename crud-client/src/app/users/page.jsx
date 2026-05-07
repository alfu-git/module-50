import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "../components/UsersTable";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <section className="my-10 container mx-auto px-5">
      <div>
        <h2 className="mb-5 text-3xl font-semibold text-center">
          Users Management
        </h2>

        <div>
          <UsersTable users={users} />
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
