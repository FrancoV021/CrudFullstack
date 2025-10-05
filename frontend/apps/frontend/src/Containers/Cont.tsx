import React from 'react';
import './Cont.css';

interface ContProps {
  children: React.ReactNode;
}

const Cont: React.FC<ContProps> = ({ children }) => {
  return (
    <div className="cont">
        {children}
    </div>
  );
}

export default Cont;
