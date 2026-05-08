import UserEditingForm from "@/app/components/UserEditingForm";
import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import React from "react";

const UserEditPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);

  const updateUserWrapper = async (formData) => {
    "use server";
    return updateUser(userId, formData);
  };

  return (
    <section className="my-10 container mx-auto px-5">
      <div>
        <h2 className="mb-10 text-3xl font-semibold text-center">
          User Editing Page
        </h2>

        <div>
          <UserEditingForm user={user} updateUserWrapper={updateUserWrapper} />
        </div>
      </div>
    </section>
  );
};

export default UserEditPage;
