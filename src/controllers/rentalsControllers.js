import connection from "../../dataBase/dataBase.js";

export async function getRental(req, res) {
  const { customerId, gameId } = req.query;
  

  try {
    if (customerId) {
      return await connection.query(`
          SELECT id FROM rentals WHERE customerId ILIKE '${customerId}%'  
          `);
    }

    if (gameId) {
      return await connection.query(`
          SELECT id FROM rentals WHERE gameId ILIKE '${gameId}%'  
          `);
    }

    const { rows: result } = await connection.query(`
      SELECT rentals.*, customers.name AS customer,
      games.name, categories.* FROM rentals 
      JOIN customers ON customers.id = rentals."customerId" 
      JOIN games ON games.id = rentals."gameId"
      JOIN categories ON categories.id=games."categoryID "
      `);
  } catch (error) {}
}
export async function postRental(req, res) {
  const {customerId, gameId, daysRented, returnDate, originalPrice, delayFee } =
  req.body;

try {

const {rows: returnD } = await connection.query(`
SELECT id FROM rentals WHERE "returnDate" = null AND "gameId" = $1
`[gameId]);
if(returnD){
  return res.sendStatus(400)
}

const {rows: idcustomer} = await connection.query(`
SELECT id FROM customers WHERE id = $1
`[customerId])
if(customerId.lenght === 0){
  return res.sendStatus(400)
};

const {rows: gameId} = await connection.query(`
SELECT * FROM games WHERE id = $1
`[gameId])
if(gameId.lenght === 0){
  return res.sendStatus(400)
};



await connection.query(`
INSERT INTO rentals ("customerId", "gameId", "rentDate",
 "daysRented", "returnDate", originalPrice, "delayFee")
 VALUES ($1, $2, NOW(), $3, $4, $5, $6)`, [customerId, gameId, daysRented, returnDate, originalPrice, delayFee]) 

 res.sendStatus(201) 

} catch (error) {
  
}


}
// export async function finalRental(req, res) {}
// export async function deleteRental(req, res) {}
