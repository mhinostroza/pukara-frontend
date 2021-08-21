/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import Layout from "./layout";

const Home = ({ user }) => {
  const generalInfo = [
    {
      icon: "map-marker",
      title: "Centros de vacunación más cercanos",
      link: "location-nearby",
    },
    {
      icon: "map-search",
      title: "Mapa de zonas vacunadas",
      link: "immunized-area",
    },
    { icon: "syringe", title: "Vacunaton", link: "vacunaton" },
    {
      icon: "survey",
      title: "Encuesta de satisfacción",
      link: "satisfaction-survey",
    },
    { icon: "faqs", title: "Preguntas frecuentes", link: "faqs" },
  ];

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Hola, {user.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="relative rounded-lg border border-gray-300 bg-white px-5 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <div className="flex-shrink-0">
                <div className="relative rounded-lg border border-gray-300 bg-white px-3 py-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="flex-shrink-0 text-center">
                    <span>1</span>
                    <br />
                    <span>RECIBIDA</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/schedule">
                  <a className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      Cronograma de vacunación
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      Conoce tu lugar de vacunación
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
              <div>
                <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
                  Información general
                </h2>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {generalInfo.map((info) => (
                  <div
                    key={info.icon}
                    className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`/${info.icon}.svg`}
                        alt={info.title}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href="/schedule">
                        <a className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          <p className="text-sm font-medium text-gray-900">
                            {info.title}
                          </p>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
