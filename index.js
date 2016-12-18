var pg = require('pg');
var config ={
  user:'postgres',
  password:'123',
  host:'localhost',
  post:5432,
  database: 'EmployeDB',
  max:10,
  idleTimeoutMillis: 30000
};
var pool = new pg.Pool(config);
pool.connect((err, client, done) => {
  if(err){
    return console.log('Loi ket noi');
  }
  client.query('SELECT * FROM "NHANVIEN"',(err,result) =>{
    if(err){
      return console.log('Loi truy van');
    }
    console.log(result.rows);
  });
});
function add (a,b,cb) {
  var c = a+b;
  cb(c);
}
add(2,3,(c)=>{
  if(c==5){
    console.log(c);
  }
});
