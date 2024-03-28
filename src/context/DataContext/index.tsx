"use client"
import { Context, PropsWithChildren, createContext, useContext } from "react";

type Data = Record<string, unknown> | Record<string, unknown>[]

interface IDataContext<T extends Data, Other = Record<string, unknown>> {
    data?: T;
    others?: Other;
    user: {
        id: number
        nome: string
        email: string
    }
    backEndTokens: {
        acssesToken: string
        refreshToken: string
    }
}

const DataContext = createContext<IDataContext<Data>>({} as IDataContext<Data>)

export const DataProvider = <T extends Data,>({ data, others, backEndTokens, user, children }: PropsWithChildren<IDataContext<T>>) => {
    return (
        <DataContext.Provider value={{ data, others, backEndTokens, user}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = <T extends Data, Other = unknown>() => {
    const context = useContext<Required<IDataContext<T, Other>>>((DataContext as unknown) as Context<Required<IDataContext<T, Other>>>)
    return context
}