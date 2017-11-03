// import { MongoClient } from 'mongodb';
// const url = "mongodb://admin:P455w0rd@practica00-shard-00-00-bn3aa.mongodb.net:27017,practica00-shard-00-01-bn3aa.mongodb.net:27017,practica00-shard-00-02-bn3aa.mongodb.net:27017/test?ssl=true&replicaSet=Practica00-shard-0&authSource=admin";

// function obtenerReportesPorFecha(desde: Date, hasta: Date)
// {
//     try {
//         MongoClient.connect(url, function(err, db){
//             if(err) 
//             {
//                 throw err;
//             }
//             db.collection('solicitudes').find({'created_at': {
//                 $gte: hasta.toISOString(), $lte: desde.toISOString()
//             }}, 
//             (erro, result) => {
//                 if(erro) 
//                 {
//                     throw erro
//                 };
//                 return result;
//             });
//         });
//     }catch {
//         console.log('Hubo un error');
//     }
// }

// function obtenerPorDepartamento(departamento: string)
// {
//     try {
//         MongoClient.connect(url, function(err, db){
//             if(err) throw err;
//             db.collection('solicitudes').find({'departamento': departamento}, (erro, result) => {
//                 if(erro) throw erro;
//                 return result;
//             });
//         });
//     }catch {
//         console.log('Hubo un error');
//     }
// }

// function obtenerPorSolicitante(solicitante: string)
// {
//     try {
//         MongoClient.connect(url, function(err, db){
//             if(err)
//             {
//                 throw err;
//             }
//             db.collection('solicitudes').find({'solicitante': solicitante}, (erro, result) => {
//                 if(erro)
//                 {
//                     throw erro;
//                 }
//                 return result;
//             });
//         });
//     } catch{
//         console.log('Hubo un error');
//     }
// }
