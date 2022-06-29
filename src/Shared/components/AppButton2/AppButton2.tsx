import React from 'react';
import './AppButton2.scss';


type AppButton2Props = {
    title: string;
    variant?: 'filled' | 'outlined'
    borderColor?: string;
    backgroundColor?: string;
};

type AppButton2Type = React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
AppButton2Props>

export const AppButton2: AppButton2Type = ({ onClick, title, style, variant, borderColor, backgroundColor }) => {
  const variant2 = variant || 'filled';
  const backgroundColor2 = backgroundColor || 'var(--accent-color)';
  const borderColor2 = borderColor || 'black';

  const styles: React.CSSProperties = {
    border: variant2 == 'outlined' ? `1px solid ${borderColor2}` : 'none',
    backgroundColor: variant2 == 'outlined' ? 'transparent' :  backgroundColor2
  }

  return (
    <button style={{...style, ...styles}} className='button' onClick={onClick}>
        {title}
    </button>
  )
}
