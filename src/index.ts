import {Document, connect, model, Schema} from 'mongoose';

connect('mongodb://127.0.0.1:27017/dsi-assessment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

interface UserInterface extends Document {
  nombre: string,
  apellidos: string,
  edad: number,
  email: string,
  contraseña: string
}

const UserSchema = new Schema<UserInterface>({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  }
});

const User = model<UserInterface>('User', UserSchema);

const user = new User({
  nombre: 'Juan',
  apellidos: 'Sánchez Gutiérrez',
  edad: 24,
  email: 'alu0101068853@ull.edu.es',
  contraseña: '1234'
});

/**
 * Añadir usuario
 */
user.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

/**
 * Buscar usuario
User.findOne({email: "alu0101068855@ull.edu.es"}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
 */

/**
 * Actualizar usuario 
User.updateOne({email: "alu0101068855@ull.edu.es", nombre: "Paco", apellidos: "Acosta Abreu"}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
 */

/**
 * Eliminar usuario
User.deleteOne({email: "alu0101068855@ull.edu.es"}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
 */

