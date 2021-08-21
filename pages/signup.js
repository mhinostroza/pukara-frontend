import React, { useState } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Signup = () => {
  const steps = [
    { name: 'Registro / Paso 1', href: '#', status: 'current' },
    { name: 'Paso 2', href: '#', status: 'complete' },
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
    fetch(
      'https://j67alg058k.execute-api.us-east-1.amazonaws.com/dev/pukara/v1/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          cellphone,
          document,
          verifier,
        }),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        if (data && data.error) {
          setSignupError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, { expires: 2 });
          Router.push('/verification');
        }
      });
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
            <h2 className="mt-6 text-4xl font-bold text-gray-900">
              Registrate
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
                    Completa los siguientes datos
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="document"
                    className="block text-sm font-medium text-gray-700"
                  >
                    DNI o Carnet de Extranjería
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

                <div className="rounded-md bg-blue-50 p-4">
                  <div className="flex">
                    <div className="ml-3 flex-1 md:flex md:justify-between">
                      <p className="text-sm font-light text-blue-800">
                        Por tu seguridad el sistema se bloqueará al tercer
                        intento fallido y deberás ponerte en contacto con
                        nosotros para continuar.
                      </p>
                      <p className="mt-3 text-sm md:mt-0 md:ml-6">
                        <a
                          href="#"
                          className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                        >
                          Código <span aria-hidden="true">&rarr;</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="verifier"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Dígito verificador del documento
                  </label>
                  <input
                    required
                    type="text"
                    name="verifier"
                    id="verifier"
                    autoComplete="verifier"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={verifier}
                    onChange={(e) => setVerifier(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo electrónico
                  </label>
                  <input
                    required
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="cellphone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Celular
                  </label>
                  <input
                    required
                    type="text"
                    name="cellphone"
                    id="cellphone"
                    autoComplete="cellphone"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={cellphone}
                    onChange={(e) => setCellphone(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
