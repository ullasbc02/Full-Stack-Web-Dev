import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "ullas123",
  port: 5432,
});

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {

  console.log(req.body.username);
  try{
  
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [req.body.username]);
    
    if(checkResult.rows.length > 0){
      res.send("User already exists");
      return;
    }else{
      const result = await db.query("INSERT INTO users (email,password) VALUES ($1, $2)", [req.body.username, req.body.password]);
      res.render("secrets.ejs");
    }

  }catch(err){
    console.log(err);
  }
  
  

});

app.post("/login", async (req, res) => {

  try{
  
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [req.body.username]);
    
    if(checkResult.rows.length > 0){
      if(checkResult.rows[0].password === req.body.password){
        res.render("secrets.ejs");
      }
      else{
        res.send("Incorrect password");
        return;
      }
    }else{
      res.send("User does not exist");
      // res.redirect("/register");
    }

  }catch(err){
    console.log(err);
  }


});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
