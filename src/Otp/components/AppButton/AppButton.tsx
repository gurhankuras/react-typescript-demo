
import classes from './AppButton.module.css'
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

type AppButtonProps = {
    title: string
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    active?: boolean
};

export const AppButton: React.FC<AppButtonProps> = ({ onClick, active = true, title }) => {
    
    const buttonClassName = cx({
        button: true,
        inactive: !active
    })
    
    return (
        <div className={classes.center}>
            <button className={buttonClassName} onClick={active ? onClick: undefined}>
                {title}
            </button>
        </div>
    )
}