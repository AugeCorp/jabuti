const mongoose = require('../../database/index')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleAccount: { 
        type: Boolean, 
        default: false
    },
    name: {
        type: String,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    activeAccount: Boolean,
    lastAccess: { 
        type: Date, 
        default: Date.now
    },
    // tokenVerification: {
    //   type: String,
    //   required: true
    // },
    economia: {
        gastos: {
            gastoUnico: {
                formaPag: {
                    dinheiro: Boolean,
                    credito: Boolean,
                    parcelado: Boolean,
                    parcelas: Number
                },
                importancia: String,
                descricao: String,
                preco: Number,
                categoria: String,
                validade: String,
                tipo: String,
            },
            objetivoConsumo: {
                descricao: String,
                preco: Number,
                categoria: Number
            }
        },
        renda: {
            tipo: String,
            valor: Number
        }
    },
    historico: {
        anual: {
            mensal: {
                receita: Number
            }
        }
    },
    metas: {
        tipo: String
    }
});

UserSchema.set('timestamps', true)

module.exports = mongoose.model('User', UserSchema);
