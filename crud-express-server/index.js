const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://module-50-user:BUohT5gKi8TO1BQw@alfu-cluster7.go9kvu6.mongodb.net/?appName=alfu-cluster7`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await client.connect();

    const db = client.db("module-50-crud-db");
    const usersCollection = db.collection("users");

    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/users/:userId", async (req, res) => {
      const userId = req.params.userId;
      const query = {
        _id: new ObjectId(userId),
      };
      const user = await usersCollection.findOne(query);
      res.send(user);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World! ");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
