import Head from "next/head";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import cookie from "js-cookie";

import Login from "./login";
import Home from "./home";

function Index() {
  let loggedIn = false;

  const { data, revalidate } = useSWR(
    "https://j67alg058k.execute-api.us-east-1.amazonaws.com/dev/pukara/v1/me",
    async function (args) {
      const res = await fetch(args, {
        headers: { "access_token": cookie.get("token") },
      });
      return res.json();
    }
  );

  // if (!data) return <h1>Loading...</h1>;

     console.log(data);
  if (data) loggedIn = true;

  return (
    <>
      <Head>
        <title>Pukara</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {loggedIn && (
        <>
          {/* {data.email} */}
          <Home user={{ ...data.user }}></Home>

          {/* <button
            onClick={() => {
              cookie.remove("token");
              revalidate();
            }}
          >
            Logout
          </button> */}
        </>
      )}

      {!loggedIn && <Login></Login>}
    </>
  );
}

export default Index;
