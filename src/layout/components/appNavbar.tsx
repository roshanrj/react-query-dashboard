import React from 'react';
import styled from 'styled-components';

const NavBar:any = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #333;
    overflow: hidden;
    padding: 15px 20px;
    & .guest-name{
        color: #FFFFFF;
        background-color: #04AA6D;
        border-radius: 5px;
        cursor: pointer;
    }
    & .guest-name:hover{
        background-color: #ddd;
        color: black;
        
    }    
`; 

const HamburgerIcon:any = styled.button`
    width: 30px;
    height: 30px;
    color: inherit;
    cursor: pointer;
    &:hover{
        background-color: #ddd;
        color: black;
    }
`;

type navBarProp = {
    setDisplaySidebar: React.Dispatch<React.SetStateAction<boolean>>,
}

const AppNavbar:React.FC<navBarProp> = ({ setDisplaySidebar }) => {
    return(
        <NavBar>
            <div>
                <HamburgerIcon type="button" className="icon" onClick={() => setDisplaySidebar(prev => !prev)}>
                    <i className="fa fa-bars"></i>
                </HamburgerIcon>
                <span style={{ color: '#FFFFFF',verticalAlign: 'middle', padding: 5}}>Menu</span>
            </div>
            <div>
                <button type="button" className='guest-name'>Welcome RoshanRJ</button>
            </div>
        </NavBar>
    );
};

export default AppNavbar;