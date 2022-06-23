

interface ChildProps {
    num?: number
}

export const Child: React.FC<ChildProps> = ({num}) => {

    return <div>
        {num}
        </div>
}

