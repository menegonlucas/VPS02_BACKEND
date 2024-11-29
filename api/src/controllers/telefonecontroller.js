const con = require('../connect');
const { update } = require('../controllers/telefonecontroller.js');
const create = (req, res) => {
    const { nome, pagamento } = req.body;
    con.query('INSERT INTO telefone (nome, pagamento) VALUES (?, ?)',
        [nome, pagamento],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, nome: result.nome, cnpj: result.cnpj, email: result.email });
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM telefone',
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}

const update = (req, res) => {
    let numero = req.body.numero; 
    let idcliente = req.body.idcliente; 
    let idforn = req.body.idforn; 
    

    let query = 'UPDATE telefone set numero= ${numero}, idcliente=${idcliente}, idforn=${idforn}'
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const deletar = (req, res) => {
    let idtelefone = req.params.idtelefone; 
    let query = 'DELETE FROM telefone WHERE idtelefone = ?';

    con.query(query, [idtelefone], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Telefone não encontrado' });
        } else {
            res.status(204).send(); 
        }
    });
}

module.exports = {create,read, update,deletar}
