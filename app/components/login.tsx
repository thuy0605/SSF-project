"use client";
import React, { useEffect, useState } from "react";
import { User } from "./type";
import { useMutation, gql } from "@apollo/client";
import { Chat } from "./chat";
import { useFetch } from "./dataUser";

const LOGIN_USER = gql`
  mutation LoginUser($credentials: Credentials) {
    loginUser(credentials: $credentials) {
      message
      user {
        id
        password
        username
      }
    }
  }
`;

export function Login() {
  const [currentUser, setCurrentUser] = useState<User>({
    id: "",
    username: "",
    password: "",
  });
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [showChat, setShowChat] = useState<boolean>(false);
  const [loginUser] = useMutation(LOGIN_USER);

  const { data } = useFetch();
  useEffect(() => {
    if (data) {
      console.log("data of user", data);
      console.log("currentUserid", currentUser.id);
    }
  }, [data, currentUser]);
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    console.log("username", username);
    console.log("password", password);
    try {
      const response = await loginUser({
        variables: {
          credentials: {
            username,
            password,
          },
        },
      });
      console.log("response", response);
      setCurrentUser({
        id: response.data.loginUser.user.id,
        username: response.data.loginUser.user.username,
        password: response.data.loginUser.user.password,
      });
    } catch (error) {
      console.log("error", error);
    }
    setShowLogin(false);
    setShowChat(true);
    // e.currentTarget.reset();
  };
  return (
    <div>
      <div>
        {showLogin && (
          <div className="min-h-screen flex items-center justify-center bg-stone-800">
            <div className="max-w-md w-full p-6 bg-stone-500 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
              <form className="space-y-4" onSubmit={handleLogin}>
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
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div>{showChat && <Chat userID={currentUser.id} />}</div>
    </div>
  );
}
