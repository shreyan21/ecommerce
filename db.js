import dotenv from 'dotenv'
import pkg  from 'pg'
dotenv.config()
const {Client}=pkg
const client=new Client({connectionString:process.env.DATABASE_URL})

async function dbconnection(){
    try{
          await client.connect()
          console.log('Connected to database');
          return client
          
          
    }
    catch(e){
        console.error(e);
        

    }
}

export {dbconnection}