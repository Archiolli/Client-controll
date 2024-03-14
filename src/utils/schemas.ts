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



export type FormLoginType = yup.InferType<typeof schema_login>

export type FormRegisterType = yup.InferType<typeof schema_register>