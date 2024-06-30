import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchUserDetails } from 'utils/apiHelperFunctions';
import UserDetail from './userDetails';
import LoadingComponent from 'components/loading';

const ModalData = styled.div`
    .modal-header{
        display: flex;
        justify-content: center;
    }
    .loading{
        display: flex;
        justify-content: center;
    } 
    .modal-header > h2{
        background-color: #009879;
        color: #ffffff;
        /* width: 50%; */
        padding: 0 5px;
        text-align: center;
        border-radius: 5px;
    }
    .modal-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .fields{
        display: flex;
    }
    .fields span.label{
        font-weight: bold;
    }
    .fields span.label::after{
        content: ":"
    }
    .fields span{
        padding: 5px;
        display: inline-block;
        width: 110px;
    }
`;

const ModalContent = ({ data: { login: { uuid = '' } = {}} = {} }:any) => {
    const { data, error, isLoading }:any = useQuery(
        ['userDetails', uuid],
        () => fetchUserDetails(uuid),
        {
            enabled: !!uuid,
            /* staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
            cacheTime: 5 * 60 * 1000, // Cache is kept for 5 minutes */
            refetchOnWindowFocus: false, // Prevents refetching on window focus
            refetchOnMount: false, // Prevents refetching on component mount
            refetchOnReconnect: false, // Prevents refetching on reconnect
        }
    );
    if (!uuid) return null;
    return (
        <ModalData>
            { isLoading && <div className='loading'><LoadingComponent /></div>}
            {error && <div>Error: {error?.message}</div>}
            {
                data && <UserDetail {...{ data }}/>
            }
            
        </ModalData>
    );
};

export default ModalContent;