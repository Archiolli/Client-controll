'use client'
import React from 'react'
import Container from '@/components/Container'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema_login } from '@/utils/schemas'
import useAuth from './hooks/useAuth'
import { GiPassport } from 'react-icons/gi'
import { montSerrat } from '@/app/(login)/layout'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema_login)
    })
    const { handleLogin } = useAuth()

    return (
        <Container>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="h-full w-full shadow-xl rounded-md py-10 px-10 border-0.2  border-yellow-200">
                    <div className={`flex justify-center w-full pb-2 items-center text-xl
                    ${montSerrat.className}`}><p className='bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-transparent bg-clip-text'>Client Controll</p>
                        <GiPassport className='h-10 w-10 text-yellow-700' /></div>
                    <div>
                        <div className="relative flex flex-col gap-6 w-72">
                            <div className="h-10 w-full min-w-[200px]">
                                <input className="peer h-full w-full rounded-[7px] border
                                    border-yellow-400 border-t-transparent bg-transparent
                                    px-3 py-2.5 text-sm font-normal 
                                    text-yellow-500 outline outline-0 transition-all 
                                    placeholder-shown:border placeholder-shown:border-yellow-400
                                    placeholder-shown:border-t-yellow-400 focus:border-2
                                    focus:border-yellow-400 focus:border-t-transparent 
                                    focus:outline-0 disabled:border-0 
                                    disabled:bg-yellow-500 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    type="text"
                                    placeholder="Email"
                                    {...register("email")}
                                />
                                <label
                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-10 w-full min-w-[200px]">
                                <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    type="password"
                                    placeholder="Senha"
                                    {...register("senha")}
                                />
                                <label
                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                                    Senha
                                </label>
                            </div>
                        </div>
                        <div className="w-full justify-center flex mt-5">
                            <button
                                className="select-none rounded-lg bg-gradient-to-l from-yellow-500 via-yellow-600 to-yellow-400 py-3 px-6 text-center align-middle text-xs uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                            >
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </Container>
    )
}

export default Login