"use client"
import React from 'react'
import Login from './Login'
import { SnackbarProvider } from 'notistack'

const LoginWrapper = () => {
    return (
        <SnackbarProvider>
            <Login />
        </SnackbarProvider>
    )
}

export default LoginWrapper