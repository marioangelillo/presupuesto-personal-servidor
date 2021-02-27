const mysql = require('mysql');

db = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'alkemy'
  });
  
exports.select = async (req, res) => {  

    const sqlSelect = "SELECT * FROM alkemy.movimientos"; 
    
    try {
        db.query(sqlSelect, (err, result) => {
            console.log(err)
            res.json(result)
        })
    } catch (error) {
        console.error(error);
        return res.status(400).json({msg: 'Hubo un error'});
    }    
} 

exports.insert = async (req, res) => {

    const {concept, amount, dateOperation, operation} = req.body

    if(concept === '' || amount === '' || dateOperation === '' || operation === ''){
        return res.status(400).json({msg: 'Debe completar todos los campos'});
    }
    
    const sqlInsert = "INSERT INTO alkemy.movimientos (dateOperation, amount, operation, userID, concept) VALUES (?,?,?,?,?);"; 
    
    console.log(req.body);
    try {
        db.query(sqlInsert, [dateOperation, amount, operation, 1, concept], (err, result) => {
            console.log(err)
            res.json({msg: 'Producto agregado correctamente'})
        })
    } catch (error) {
        console.error(error);
        return res.status(400).json({msg: 'Hubo un error'});
    }
    
}  

exports.delete = async (req, res) =>{
    
    const sqlDeleteProduct = "DELETE FROM alkemy.movimientos WHERE id=" + req.params.id
        
   try {
        db.query(sqlDeleteProduct, (err, result) => {
            //console.log(err);
            res.json(result);
        })
    } catch (error) {
        console.error(error);
        return res.status(400).json({msg: 'Hubo un error'});
    }
}

/*exports.updateProduct = async (req, res) =>{

    const {id, concept, amount, dateOperation, operation} = req.body

    const sqlUpdateProduct = "UPDATE alkemy.movimientos SET dateOperation = ?, amount = ?, concept = ? WHERE id = " + req.params.id
    
    console.log(req.body);
    try {
        db.query(sqlUpdateProduct, [dateOperation, amount, concept], (err, result) => {
            console.log(err)
            res.json(result);
        })
    } catch (error) {
        console.error(error);
        return res.status(400).json({msg: 'Hubo un error'});
    }
}*/