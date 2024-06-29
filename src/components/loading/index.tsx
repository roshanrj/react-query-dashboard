import React from 'react';
import LoadingCompoent from './styledComponents';

interface LoadingProps {
    children?:any;
    style?:any;
}

const Loading: React.FC<LoadingProps> = ({ children, style }) => (
  <LoadingCompoent style={style}>
    <div className="loader-line"></div>
    <div className="spinner" style={{ width: 60 }}>
    </div>
    {children}
  </LoadingCompoent>
);

export default Loading;
