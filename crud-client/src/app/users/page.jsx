import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "../components/UsersTable";
import { createUser, deleteUser } from "../lib/actions";
import AddUserModal from "../components/AddUserModal";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <section className="my-10 container mx-auto px-5">
      <div>
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Users Management</h2>

          <AddUserModal createUser={createUser} />
        </div>

        <div>
          <UsersTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
