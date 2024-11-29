const con = require('../connect');
const { update } = require('../controllers/fornecedorescontroller.js');
const create = (req, res) => {
    const { nome, pagamento } = req.body;
    con.query('INSERT INTO fornecedores (nome, cnpj, email) VALUES (?, ?, ?)',
        [nome, cnpj, email],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, nome: result.nome, cnpj: result.cnpj, email: result.email });
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM fornecedores',
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}
const update = (req, res) => {
    let nome = req.body.nome;
    let cnpj = req.body.cnpj;
    let email = req.body.email;


    let query = 'UPDATE fornecedores set nome = ${nome}, cnpj = ${cnpj}, email = ${email}';
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const deletar = (req, res) => {
    let idforn = req.params.idforn;
    let query = 'DELETE FROM fornecedores WHERE idforn = ?';

    con.query(query, [idforn], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'fornecedor não encontrado' });
        } else {
            res.status(204).send();
        }
    });
}

module.exports = {
    create, read, update, deletar
}
