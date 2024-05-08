"use client";
import React, { useEffect, useState } from "react";

import { useMutation, gql } from "@apollo/client";
import { User } from "./type";
import { useFetch } from "./dataUser";
import { GET_USERS } from "./dataUser";
import { set } from "mongoose";
import { Login } from "./login";

const CREATE_USER = gql`
  mutation CreateUser($body: UserInput) {
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
  const [showRegister, setShowRegister] = useState<boolean>(true);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(true);

  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [GET_USERS],
  });

  const { data } = useFetch();
  useEffect(() => {
    if (data) {
      setUsers([...data.users]);
    }
  }, [data]);
  console.log("users", users);

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
    setShowRegister(false);
    setShowLogin(true);
    setShowAlert(false);
    e.currentTarget.reset();
  };

  return (
    <div>
      <div className=" flex items-center justify-center bg-stone-800">
        {showAlert && (
          <div className="mr-20">
            <button
              className=" text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              onClick={() => {
                setShowRegister(false);
                setShowLogin(true);
                setShowAlert(false);
              }}
            >
              I have already account
            </button>
          </div>
        )}

        {showRegister && (
          <div className="min-h-screen flex items-center justify-center bg-stone-800">
            <div className="max-w-md w-full p-6 bg-stone-500	 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Register
              </h2>
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
        )}
      </div>

      {showLogin && <Login />}
    </div>
  );
}
