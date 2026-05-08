"use client";
import React from "react";
import { Button, Input, Label, TextField } from "@heroui/react";

const UserEditingForm = ({ user, updateUserWrapper }) => {
  return (
    <div className="max-w-sm mx-auto">
      <form action={updateUserWrapper} className="flex flex-col gap-4">
        <TextField
          className="w-full"
          name="name"
          type="text"
          defaultValue={user?.name}
        >
          <Label>Name</Label>
          <Input placeholder="Enter user name" />
        </TextField>

        <TextField
          className="w-full"
          name="email"
          type="email"
          defaultValue={user?.email}
        >
          <Label>Email</Label>
          <Input placeholder="Enter user email" />
        </TextField>

        <TextField
          className="w-full"
          name="role"
          type="text"
          defaultValue={user?.role}
        >
          <Label>Role</Label>
          <Input placeholder="Enter user role" />
        </TextField>

        <div className="mt-3 space-x-5">
          <Button slot="close" variant="secondary">
            Cancel
          </Button>

          <Button slot="close" type="submit">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserEditingForm;
