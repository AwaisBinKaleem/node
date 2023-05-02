const {databse} = require('./configs');
const mysql = require('mysql2/promise');
const mockData = require("./data");

const loginToUser = async (body) => {
  const con = await mysql.createConnection(databse)
  // let row = {}

  const [rows,fields] = await con.execute('select id from user where `email`=? and `password`=?',
  [body.email,body.password]
  // (err,res)=>{
  //   if(err) return 'can not login';
  //   if(res.length>0){
  //     row = {...res[0]}
  //   }
  //   return row
  // }
  )
    return rows
  con.end()
};

const signup =async (body) => {
  const con = await mysql.createConnection(databse)
  con.query('insert into user (id,name,email,password) values (?,?,?,?)',
  [body.id,body.name,body.email,body.password],
  (err,result)=>{
    if(err) return "unable to signup"
    return "user created succesfully";
  }
  )
  return "ok"
};

const deleteUser =async (id) => {
  const con = await mysql.createConnection(databse)
  const [rows,fields] = await con.execute('DELETE from user where id = ?',[id])
  if(rows.affectedRows){
    return true
  }else{
    return false
  }
};

const populate_database =async () => {
  const con = await mysql.createConnection(databse)
  mockData.mockData.forEach(async (user)=>{
    const [rows,fields] = await con.execute('insert into user (name,email,password) values (?,?,?)',[user.name,user.email,'abc123'])
  })
  return
};

const getAllUsers =async (pageNo) => {
  const con = await mysql.createConnection(databse)
    const pageSize = 10;
    const offset = (pageNo - 1) * pageSize;
    const [rows,fields] = await con.execute(`select * from user limit ${pageSize} offset ${offset}`)
    console.log('-->',rows)
    return rows
};
module.exports = { loginToUser, signup, deleteUser, populate_database,getAllUsers};
