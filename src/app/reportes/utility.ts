const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = "mongodb://admin:P455w0rd@practica00-shard-00-00-bn3aa.mongodb.net:27017,practica00-shard-00-01-bn3aa.mongodb.net:27017,practica00-shard-00-02-bn3aa.mongodb.net:27017/test?ssl=true&replicaSet=Practica00-shard-0&authSource=admin";

function obtenerReportesPorFecha(desde: Date, hasta: Date)
{
    try {
        MongoClient.connect(url, function(err, db){
            assert.equal(err, null);
            db.collection('solicitudes').find({'created_at': {
                $gte: hasta.toISOString(), $lte: desde.toISOString()
            }}, (erro, result) => {
                assert.equal(erro, null);
                return result;
            });
        });
    }catch {
        console.log('Hubo un error');
    }
}

function obtenerPorDepartamento(departamento: string)
{
    try {
        MongoClient.connect(url, function(err, db){
            assert.equal(err, null);
            db.collection('solicitudes').find({'departamento': departamento}, (erro, result) => {
                assert.equal(erro, null);
                return result;
            });
        });
    }catch {
        console.log('Hubo un error');
    }
}

function obtenerPorSolicitante(solicitante: string)
{
    try {
        MongoClient.connect(url, function(err, db){
            assert.equal(err, null);
            db.collection('solicitudes').find({'solicitante': solicitante}, (erro, result) => {
                assert.equal(erro, null);
                return result;
            });
        });
    } catch{
        console.log('Hubo un error');
    }
}
