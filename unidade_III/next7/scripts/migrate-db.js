const path = require('path')

const envPath = path.resolve(process.cwd(), '.env.local')

const fetch = require('cross-fetch')

require('dotenv').config({ path: envPath })

const mysql = require('serverless-mysql')



const db = mysql({

  config: {

    host: process.env.HOST,

    database: process.env.DATABASE,

    user: process.env.DBUSERNAME,

    password: process.env.DBPASSWORD,

    

  },

})



async function query(q) {

  try {

    const results = await db.query(q)

    await db.end()

    return results

  } catch (e) {

    throw Error(e.message)

  }

}



async function drop(){

    try {

        await query(`

            DROP TABLE Movies

        `)

    

        console.log('drop ran successfully')

      } catch (e) {

        console.error('could not run migration, double check your credentials.')

        process.exit(1)

      }  

}



async function create(){

    try {

        await query(`

          CREATE TABLE Movies(

            imdbId VARCHAR(12) PRIMARY KEY,

            title VARCHAR(50),

            year VARCHAR(6),

            poster VARCHAR(250)

          );

        `)

        console.log('create ran successfully')



      } catch (e) {

        console.error('could not run create.')

        console.log(e)

        process.exit(1)

      }  

}



async function insert(){

  try {

    await query(`

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt0033152','The Thief of Bagdad','1940','https://m.media-amazon.com/images/M/MV5BZWFhYjg4NTEtY2IzMS00YTc2LTg1NGUtMTEzNDBlZDIxZTk3XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg');

    `)



    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt0015400','The Thief of Bagdad','1924','https://m.media-amazon.com/images/M/MV5BNmM0MjdkMDQtMDMwMy00ZjE4LThjMDUtNjA4ZjkxYzM0MWRjXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt0041149','Bagdad','1949','https://m.media-amazon.com/images/M/MV5BZjAxYTJmMmItYzZhMS00OWMwLTkxMjEtZjVmNmM3ZGRlZTljXkEyXkFqcGdeQXVyNTk1MTk0MDI@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt1893256','Redemption','2013','https://m.media-amazon.com/images/M/MV5BMjI0ODc3NjI4NV5BMl5BanBnXkFtZTcwOTc3MzI1OQ@@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt1781896','The Scorpion King 3: Battle for Redemption','2012','https://m.media-amazon.com/images/M/MV5BMjA3MzU2ODIwOV5BMl5BanBnXkFtZTcwOTA1ODIyNw@@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt4439620','Redemption Day','2021','https://m.media-amazon.com/images/M/MV5BYjFjOTI3MjItZTAzNS00Yjk4LWEyNDAtZTA4ZDNiM2FiNjVjXkEyXkFqcGdeQXVyMTYxNzI2MTg@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt1479962','Red Dead Redemption','2010','https://m.media-amazon.com/images/M/MV5BZmYwNjk3OWMtODk2Yi00MjA3LTgzYzctODk1NmRhM2M4ZDVjXkEyXkFqcGdeQXVyNjgzMTIxNzE@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt6161168','Red Dead Redemption II','2018','https://m.media-amazon.com/images/M/MV5BMThiMGJkNDUtYjIxYy00ZTRhLWE5NmUtNzI4NTJlOGI4ZTMwXkEyXkFqcGdeQXVyNTk1ODMyNjA@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt0813980','24: Redemption','2008','https://m.media-amazon.com/images/M/MV5BZGQzNTU4M2MtNTliMC00YTliLTlmMmYtZDQ3NTQ4N2YwMDdmXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt1156466','Undisputed 3: Redemption','2010','https://m.media-amazon.com/images/M/MV5BMTc0YzA4YjQtZGZkMi00ZmRjLWFmM2ItMDcxZTYzZGU3ZTI1XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt1899353','The Raid: Redemption','2011','https://m.media-amazon.com/images/M/MV5BZGIxODNjM2YtZjA5Mi00MjA5LTk2YjItODE0OWI5NThjNTBmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt0044389','Babes in Bagdad','1952','https://m.media-amazon.com/images/M/MV5BYjBmNmRlNzAtZDNjYi00ZjQ0LTljYTktZGUxOGNhMjFhZWI1XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt0046497','The Veils of Bagdad','1953','https://m.media-amazon.com/images/M/MV5BODdhYzI2NGQtNWJhZS00ZTNjLWJkNDMtODVlZDU5NjJjNTMwXkEyXkFqcGdeQXVyMjU5OTg5NDc@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt0029833','A-Lad-In Bagdad','1938','https://m.media-amazon.com/images/M/MV5BYjM4MDBiMmQtZmNhYy00ZmFhLTkxMmItOTViYzdlYTk2YTIzXkEyXkFqcGdeQXVyMTU5NjQzMzU@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt0046322','Siren of Bagdad','1953','https://m.media-amazon.com/images/M/MV5BNGNkN2M5NjgtNmU2Mi00YjY0LWExNWItZTgxMjI5OWVkMzRkXkEyXkFqcGdeQXVyNjEwMTA0NTc@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt0098746','Bagdad Cafe','1990','https://m.media-amazon.com/images/M/MV5BZTg5NGQ5OTMtOGE2ZS00NWMzLTgwN2YtMTNjMTJjODI4NWJhXkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt0044388','Bowery to Bagdad','1955','https://m.media-amazon.com/images/M/MV5BZTMwMTUyZTktOTk4OC00ZGY2LWFmMzAtYjkxMWMxNjdmOTg4XkEyXkFqcGdeQXVyNDY3MzU2MDM@._V1_SX300.jpg');

      `

    )

    await query(

      `

      INSERT INTO Movies(imdbId,title,year,poster) VALUES ('tt5592230','The Blacklist: Redemption','2017','https://m.media-amazon.com/images/M/MV5BODI2MjI4MzQ1OV5BMl5BanBnXkFtZTgwOTk2MDAyMTI@._V1_SX300.jpg');

      `

    )

    

    

    console.log('insert ran successfully')





  } catch (e) {

    console.error('could not run insert, check commands.')

    console.log(e)

    process.exit(1)

  }

}



async function migrate() {

  try {

    await drop()

    await create()

    await insert()

    

    console.log('migration ran successfully')

  } catch (e) {

    console.error('could not run migration, double check your credentials.')

    process.exit(1)

  }

}



migrate().then(() => process.exit())