import { ReactNode } from 'react';

type DivProps = {
    className?: string,
    children: ReactNode
}

const Div = ({ className, children }:DivProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Div;