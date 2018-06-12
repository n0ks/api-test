const express = require('express')
const router = express.Router()
const Tarefa = require('../models/Tarefas')


router.get('/tarefas', (req, res, next) => {
	Tarefa.find({}).then(data => res.send(data))
})

router.post('/tarefas', (req, res, next) => {
	Tarefa.create(req.body)
		.then(data => {
			res.send({ data, status: "Item Adicionado" })
		}).catch(next)
})

router.put('/tarefas/:id', (req, res, next) => {

	// Procura o item pelo ID a ser atualizado
	Tarefa.findByIdAndUpdate({ _id: req.params.id }, req.body)
		.then(() => {

			// Após atualizar, realizar nova consulta para devolver novo item para o front
			Tarefa.findOne({ _id: req.params.id }).then(data => {
				res.send({ data, status: "Item Atualizado" })
			})
		})
})

router.delete('/tarefas/:id', (req, res, next) => {
	Tarefa.findByIdAndRemove({ _id: req.params.id })
		.then(data => res.send({ data: data, status: "Item Removido" }))
})


module.exports = router;