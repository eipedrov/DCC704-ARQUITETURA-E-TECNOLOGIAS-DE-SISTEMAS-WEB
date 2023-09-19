
'use client'

import { FormEventHandler, useState } from "react"
import { useRouter } from 'next/navigation'
import { useGlobalContext } from "@/context/main";


export default function Home() {

  // const [newName, setNewName] = useState("");
  // const [newEmail, setNewEmail] = useState("");

  const { newName, setNewName, newEmail, setNewEmail } = useGlobalContext()

  const router = useRouter();

  const handleSubmitIniciar: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push("/quiz");
  }

  return (
    <main className="flex flex-col items-center gap-3">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-center mb-2 text-xs font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Teste seus conhecimentos sobre Ciências da Computação!</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Você já se perguntou o quanto sabe sobre o mundo da tecnologia e da computação? Agora é a sua chance de testar seus conhecimentos e mergulhar no fascinante universo da Ciência da Computação com nosso Quiz APP!</p>
      </div>

      <div>
        <form onSubmit={handleSubmitIniciar} className="flex flex-col items-center gap-2">
          <div className= "w-96" >
            <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="newName">Nome: </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-5  dark:bg-gray-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="newName"
                id="newName"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Nome" />
            </div>
          </div>
          <div className= "w-96">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="newName">Email: </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="email"
                name="newEmail"
                id="newEmail"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Email" />
            </div>
          </div>
          <button type="submit" className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full my-5">
            Start Quiz
          </button>
        </form>
      </div>
    </main>
  )
}
