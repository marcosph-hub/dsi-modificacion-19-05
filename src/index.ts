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

export interface UserInterface extends Document {
  nombre: string,
  apellidos: string,
  edad: number,
  email: string,
  asignaturas: string,// 'dsi'|'seguridad'|'uya'
  NIF: string
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
    required:true
  },
  email: {
    type: String,
    required:true
  },
  asignaturas: {
    type: String,
    required:true
    //enum: ['dsi', 'seguridad', 'uya'],
  },
  NIF: {
    type: String,
    required:true
  }
});


const User = model<UserInterface>('User', UserSchema);

const user = new User({
  nombre: 'Marcos',
  apellidos: 'Padilla',
  edad: 22,
  email: 'alu0101045177@ull.edu.es',
  asignaturas: 'dsi',
  NIF: '0000000A'
});


/**
 * Añadir usuario
 */
/*
user.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
*/


export function AddUser() {
  //const DBRESULT = new Promise<UserInterface>((resolve,reject) => {
  return new Promise<UserInterface>((resolve,reject) => {


    user.save().then((result) => {
      resolve(result);
    }).catch((error) => {
      reject(error);
    });
  });
}

export function SearchUser() {

  return new Promise<UserInterface>((resolve,reject) => {
    User.findOne({email: "alu010104577@ull.edu.es"}).then((result) => {
      if(result == null) {
        reject(result);
      } else {
        resolve(result);
      }
    }).catch((error) => {
      reject(error)
    });
  });
}

export function UpdateUse() {
  User.updateOne({email: "alu0101068855@ull.edu.es", nombre: "Paco", apellidos: "Acosta Abreu"}).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}

export function RemoveUser() {
  User.deleteOne({email: "alu0101068855@ull.edu.es"}).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}





SearchUser();
