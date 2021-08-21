/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from "react";
import Router from "next/router";
// import cookie from 'js-cookie';
import {
  LockClosedIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { Listbox, Transition } from "@headlessui/react";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Login = () => {
  const [loginError, setLoginError] = useState("");

  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //call api
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  
        document,
        password,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set("token", data.token, { expires: 2 });
          Router.push("/");
        }
      });
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 flex justify-center text-3xl font-extrabold text-gray-900">
            <img className="h-100 w-204" src="/logo.svg" alt="Pukara" />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className=" rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Login
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="document" className="sr-only">
                    DNI o Carnet de Extranjería
                  </label>
                  <input
                    id="document"
                    name="document"
                    type="text"
                    autoComplete="document"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="DNI o Carnet de Extranjería"
                    onChange={(e) => setDocument(e.target.value)}
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        "Ingresa tu DNI o Carnet de Extranjería"
                      )
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Ingresa tu contraseña")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Ingresar
                </button>

                <div className="text-sm w-full flex justify-center py-4">
                  <Link href="/signup">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                      Crear cuenta
                    </a>
                  </Link>
                </div>
              </div>

              {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
