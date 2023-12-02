const http = require("http");
const { Server } = require("socket.io");
const originalData = require("./data/db.original.json");

const SECOND = 1 * 1000;

let db = originalData;
const httpServer = http.createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

function getItems() {
  const data = db.filter(
    (item) =>
      !item.sold && item.time > 0 && Date.parse(item.startAt) <= new Date(),
  );

  return data;
}

function getSoldItems() {
  const data = db.filter((item) => item.sold);

  return data;
}

function run() {
  setInterval(() => {
    db = db
      .filter((item) => !item.sold)
      .map((item) => {
        if (item.time === 1) {
          item.sold = true;
        }

        item.time -= 1;

        return item;
      });

    io.emit("items", getItems());
    io.emit("winners", getSoldItems());

    items = getItems();
  }, SECOND);
}

run();

io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.on("add_item", (data) => {
    db.push({
      id: db.length + 1,
      name: data[0],
      description: data[1],
      image: data[2],
      value: 0,
      time: 60,
      sold: false,
      startAt: data[3],
      bidders: [],
    });
  });

  socket.on("bid", (data) => {
    db = db.map((item) => {
      if (item.id === data[0]) {
        item.time = 60;
        item.value += 0.01;
        item.bidders.push(data[1]);
      }

      return item;
    });
  });

  socket.on("disconnect", () => {
    console.log(`Disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  console.log(`Socket.io server is running on port ${PORT}`);
});
