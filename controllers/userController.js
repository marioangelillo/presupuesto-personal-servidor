const mysql = require('mysql');

db = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'xica1313',
    database : 'alkemy'
  });
  
exports.login = async (req, res) => {  

    const {email, password} = req.body
    const sqlSelectUser = "SELECT * FROM alkemy.usuarios WHERE email = '"+email +"' AND password = '"+password+"'"
    
    try {
        db.query(sqlSelectUser, (err, result) => {
            console.log(err)
            res.json(result)
        })
    } catch (error) {
        console.error(error);
        return res.status(400).json({msg: 'Hubo un error'});
    }    
}

exports.insertUser = async (req, res) => {

    const {username, email, password, image} = req.body

    if(username === '' || email === '' || password === '' ){
        return res.status(400).json({msg: 'Debe completar todos los campos'});
    }

    const sqlSelectUser = "SELECT * FROM alkemy.usuarios WHERE email = '"+email +"'";
    const sqlInsertUser = "INSERT INTO alkemy.usuarios (user, password, email, image) VALUES (?,?,?,?);"; 

    try { 
        db.query(sqlSelectUser, [username, password, email, image], (err, result) => {
            console.log(err)
            if(result.length){
                return res.status(400).json({msg: 'Ya existe un usuario con ese email'});
            }else{            
                db.query(sqlInsertUser, [username, password, email, image], (err, result) => {
                    console.log(err)
                    res.json({msg: 'Usuario creado correctamente'})
                })
            }    
        })
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({msg: 'Hubo un error'});
    } 
    
}  