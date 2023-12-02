"use client";
import AuctionItem from "@/components/AuctionItem";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Home() {
  const [socket] = useState(() => io("http://localhost:3001"));
  const [user, setUser] = useState("");
  const [items, setItems] = useState([]);
  const [lances, setLances] = useState(15);
  const [loggedIn, setLoggedIn] = useState(false);

  function addItem(event) {
    event.preventDefault();

    socket.emit("add_item", [
      event.target.name.value,
      event.target.description.value,
      event.target.image.value,
      event.target.startAt.value,
    ]);

    event.target.name.value = "";
    event.target.description.value = "";
    event.target.image.value = "";
    event.target.startAt.value = "";
  }

  function subtractLance() {
    setLances(lances - 1);
  }

  function changeUser(event) {
    if (event.keyCode === 13) {
      setUser(event.target.value);
    }
  }

  useEffect(() => {
    socket.on("items", (data) => {
      setItems(data);
    });

    return () => {
      socket.off("items");
    };
  }, [socket]);

  useEffect(() => {
    if (user !== "") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  return (
    <main className="bg-gradient-to-br from-indigo-300 via-violet-300 to-indigo-300 delay-100 duration-300 ease-in-out flex flex-col h-full items-center justify-center min-h-screen p-10 text-gray-800 transition-all w-screen">
      <header className="text-center">
        <h1 className="font-extrabold text-3xl text-indigo-700">
          Leilão de Centavos
        </h1>
        <span>
          Faça lances de 1 centavo, e se o tempo acabar no seu lance, o item é
          seu!!!
        </span>
      </header>

      {loggedIn && user === "admin" ? (
        <div className="bg-indigo-700 fixed flex font-3xl font-extrabold gap-3 p-3 left-3 rounded-xl text-indigo-50 top-3">
          <form
            method="POST"
            action="/api/login"
            className="flex flex-col justify-between"
            onSubmit={addItem}
          >
            <h2 className="text-2xl text-center">Adicionar Item Novo</h2>
            <div className="flex flex-col gap-10 p-3 rounded-xl text-indigo-700 text-left">
              <input id="user" name="user" type="hidden" value={user}></input>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="border border-indigo-400 pl-3 rounded-md"
              ></input>
              <input
                id="description"
                name="description"
                type="text"
                placeholder="Description"
                className="border border-indigo-400 pl-3 rounded-md"
              ></input>
              <input
                id="image"
                name="image"
                type="text"
                placeholder="Image Link"
                className="border border-indigo-400 pl-3 rounded-md"
              ></input>
              <input
                id="startAt"
                name="startAt"
                type="date"
                placeholder="Date"
                className="border border-indigo-400 pl-3 rounded-md"
              ></input>
            </div>
            <button
              className="bg-indigo-900 font-extrabold ease-in-out hover:scale-105 mt-3 text-center text-indigo-50 transition-all p-3 rounded-xl shadow-lg w-full"
              type="submit"
            >
              Criar
            </button>
          </form>
        </div>
      ) : (
        ""
      )}

      <div className="bg-indigo-700 fixed flex font-3xl font-extrabold gap-3 p-3 right-3 rounded-xl text-indigo-50 top-3">
        {!loggedIn ? (
          <span>Enter your username to login: </span>
        ) : (
          <span className="border-r border-indigo-50 pr-3">
            Logged in as {user}
          </span>
        )}
        {!loggedIn ? (
          <div className="border-r border-indigo-50 pr-3 text-indigo-700">
            <input onKeyDown={changeUser}></input>
          </div>
        ) : (
          ""
        )}
        {loggedIn ? (
          <button
            className="border-r border-indigo-50 pr-3"
            onClick={() => {
              setUser("");
            }}
          >
            Logout
          </button>
        ) : (
          ""
        )}
        <span className="border-r border-indigo-50 pr-3">{lances} lances</span>
        <button onClick={() => setLances(lances + 5)}>🔥 +5 Lances 🔥</button>
      </div>

      <section className="mt-10">
        <ul className="gap-20 grid grid-cols-3 grow">
          {items.map((item) => {
            return (
              <AuctionItem
                socket={socket}
                id={item.id}
                key={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                value={item.value}
                time_left={item.time}
                last_bidder={
                  item.bidders ? item.bidders[item.bidders.length - 1] : ""
                }
                lances={lances}
                lanceFunction={subtractLance}
                logged={loggedIn}
                user={user}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
