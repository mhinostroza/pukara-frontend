/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import Layout from './layout';
/* This example requires Tailwind CSS v2.0+ */
import { DotsVerticalIcon } from '@heroicons/react/solid';
/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  ClockIcon,
  PhotographIcon,
  TableIcon,
  ViewBoardsIcon,
  ViewListIcon,
  newspaper,
  NewspaperIcon,
} from '@heroicons/react/outline';

const items = [
  {
    title: 'Reserva la cita de tu vacunación',
    description: 'Reserva ahora',
    icon: ClockIcon,
    background: 'bg-pink-500',
  },
  {
    title: 'Encuesta de satisfacción',
    description: 'Realizar ahora',
    icon: NewspaperIcon,
    background: 'bg-yellow-500',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Home = ({ user }) => {
  const generalInfo = [
    {
      icon: 'map-marker',
      title: 'Centros de vacunación más cercanos',
      link: 'location-nearby',
    },
    {
      icon: 'map-search',
      title: 'Mapa de zonas vacunadas',
      link: 'immunized-area',
    },
    { icon: 'syringe', title: 'Vacunaton', link: 'vacunaton' },
    {
      icon: 'survey',
      title: 'Encuesta de satisfacción',
      link: 'satisfaction-survey',
    },
    { icon: 'faqs', title: 'Preguntas frecuentes', link: 'faqs' },
  ];

  return (
    <Layout>
      <div className="justify-center bg-gray-white py-12 px-4 sm:px-6 lg:px-8">
        <div>
          <ul
            role="list"
            className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={
                  'text-center bg-green-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                }
              >
                1ra. Vacuna
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href={'12312'}
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    Cronograma de vacunación
                  </a>
                  <p className="text-indigo-600 underline">Ver detalle</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <button
                    type="button"
                    className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Open options</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>

          <div className="relative mt-8">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-gray-500">
                <svg
                  className="h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#6B7280"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div>
          <ul
            role="list"
            className="mt-6  border-gray-200 py-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {items.map((item, itemIdx) => (
              <li key={itemIdx} className="flow-root">
                <div className="relative -m-2 p-2 flex items-center space-x-4 rounded-xl hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500">
                  <div
                    className={classNames(
                      item.background,
                      'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg'
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.title}
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 text-indigo-600 underline">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/*   <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Hola, Jhonny
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
                            eqweqweq
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
      
       */}
      </div>
    </Layout>
  );
};

export default Home;
