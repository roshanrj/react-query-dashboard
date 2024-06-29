import React from 'react';
import styled from 'styled-components';

const ModalData = styled.div`
    h2{
        background-color: #009879;
        color: #ffffff;
        width: 30%;
        padding: 0 5px;
    }
    .modal-data{
        display: flex;
        flex-direction: column;
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

const ModalContent = ({ data }:any) => {
    return (
        <ModalData>
            <div className='modal-header'><h2>User Details:</h2></div>
            <div className='modal-data'>
                <div>
                    <img src={data.picture.medium} alt={`${data.name.first} image`} loading="lazy" />
                </div>
                <div>
                    <div className='fields'>
                        <span className='label'>Firstname</span><span>{data.name.first}</span>
                        <span className='label'>Lastname</span><span>{data.name.last}</span>
                    </div>
                    <div className='fields'>
                        <span className='label'>DOB</span><span>{new Date(data.dob.date).toLocaleString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                        <span className='label'>Age</span><span>{data.dob.age}</span>
                    </div>
                    <div className='fields'>
                        <span className='label'>City</span><span>{data.location.city}</span>
                        <span className='label'>State</span><span>{data.location.state}</span>
                    </div>
                    <div className='fields'>
                        <span className='label'>Country</span><span>{data.location.country}</span>
                        <span className='label'>State</span><span>{data.location.state}</span>
                    </div>
                    <div className='fields'>
                        <span className='label'>Postal Code</span><span>{data.location.postcode}</span>
                    </div>
                </div>
            </div>
        </ModalData>
    );
};

export default ModalContent;