import connection from "../../dataBase/dataBase.js";

export async function getCategory(req, res) {
  try {
    const { rows: result } = await connection.query('SELECT * FROM categories');
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
}

export async function postCategory(req, res) {
  const { name } = req.body;

  try {
    const { rows: result } = await connection.query(
      `
    SELECT id FROM categories WHERE name = $1;`,
      [name]
    );
    if (result.length > 0) {
      return res.sendStatus(409);
    }

 await connection.query(`
INSERT INTO categories(name) VALUES ($1);
`, [name]);
res.sendStatus(201);


  } catch (error) {
    console.log(error.message)
  }
}
