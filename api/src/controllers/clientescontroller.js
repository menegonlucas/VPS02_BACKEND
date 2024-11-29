const con = require('../connect');
const create = (req, res) => {
    const { nome, pagamento } = req.body;
    con.query('INSERT INTO clientes (nome, pagamento) VALUES (?, ?)',
        [nome, pagamento],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, nome: result.nome, pagamento: result.pagamento });
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM clientes',
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
    let pagamento = req.body.pagamento;


    let query = 'UPDATE clientes set nome= ${nome}, pagamento= ${pagamento}'
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const deletar = (req, res) => {
    let idcliente = req.params.id;
    let query = 'DELETE FROM clientes WHERE idcliente = ?';

    con.query(query, [idcliente], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'cliente não encontrado' });
        } else {
            res.status(204).send();
        }
    });
}

module.exports = { create, read, update, deletar };