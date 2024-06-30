import React from 'react';

const UserDetails = ({ data }:any) => {
    return (
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
    )
};

export default UserDetails;