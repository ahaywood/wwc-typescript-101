import React, {MouseEvent} from "react";

export enum IconSide {
  'Left' = 0,
  'Right' = 1
}

export interface ButtonProps {
  // children: JSX.Element,
  className?: string,
  disabled?: boolean,
  label: string,
  handleClick: () => void,
  size?: string,
  buttonStyle?: string,
  icon?: string,
  iconSide?: IconSide
}

const Button = ({
  className,
  disabled,
  label,
  handleClick,
  size,
  buttonStyle,
  icon,
  iconSide
}: ButtonProps): JSX.Element => {

  const handleButtonClick = (event: MouseEvent) => {
    // do some other things
    handleClick();
  }

  return (
    <button
      className={`
        ${className}
        ${size === 'large' && 'large '}
        ${size === 'small' && 'small '}
        ${buttonStyle === 'inverted' && 'inverted '}
        ${buttonStyle === 'solid' && 'solid '}
        ${buttonStyle === 'noBg' && 'noBg '}
      `}
      disabled={disabled}
      onClick={ handleButtonClick }
    >
      {label}
      <div>{icon}</div>
    </button>
  )
}

export { Button }