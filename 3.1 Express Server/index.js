import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("C:/Users/User/Documents/Full-Stack/Full-Stack-Web-Dev/3.1 Express Server/dicee.html");
  // res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me at:911-911-911</h1>");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
