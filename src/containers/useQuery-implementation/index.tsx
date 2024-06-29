import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import SearchBar from 'components/searchBar';
import Table from 'components/table';
import Loading from 'components/loading';
import { useQuery } from 'react-query';
import Modal from 'components/modal';
import ModalContent from './modalContent';
import styled from 'styled-components';

type columnType = {
    label: string,
    key: string,
    type: 'TEXT' | 'NUMBER' | 'IMAGE'
}

const fetchRandomUsers = () => axios.get(`https://randomuser.me/api/?results=50`);
const columns: Array<columnType> = [
    {label: 'First Name', key: 'name.first', type: 'TEXT'},
    {label: 'Last Name', key: 'name.last', type: 'TEXT'},
    {label: 'Gender', key: 'gender', type: 'TEXT'},
    {label: 'Email', key: 'email', type: 'TEXT'},
    {label: 'Phone No.', key: 'phone', type: 'NUMBER'}, 
    {label: 'Profile Pic', key: 'picture.thumbnail', type: 'IMAGE'}
];

const NoDataFound =  styled.div`
    background: #f44336;
    color: #FFFFFF;
    text-align: center;
    padding: 5px;
`;

/* Note: The randomuser.me API does not support searching users by name as a query param. 
   So, implemented it using state and filtering the results based on user entered search value.
*/ 

const UseQueryComp = () => {
    const [name, setName] = useState<string>('');
    const [filteredData, setFilteredData] = useState<Array<Object>>([]);
    const [modalData, setModalData] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { isLoading, isError, data, isFetching } = useQuery('random-users', fetchRandomUsers, {
        staleTime: 60 * 60 * 1000, // Data is considered fresh for 60 minutes
        cacheTime: 10 * 60 * 1000, // Cache is kept for 10 minutes
        refetchOnWindowFocus: false, // Prevents refetching on window focus
        refetchOnMount: false, // Prevents refetching on component mount
        refetchOnReconnect: false, // Prevents refetching on reconnect
      });

    useEffect(() => {
        if (!(isLoading || isFetching)) setFilteredData(data?.data?.results);
    }, [data]);

    useEffect(() => {
        if(name) {
            const nameData = data?.data.results.filter((v:any) => {
                const fullName = `${v.name.first} ${v.name.last}`.toLowerCase();
                return fullName.includes(name.toLowerCase());
            });
            setFilteredData(nameData);
        }
    }, [name]);
    const tableData = useMemo(() => name.length > 3 ? filteredData : data?.data?.results,[data, filteredData]);
    const handleRowClick = (data:any) => { setModalData(data);setModalVisible(true)} 
    return (
        <div>
            <SearchBar {...{ name, setName }}/>
            <div style={{ height: '75vh', overflow: 'auto'}}>
                {
                    isLoading || isFetching ? <Loading /> : !!tableData.length ? <Table {...{ columns, data: tableData, handleRowClick }}/> : <NoDataFound>No Data Found!</NoDataFound>
                }
            </div>
            <Modal {...{ modalVisible, setModalVisible }} >
                { modalVisible && <ModalContent data={modalData} />}
            </Modal>
        </div>
    );
}

export default UseQueryComp;