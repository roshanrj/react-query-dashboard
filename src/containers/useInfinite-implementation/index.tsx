import React from 'react';
import axios from 'axios';
import SearchBar from 'components/searchBar';
import Table from 'components/table';
import Loading from 'components/loading';
import { useQuery } from 'react-query';

const fetchRandomUsers = ({ pageParam = 1 }) => axios.get(`https://randomuser.me/api/?page=${pageParam}&results=10`);
const columns = [
    {label: 'Last Name', key: 'name.first', type: 'TEXT'},
    {label: 'Gender', key: 'gender', type: 'TEXT'},
    {label: 'Email', key: 'email', type: 'TEXT'},
    {label: 'Phone No.', key: 'phone', type: 'NUMBER'}, 
    {label: 'Profile Pic', key: 'picture.thumbnail', type: 'IMAGE'}
];

const UseInfiniteQueryComp = ({ name, setName }:any) => {
    const { isLoading, isError, data, isFetching } = useQuery('random-users', fetchRandomUsers);
    return (
        <div>
            <SearchBar {...{ name, setName }} />
            <div>
                {
                    isLoading || isFetching ? <Loading /> : <Table {...{ columns, data: data.data?.results, onRowClick: () => {} }}/>
                }
            </div>
        </div>
    );
}

export default UseInfiniteQueryComp;