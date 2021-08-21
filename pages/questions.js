import React, { useState } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/solid';

const Signup = () => {
  const [signupError, setSignupError] = useState('');
  const steps = [
    { name: 'Paso 1', href: '#', status: 'complete' },
    { name: 'Paso 2', href: '#', status: 'complete' },
    { name: 'Paso 3', href: '#', status: 'current' },
  ];
  const [document, setDocument] = useState('');
  const [verifier, setVerifier] = useState('');
  //const [firstname, setFirstname] = useState('');
  //const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    Router.push('/');
  }
  return (
    <div className="min-h-screen bg-white flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <nav
              className="flex items-center justify-center"
              aria-label="Progress"
            >
              <p className="text-sm font-medium">
                Step {steps.findIndex((step) => step.status === 'current') + 1}{' '}
                of {steps.length}
              </p>
              <ol role="list" className="ml-8 flex items-center space-x-5">
                {steps.map((step) => (
                  <li key={step.name}>
                    {step.status === 'complete' ? (
                      <a
                        href={step.href}
                        className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900"
                      >
                        <span className="sr-only">{step.name}</span>
                      </a>
                    ) : step.status === 'current' ? (
                      <a
                        href={step.href}
                        className="relative flex items-center justify-center"
                        aria-current="step"
                      >
                        <span
                          className="absolute w-5 h-5 p-px flex"
                          aria-hidden="true"
                        >
                          <span className="w-full h-full rounded-full bg-indigo-200" />
                        </span>
                        <span
                          className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full"
                          aria-hidden="true"
                        />
                        <span className="sr-only">{step.name}</span>
                      </a>
                    ) : (
                      <a
                        href={step.href}
                        className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
                      >
                        <span className="sr-only">{step.name}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Preguntas secretas
            </h2>
          </div>

          <div className="mt-8">
            <div>
              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Responda las siguientes preguntas
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <fieldset>
                  <div>
                    <p className="text-sm text-gray-500">
                      ¿Usted cuenta con RUC?{' '}
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="push-everything"
                        name="a1"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="push-everything"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Si
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="push-email"
                        name="a1"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="push-email"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <div>
                    <p className="text-sm text-gray-500">
                      En los últimos 12 meses, ¿Tiene o ha tenido una tarjeta de
                      crédito como iitular con caja cusco?
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="push-everything"
                        name="b1"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="push-everything"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Si
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="push-email"
                        name="b1"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="push-email"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <div>
                    <p className="text-sm text-gray-500">
                      ¿Tuvo un crédito hipotecario como titular con financiera
                      Eefectiva hasta Junio del 2021?{' '}
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="push-everything"
                        name="c1"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="push-everything"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Si
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="push-email"
                        name="c1"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="push-email"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
                <br />
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Continuar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
