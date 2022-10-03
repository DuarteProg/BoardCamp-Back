import connection from "../../dataBase/dataBase.js";

export async function getGame(req, res) {

  // const {name} = req.query; 
  // WHERE games.name ILIKE '${name}%'

  const { rows: result } = await connection.query(`
SELECT games.*, categories.name as "categoryName"
 FROM games JOIN categories ON games."categoryId" = categories.id; 
`); // rever essa parte do $1, name. --- URGENTE talvez um if
res.send(result);

}

export async function postGame(req, res) {
   const { name ,image, stockTotal, categoryId, pricePerDay } = req.body;

try {
  const {rows: result} = await connection.query(`
  SELECT id FROM categories WHERE id = $1
  `, [categoryId]);
if(result.length === 0){
  return res.sendStatus(400);
};

const {rows: result1} = await connection.query(`
SELECT id FROM categories WHERE name = $1
`, [name]);
if(result1.length === 0) {
  res.sendStatus(400)
}

await connection.query(`
INSERT INTO games(name, image, "stockTotal", "categoryId", "pricePerDay") 
VALUES ($1, $2, $3, $4, $5)
`, [name ,image, Number(stockTotal), categoryId, Number(pricePerDay)])

res.sendStatus(201)

} catch (error) {
  
}

}
