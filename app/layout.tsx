import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex w-full h-full">
          <div className="flex flex-col justify-center w-1/4 h-screen">
            <div className="flex flex-col justify-center h-1/3 ">
              <h1 className="flex justify-start ml-1 mt-10 font-mono text-5xl text-amber-600">
                Let make
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
                Graphql
              </h1>
            </div>
          </div>
          <div className="bg-stone-900 w-3/4 h-screen">{children}</div>
        </main>
      </body>
    </html>
  );
}
