import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "FirstDB",
  password: "ullas123",
  port: 5432,
});

db.connect();


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// let countries = []

// db.query("SELECT country_code FROM visited_countries", (err, res) => {
//   if (err) {
//     console.error("Error executing query", err.stack);
//   } else {
//     //countries = res.rows;
//     //console.log(countries[0].country_code);
//     countries = res.rows.map(row => row.country_code); // Extract country_code from each row
//     //console.log(countries);
//   }
//   db.end();
// });


app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");
    const countries = result.rows.map(row => row.country_code); // Extract country_code strings
    res.render("index.ejs", { countries: countries, total: countries.length });
  } catch (err) {
    console.error("Error fetching countries:", err.stack);
    res.status(500).send("An error occurred while fetching data.");
  }
});

app.post("/add", async (req, res) => {
  try {
    // Fetch the country code for the input country name
    const countryCode = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [req.body.country]);

    if (countryCode.rows.length === 0) {
      return res.status(400).send("Country not found.");
    }

    const code = countryCode.rows[0].country_code;

    // Insert into visited_countries
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [code]);

    res.redirect("/"); // Redirect to fetch updated data
  } catch (err) {
    console.error("Error adding country:", err.stack);
    res.status(500).send("An error occurred while adding the country.");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
