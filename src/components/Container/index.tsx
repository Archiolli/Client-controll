import React, { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

interface IContainerProps extends ComponentProps<'div'> {}

const container = tv({
    base: "flex flex-col lg:w-full w-screen h-full justify-center items-center"
})

const Container = ({ className, children, ...rest }: IContainerProps) => {
    return (
        <div className={container({ className })} {...rest}>{children}</div>
    )
}

export default Container