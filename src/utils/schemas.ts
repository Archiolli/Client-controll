import { checkDate, formatDate } from './formatter'
import * as yup from 'yup'

yup.setLocale({
    mixed: {
        notType(params) {
            return `⚠ ${params.path} inválido(a)`
        },

        required(params) {
            return `⚠ ${params.path} é obrigatório(a)`
        },
        notNull(params) {
            return `⚠ ${params.path} é obrigatório(a)`
        },
    },

    string: {
        matches(params) {
            return `⚠ ${params.path} inválido(a)`
        },
        email(params) {
            return `⚠ ${params.path} inválido(a)`
        },
    },

    number: {
        min(params) {
            return `⚠ ${params.path} inválido(a)`
        }
    },

    array: {
        min(params) {
            return `⚠ ${params.path} deve possuir um mínimo de ${params.min} elemento(s)`
        }
    }
})



export const schema_login = yup.object({
    email:yup.string().required().label("Email"),
    senha:yup.string().required().label("senha")
})

export const schema_register = yup.object({
    nome:yup.string().required().label("nome"),
    email:yup.string().required().label("email"),
    senha:yup.string().required().label("senha")
})


export const schema_processo = yup.object({
    id: yup.number().label('id'),
    nome: yup.string().required().label('nome'),
    docs: yup.string().required().label('docs'),
    consultorId: yup.number().label('consultorId'),
    observacao: yup.string().required().label('observacao'),
    prazoAplicacao: yup.string().required().label('prazo aplicacao'),
    prioridade: yup.string().required().label('prioridade'),
    empresaAberta: yup.string().required().label('empresaAberta'),
    buisinessPlan: yup.string().required().label('buisinessPlan'),
    diploma: yup.string().required().label('diploma'),
    historico: yup.string().required().label('historico'),
    equivalencia: yup.string().required().label('equivalencia'),
    lor: yup.string().required().label('lor'),
    status: yup.string().required().label('status'),
    userId: yup.number().label('userId'),
    vistoId: yup.number().label('vistoId')
})

export type FormLoginType = yup.InferType<typeof schema_login>

export type FormRegisterType = yup.InferType<typeof schema_register>


export type FormProcesso = yup.InferType<typeof schema_processo>
