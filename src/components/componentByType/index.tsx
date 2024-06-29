import React from 'react';
import { IsValidJsonString } from 'utils/utilityFunction';
type columnType = {
    label: string,
    key: string,
    type: 'TEXT' | 'NUMBER' | 'IMAGE'
}

export const Image = ({ value, compProp: { label, alt, style } }:any) => (<img src={value} alt={alt || label} loading="lazy" style={(IsValidJsonString(style) ? JSON.parse(style) : {})} />);

const getComponentByType = (value: string | number | undefined, compProp: columnType) => {
    if (compProp.type === 'IMAGE') return <Image {...{ value, compProp }} />;
    return value;
};

export default getComponentByType;