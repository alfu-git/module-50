import { getUserById } from "@/app/lib/data";
import React from "react";

const UserDetailsPage = async ({params}) => {

  const {userId} = await params;
  
  const user = await getUserById(userId);
  console.log(user);

  return (
    <section className="my-10 container mx-auto px-5">
      <div>
        <h3 className="text-xl font-bold">User name: {user?.name}</h3>
      </div>
    </section>
  );
};

export default UserDetailsPage;
