'use client'
import React from 'react'
import { CiLogin } from "react-icons/ci";
import Container from '@/components/Container'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema_login } from '@/utils/schemas'
import useAuth from './hooks/useAuth'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema_login)
    })
    const { handleLogin, loading } = useAuth()

    return (
        <Container>
            <form onSubmit={handleSubmit(handleLogin)}>

                <input
                    type="text"
                    // label="Usuário"
                    // variant="outlined"
                    // error={!!errors.usuario}
                    // helperText={errors.usuario?.message}
                    {...register("usuario")}
                />

                <input
                    type="password"
                    // label="Senha"
                    // variant="outlined"
                    // error={!!errors.senha}
                    // helperText={errors.senha?.message}
                    {...register("senha")}
                />
                <button
                    className="bg-blue-600"
                    type="submit"
                    // color="info"
                    // loading={loading}
                    // loadingPosition="start"
                    // startIcon={<CiLogin />}
                >
                    Entrar
                </button>
            </form>
        </Container>
    )
}

export default Login