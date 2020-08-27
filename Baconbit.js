const { Pool, Client } = require('pg');
const connectionString = 'postgressql://postgres:user@localhost:5432/PORKLOGIC DB'

const client = new Client({
  connectionString:connectionString
})


client.connect() 

client.query('SELECT * from public."BaconBit "',(err,res)=>{
  console.log(err,res)
  client.end()
})
    