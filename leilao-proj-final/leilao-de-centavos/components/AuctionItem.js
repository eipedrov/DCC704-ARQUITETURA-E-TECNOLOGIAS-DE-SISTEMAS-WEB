export default function AuctionItem(props) {
  const bidData = [props.id, props.user];

  return (
    <li key={props.id} className="max-w-md">
      <div className="bg-indigo-50 border border-indigo-400 flex flex-col gap-3 grow items-center p-10 rounded-xl shadow-lg">
        <h2 className="font-extrabold text-indigo-700 text-2xl">
          {props.name}
        </h2>
        <div className="p-5">
          <img
            width="300"
            height="300"
            className="aspect-square object-center object-cover rounded-lg"
            src={props.image}
            alt={props.name}
          />
        </div>
        <hr className="border-b border-indigo-400 h-px w-full" />
        <div className="flex flex-col gap-10 items-center">
          <p className="h-10 text-justify text-last-center text-sm">
            {props.description}
          </p>
          <span className="font-bold text-center">
            {props.value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span className="font-bold text-center">
            Last Bidder: {props.last_bidder}
          </span>
        </div>
      </div>
      {props.logged ? (
        <button
          className="bg-indigo-900 font-extrabold ease-in-out hover:scale-105 mt-5 text-center text-indigo-50 transition-all p-3 rounded-xl shadow-lg w-full"
          onClick={() => {
            if (props.lances > 0) {
              props.socket.emit("bid", bidData);
              props.lanceFunction();
            }
          }}
        >
          Faça seu lance (
          <span className="text-xl text-red-400">{props.time_left}s</span>)
        </button>
      ) : (
        ""
      )}
    </li>
  );
}
