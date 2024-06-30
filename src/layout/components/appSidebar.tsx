/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isMobileDevice } from 'utils/utilityFunction';

const SideBar:any = styled.div`
    height: 100%;
    width: ${(props:any) => (props.visible ? '250px' : 0)};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
    & > a.link{
        background: #FFFFFF;
        opacity: 0.6;
    }
    & > a {
        padding: 8px 8px 8px 10px;
        text-decoration: none;
        font-size: 1.2rem;
        color: #818181;
        display: block;
        transition: 0.3s;
    }
    a:hover {
        color: #f1f1f1;
    }
    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
`;

const MobileBar:any = styled.div`
    height: ${(props:any) => (props.visible ? 'auto' : 0)};
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 60px;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    & > a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 1.2rem;
        color: #818181;
        display: block;
        transition: 0.3s;
    }
    a:hover {
        color: #f1f1f1;
    }
`;

type appDrawerProp = {
    displaySidebar: boolean;
    setDisplaySidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideDrawer: React.FC<appDrawerProp> = ({ displaySidebar, setDisplaySidebar }) => (
    <SideBar visible={displaySidebar}>
        <Link to="/use-query">Use Query Route</Link>
        <Link to="/use-infinite-query">Use Infinite Query Route</Link>
        <a href="javascript:void(0)" className="closebtn" onClick={() => setDisplaySidebar?.(false)}>&times;</a>
    </SideBar>
);


const MobileDrawer:React.FC<appDrawerProp> = ({ displaySidebar }) => (<MobileBar visible={displaySidebar}>
    <Link to="/use-query">Use Query Route</Link>
    <Link to="/use-infinite-query">Use Infinite Query Route</Link>
</MobileBar>);

const AppSidebar:React.FC<appDrawerProp> = ({ displaySidebar, setDisplaySidebar }) => {

    const Component = isMobileDevice() ? MobileDrawer : SideDrawer;
    return (
        <Component {...{ displaySidebar, setDisplaySidebar }} />
    );
};

export default AppSidebar;