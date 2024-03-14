"use client"
import { Context, PropsWithChildren, createContext, useContext } from "react";

type Data = Record<string, unknown> | Record<string, unknown>[]

interface IDataContext<T extends Data, Other = Record<string, unknown>> {
    data?: T;
    others?: Other;
    token?: string;
    currentUser?: string;
    domainApi?: string;
}

const DataContext = createContext<IDataContext<Data>>({} as IDataContext<Data>)

export const DataProvider = <T extends Data,>({ data, others,token, currentUser, domainApi, children }: PropsWithChildren<IDataContext<T>>) => {
    return (
        <DataContext.Provider value={{ data, others, token, currentUser, domainApi }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = <T extends Data, Other = unknown>() => {
    const context = useContext<Required<IDataContext<T, Other>>>((DataContext as unknown) as Context<Required<IDataContext<T, Other>>>)
    return context
}