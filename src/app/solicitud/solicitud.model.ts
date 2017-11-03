const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = "mongodb://admin:P455w0rd@practica00-shard-00-00-bn3aa.mongodb.net:27017,practica00-shard-00-01-bn3aa.mongodb.net:27017,practica00-shard-00-02-bn3aa.mongodb.net:27017/test?ssl=true&replicaSet=Practica00-shard-0&authSource=admin";

export class Solicitud {
    constructor(public sol: object){
        this.sol = sol;
    }

    save(){
        try{
            MongoClient.connect(url, (err, db) =>{
                assert.equal(err, null);
                this.insertarSolicitud(db, () => {db.close()});
            });
        }catch {
            console.log('Ups. Hubo un error trantado de guardar los datos al Database');
        }
    }

    insertarSolicitud(db, callback){
        db.collection('solicitudes').insertOne(this.sol, (err, result)=>{
            assert.equal(err, null);
            console.log('Insertado correctamente a la base de datos.');
        });

    }
}