import { useState } from "react";
import type { ButtonProps } from "./Button";

interface ToggleButtonProps extends ButtonProps  {
  toggleByDefault: boolean;
}


const ToggleButton = ({ toggleByDefault }: ToggleButtonProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(toggleByDefault);

  const handleClick = () => {
    setIsToggled(isToggled => !isToggled);
  }

  return (
    <button onClick={handleClick}>Toggle Button</button>
  )
}

export {ToggleButton}