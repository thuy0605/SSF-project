"use client";
import React, { useState } from "react";

import { Chat } from "./chat";
import { useMutation, gql } from "@apollo/client";
import { User } from "./type";
import { useFetch } from "./dataUser";

const CREATE_USER = gql`
  mutation Mutation($body: UserInput) {
    createUser(body: $body) {
      message
      user {
        id
        password
        username
      }
    }
  }
`;

export function Register() {
  const [users, setUsers] = useState<User[]>([]);
  const [createUser] = useMutation(CREATE_USER);

  const { data } = useFetch();

  const registerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    try {
      createUser({
        variables: {
          body: {
            username,
            password,
          },
        },
      });
    } catch (error) {
      console.log("error", error);
    }
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800">
      <div className="max-w-md w-full p-6 bg-stone-500	 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form className="space-y-4" onSubmit={registerSubmit}>
          <div>
            <label className="block text-gray-800">Username</label>
            <input
              id="username"
              type="text"
              className="form-input mt-1 block bg-stone-300	border border-gray-500 rounded-md focus:outline-none focus:border-slate-900 text-black w-full"
              placeholder="@username"
            />
          </div>
          <div>
            <label className="block text-gray-800">Password</label>
            <input
              id="password"
              type="password"
              className="form-input mt-1 block bg-stone-300	border border-gray-500 rounded-md focus:outline-none focus:border-slate-900 text-black w-full"
              placeholder="@password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
