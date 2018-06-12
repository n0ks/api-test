const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TarefaSchema = new Schema({
	author: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: [true, "Necessário preencher descrição da tarefa"]
	},
	done: {
		type: Boolean,
		default: false
	}
})

const Tarefa = mongoose.model('tarefa', TarefaSchema)

module.exports = Tarefa