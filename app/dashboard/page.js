"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Dashboard() {
  const client = createClientComponentClient();
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUserStatus = async () => {
      //   const { user, session2 } = client.auth.getUser();
      const {
        data: { session },
      } = await client.auth.getSession();
      if (session) {
        // User is logged in
        setUser(session.user);
        // console.log(user);
      } else {
        // User is not logged in
        // console.log('error');
        setUser(null);
      }
    };

    checkUserStatus();
  }, []);

  const handleSignOut = async () => {
    await client.auth.signOut();
    router.push("/login");
  };

  return (
    <>
      <header className=" shadow bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 justify-between flex">
          <h1 className="text-3xl font-bold tracking-tight">
            Dashboard
          </h1>
          {user ? (
            <button className="text-white home-launch-app-button-blank py-2 px-5" onClick={handleSignOut}>
              Sign out
            </button>
          ):(
            <Link className="home-launch-app-button-blank py-2 px-5" href={"/login"}> Sign in </Link>
          )}
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-slate-600 text-white">
          
            {user ? <p>Hello, {user.email}</p> : ""}
            {!user && (
              <div>
                You are not logged in. please go to {" "}
                <Link className="underline" href={"/login"}> Sign in</Link> {" "} page.
              </div>
            )}
          
        </div>
      </main>
    </>
  );
}

export default Dashboard;
