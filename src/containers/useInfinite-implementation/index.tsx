import React, { useEffect, useMemo, useState } from 'react';
import SearchBar from 'components/searchBar';
import Table from 'components/table';
import Loading from 'components/loading';
import { useInfiniteQuery } from 'react-query';
import { fetchUsersByParams } from 'utils/apiHelperFunctions';
import ModalContent from 'components/modalContent';
import Modal from 'components/modal';
import styled from 'styled-components';

type columnType = {
    label: string,
    key: string,
    type: 'TEXT' | 'NUMBER' | 'IMAGE'
}

const columns: Array<columnType> = [
    {label: 'First Name', key: 'name.first', type: 'TEXT'},
    {label: 'Last Name', key: 'name.first', type: 'TEXT'},
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

const LoadMoreButton = styled.button`
    color: #FFFFFF;
    background-color: #04AA6D;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 20px;
    margin-top: 10px;
    width: 200px;
`;

const DivCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const UseInfiniteQueryComp = () => {
    const [name, setName] = useState<string>('');
    const [filteredData, setFilteredData] = useState<Array<Object>>([]);
    const [modalData, setModalData] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const {
        data,
        isError,
        isLoading,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        refetch,
      }:any = useInfiniteQuery(
    'users',
    ({ pageParam = 1 }) => fetchUsersByParams({ pageParam }),
    {
        getNextPageParam: (lastPage, pages) => {
        return lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : false;
        },
        staleTime: 60 * 60 * 1000, // Data is considered fresh for 60 minutes
        cacheTime: 10 * 60 * 1000, // Cache is kept for 10 minutes
        refetchOnWindowFocus: false, // Prevents refetching on window focus
        refetchOnMount: true, // Prevents refetching on component mount
        refetchOnReconnect: false, // Prevents refetching on reconnect
        //enabled: false, // Only run the query if there is a search term
    });

    useEffect(() => {
        refetch();
    }, [refetch]);

    useEffect(() => {
        if (!(isLoading || isFetching)) setFilteredData(data?.pages?.[0]?.results);
    }, [data, isLoading, isFetching]);
    
    useEffect(() => {
        //As searching by query param is not supported so used filtering out mechanism
        if(name && name.length >= 3) {
            const nameData = data?.pages?.[0]?.results.filter((v:any) => {
                const fullName = `${v.name.first} ${v.name.last}`.toLowerCase();
                return fullName.includes(name.toLowerCase());
            });
            setFilteredData(nameData);
        }
    }, [name]);
    const tableData = useMemo(() => name.length >= 3 ? filteredData : data?.pages?.[0]?.results,[name, filteredData, data]);
    const handleRowClick = (data:any) => { setModalData(data);setModalVisible(true)} 
    return (
        <div>
            <h3>Implementation using useInfiniteQuery Hook</h3>
            <SearchBar {...{ name, setName }} />
            <div style={{ height: '75vh', overflow: 'auto'}}>
                {isError && <div>Error: {isError?.message}</div>}
                {
                    isLoading || isFetching ? <DivCenter><Loading /></DivCenter> : (Array.isArray(tableData) && tableData.length) ? <Table {...{ columns, data: tableData, handleRowClick }}/> : <NoDataFound>No Data Found!</NoDataFound>
                }
            </div>
            <DivCenter>
            {hasNextPage && (
                <LoadMoreButton type='button' onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                    {isFetchingNextPage ? 'Loading more...' : 'Load More'}
                </LoadMoreButton>
                )}
            </DivCenter>
            <Modal {...{ modalVisible, setModalVisible }} >
                { modalVisible && <ModalContent data={modalData} />}
            </Modal>
        </div>
    );
}

export default UseInfiniteQueryComp;