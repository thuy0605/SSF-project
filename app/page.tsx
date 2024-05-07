"use client";
import { Chat } from "./components/chat";
import { Register } from "./components/register";
import { ApolloProvider } from "@apollo/client";
import client from "./components/apollo_client";
import { Login } from "./components/login";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className="flex w-full h-full">
        <div className="flex flex-col justify-center w-1/4 h-screen">
          <div className="flex flex-col justify-center h-1/3 ">
            <h1 className="flex justify-start ml-1 mt-10 font-mono text-5xl text-amber-600">
              Let's make
            </h1>
            <h1 className="flex justify-center mt-10 font-mono text-7xl text-amber-400	">
              Chatbox
            </h1>
          </div>
          <div className="flex flex-col justify-center h-1/3 ">
            <h1 className="flex justify-start ml-5 font-mono font-semibold text-4xl text-amber-900">
              with
            </h1>
            <h1 className="flex justify-end mr-5 mt-10 font-mono text-4xl text-amber-300">
              TypeScript
            </h1>
          </div>
          <div className="flex flex-col h-1/3 ">
            <h1 className="ml-16 mt-5 font-mono font-semibold text-5xl text-amber-950">
              and
            </h1>
            <h1 className="ml-1 mt-5 font-mono text-5xl text-amber-600">
              TailwindCSS
            </h1>
          </div>
        </div>
        <div className="bg-stone-900 w-3/4 h-screen">
          <Register />
          {/* <Login /> */}
        </div>
      </main>
    </ApolloProvider>
  );
}
