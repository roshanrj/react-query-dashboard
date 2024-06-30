import React from 'react';
import styled from 'styled-components';
import { getObjectValue } from 'utils/utilityFunction';
import { tableProps } from './types';
import getComponentByType from 'components/componentByType';

const TableComp = styled.table `
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    & > thead tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
    }
    & tr > th, tr > td {
        padding: 8px 15px;
    }
    tr > td > img{
        max-width: 40px;
    }
    & > tbody tr {
        cursor: pointer;
        border-bottom: 1px solid #dddddd;
    }
    & > tbody tr:last-of-type {
        border-bottom: 2px solid #009879;
    }
    & > tbody tr.active-row {
        font-weight: bold;
        color: #009879;
    }
    & > tbody tr:hover{background-color: rgba(0, 0, 0, 0.4);}
`;

const Table: React.FC<tableProps> = ({ columns, data, handleRowClick }) => {
    return (
        <TableComp>
            <thead>
                <tr>
                    {React.Children.toArray(columns.map((v:any) => <th>{v.label}</th>))}
                </tr>
            </thead>
            <tbody>
                {
                    React.Children.toArray(data.map((data:any) => 
                        <tr onClick={() => handleRowClick(data)}>
                            {React.Children.toArray(columns.map((col:any) => (
                                <td>{getComponentByType(getObjectValue(data, col.key), col)}</td>
                            )))}
                        </tr>
                    ))
                }
            </tbody>
        </TableComp>
    );
};

export default Table;