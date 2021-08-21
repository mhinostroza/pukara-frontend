/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "./layout";

const Schedule = ({ user }) => {
  const slides = [
    {
      icon: "syringe",
      title: "1ra. Vacunación",
      subtitle: "Recibida",
      complete: true,
    },
    {
      icon: "syringe",
      title: "2da. Vacunación",
      subtitle: "Viernes 20/10",
      complete: false,
    },
    {
      icon: "syringe",
      title: "3ra. Vacunación",
      subtitle: "Próximamente",
      complete: false,
    },
  ];

  const benefits = [
    {
      icon: "help",
      title: "¿Para que sirve?",
      description:
        "Para el libre ingreso a los centros comerciales, agencias de viaje y empresas en general, ya que la nueva normativa de salud exige la debida identificación del certificado de vacunación de los pacientes.",
    },
    {
      icon: "mobile-app",
      title: "Viajas seguro",
      description:
        "Viajes de ida y vuelta en taxi, gratis. Desde tu domicilio h...",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              <Link href="/">
                <a className="font-medium text-indigo-600 hover:text-indigo-500 flex flex-row items-center">
                  <img className="w-6 h-6 mr-4" src="/arrow-left.svg" alt="" />
                  Cronograma de vacunación
                </a>
              </Link>
            </h2>
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            // className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <div className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                  <div className="flex-1 flex flex-col p-8">
                    <img
                      className="h-10 w-10 flex-shrink-0 mx-auto rounded-full"
                      src={`/${slide.icon}.svg`}
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      {slide.title}
                    </h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                      <dt className="sr-only">Estado</dt>
                      <dd className="text-gray-500 text-sm">
                        {slide.subtitle}
                      </dd>
                    </dl>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="grid grid-cols-1 gap-4">
            <div className=" rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
              <div>
                <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
                  Beneficios
                </h2>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.icon}
                    className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`/${benefit.icon}.svg`}
                        alt={benefit.title}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">
                          {benefit.title}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {benefit.description}
                        </p>
                      </a>
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

export default Schedule;
