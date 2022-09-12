import express from "express";
const app = express();
app.get("/", (request, response) => {
    return response.json({ msg: "OK" });
});
app.listen(3333, () => console.log("Server started at port 3333...."));
