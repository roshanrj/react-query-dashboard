import React from 'react';
import LoadingCompoent from './styledComponents';

interface LoadingProps {
    children?:any;
    style?:any;
}

const Loading: React.FC<LoadingProps> = ({ children, style }) => (
  <LoadingCompoent style={style}>
    <div className="loader" />
    {children}
  </LoadingCompoent>
);

export default Loading;
