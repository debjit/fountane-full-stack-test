"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <header className=" shadow bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 justify-between flex">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          {user ? (
            <button
              className="text-white home-launch-app-button-blank py-2 px-5"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          ) : (
            <Link
              className="home-launch-app-button-blank py-2 px-5"
              href={"/login"}
            >
              {" "}
              Sign in{" "}
            </Link>
          )}
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-slate-600 text-white">
          {!user && (
            <div>
              You are not logged in. please go to{" "}
              <Link className="underline" href={"/login"}>
                {" "}
                Sign in
              </Link>{" "}
              page.
            </div>
          )}
          {user ? (
            <div>
              <p>Hello, {user.email}</p>
              <Movies />
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </QueryClientProvider>
  );
}
// If needed we can extract into a components.
function Movies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // Todo: This is a security risk and needed to move inside the .env file and not pass to the client
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWM4NWYwYmQ2Yjg0MDFmZTgxOGFkMzI0Yjc3ZDgzMSIsInN1YiI6IjY1MjM5MDA4YzUwYWQyMDBlYWMzNzk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r5DZW-HE_yxaBMslN9cEfRR9_TptmeQALTKsVvXqHO0",
    },
  };
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          options
        )
        .then((res) => res.data),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="w-full grid grid-cols-4 gap-4 my-8">
      {data.results?.map((item, index) => {
        return (
          <Link href={`https://www.themoviedb.org/movie/${item.id}`}
            className="w-full text-center"
            key={item.id + index}
            target="_blank"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.original_title}
            />
            {/* <p key={item.id + index}>{item.overview}</p> */}
            <p>{item.original_title}</p>
            <p>{item.release_date}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Dashboard;
