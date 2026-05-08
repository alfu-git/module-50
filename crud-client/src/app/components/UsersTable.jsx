"use client";
import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";

const UsersTable = ({ users, deleteUser }) => {
  const handleUserDelete = async (userId) => {
    await deleteUser(userId);
  };

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-150">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Email</Table.Column>
          </Table.Header>

          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user._id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>

                <Table.Cell className={"flex flex-wrap gap-4"}>
                  <Link href={`/users/${user._id}`}>
                    <Button variant="outline">Details</Button>
                  </Link>

                  <Link href={`/users/${user._id}/edit`}>
                    <Button>Edit</Button>
                  </Link>

                  <AlertDialog>
                    <Button variant="danger">Delete</Button>
                    <AlertDialog.Backdrop>
                      <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                          <AlertDialog.CloseTrigger />
                          <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                              Delete project permanently?
                            </AlertDialog.Heading>
                          </AlertDialog.Header>

                          <AlertDialog.Body>
                            <p>
                              This will permanently delete{" "}
                              <strong>My Awesome Project</strong> and all of its
                              data. This action cannot be undone.
                            </p>
                          </AlertDialog.Body>

                          <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                              Cancel
                            </Button>

                            <Button
                              onClick={() => handleUserDelete(user._id)}
                              slot="close"
                              variant="danger"
                            >
                              Confirm Delete
                            </Button>
                          </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                      </AlertDialog.Container>
                    </AlertDialog.Backdrop>
                  </AlertDialog>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default UsersTable;
