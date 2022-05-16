import {MongoClient} from 'mongodb';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'dsi-assessment';

interface UserInterface {
  nombre: string,
  apellidos: string,
  edad: number,
  email: string,
  contraseña: string
}
/**
 * Añadir un usuario
 */
MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);

  return db.collection<UserInterface>('users').insertOne({
    nombre: 'Hector',
    apellidos: 'Abreu Acosta',
    edad: 22,
    email: 'alu0101068855@ull.edu.es',
    contraseña: '1234'
  });
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

/**
 * Buscar usuario
 */
 MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);

  return db.collection<UserInterface>('users').find({
    email: 'alu0101068855@ull.edu.es',
  }).toArray();
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

/**
 * Actualizar un usuario mediante e-mail
 */
 MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);

  return db.collection<UserInterface>('users').updateOne({
    email_: 'alu0101068855@ull.edu.es',
  }, {
    $set: {
        nombre: 'Hector',
        apellidos: 'Abreu Acosta',
        edad: 22,
        email: 'alu0101068855@ull.edu.es', 
        contraseña: '4321'
    },
  });
}).then((result) => {
  console.log(result.modifiedCount);
}).catch((error) => {
  console.log(error);
});
