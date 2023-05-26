import React, { FC, ReactNode } from 'react';

const Card: FC<{
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: ReactNode;
}> = (props) => {
  return (
    <div
      className={`shadow-card flex rounded + ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;
