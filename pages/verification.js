import React, { useState } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Signup = () => {
  const steps = [
    { name: 'Verificación / Paso 1', href: '#', status: 'complete' },
    { name: 'Paso 2', href: '#', status: 'current' },
    { name: 'Paso 3', href: '#', status: 'complete' },
  ];

  const [signupError, setSignupError] = useState('');

  const [document, setDocument] = useState('');
  const [verifier, setVerifier] = useState('');
  //const [firstname, setFirstname] = useState('');
  //const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    Router.push('/questions');
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
              Código de verificación
            </h2>
          </div>

          <div className="mt-8">
            <div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white text-gray-500">
                  Ingresa el código de 4 dígitos enviados por SMS a tu celular:
                  <span className="font-medium text-indigo-600 hover:text-indigo-500">
                    {' '}
                    992860009{' '}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-6">
              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="document"
                    className="block  text-sm font-medium text-gray-700"
                  >
                    Número de verificación
                  </label>
                  <input
                    required
                    type="text"
                    name="document"
                    id="document"
                    autoComplete="document"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
                  />
                </div>

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
