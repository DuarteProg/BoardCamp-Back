import connection from "../../dataBase/dataBase.js";

export async function getCostumer(req, res) {
  const { cpf } = req.query;

  try {
    if (cpf) {
      return await connection.query(`
        SELECT id FROM customers WHERE cpf ILIKE '${cpf}%'  
        `);
    }

    const { rows: result } = await connection.query(`
    SELECT * FROM customers   
    `);

    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCostumerId(req, res) {
  const { id } = req.params;

  try {
    const { rows: result } = await connection.query(
      `
    SELECT * FROM customers WHERE id = $1
    `,
      [id]
    );

    if (result.length === 0) {
      return res.sendStatus(404);
    }

    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

export async function postCostumer(req, res) {
  const { name, phone, cpf, birthday } = req.body;

  try {
    const { rows: result } = await connection.query(
      `
    SELECT id FROM customers WHERE cpf = $1
    `,
      [cpf]
    );

    if (result.length > 0) {
      return res.send(409);
    }

    await connection.query(
      `
INSERT INTO customers (name, phone, cpf, birthday) 
VALUES ($1, $2, $3, $4);
`,
      [name, phone, cpf, birthday]
    );

    res.sendStatus(201);
  } catch (error) {
    console.log(error.message);
  }
}

export async function putCostumer(req, res) {
  const { name, phone, cpf, birthday } = req.body;
  const { id } = req.params;



  try {
    const { rows: result } = await connection.query(
      `
    SELECT id FROM customers WHERE cpf = $1 AND id != $2
    `, [cpf, id]
    );
    
    if (result.length > 0) {
      return res.sendStatus(409);
    }
    
    


await connection.query(`
UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5;
`, [name, phone, cpf, birthday, id])

res.sendStatus(200)

  } catch (error) {
console.log(error.message)
  }
}