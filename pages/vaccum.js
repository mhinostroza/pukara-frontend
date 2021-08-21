/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import Layout from './layout';
/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import { CheckIcon } from '@heroicons/react/outline';
import { Swiper, SwiperSlide } from 'swiper/react';

/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
} from '@heroicons/react/outline';

const stats = [
  {
    id: 1,
    name: '¿Para que sirve? ',
    stat: 'Para el libre ingreso a los centros comerciales, agencias de viaje y empresas...',
    icon: UsersIcon,
    change: '122',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'Viaja seguro',
    stat: 'Viajes de ida y vuelta en taxi, gratis. Desde tu domicilio hasta el centro de vacunación asig...',
    icon: MailOpenIcon,
    change: '5.4%',
    changeType: 'increase',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
];

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
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <Swiper
              spaceBetween={40}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {people.map((person) => (
                <SwiperSlide
                  key={person.email}
                  className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                >
                  <div className="flex-1 flex flex-col p-8">
                    <dd className="mt-3">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                    </dd>
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      1ra. Vacuna
                    </h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                      <dt className="sr-only">1ra. Vacuna</dt>
                      <dd className="text-gray-500 text-sm">Recibida</dd>
                      <dt className="sr-only">Recibida</dt>
                    </dl>
                  </div>
                  <div className="p-2">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Compartir
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>

        <div>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.id}
                className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
              >
                <dt>
                  <div className="absolute  rounded-md p-3">
                    <item.icon
                      className="h-6 w-6 text-gray-500"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-sm font-medium text-gray-900 truncate">
                    {item.name}
                  </p>
                </dt>
                <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                  <p className="text-sm font-light text-gray-500">
                    {item.stat}
                  </p>

                  <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {' '}
                        Ver más
                        <span className="sr-only"> {item.name} stats</span>
                      </a>
                    </div>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
