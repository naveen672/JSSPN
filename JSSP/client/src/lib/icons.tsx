import { FC } from "react";

interface IconProps {
  className?: string;
}

export const Icon: FC<{ name: string; className?: string }> = ({ name, className = "" }) => {
  return <i className={`ri-${name} ${className}`}></i>;
};
