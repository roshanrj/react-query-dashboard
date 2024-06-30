import React from 'react';
import styled from 'styled-components';

const ModalPopup:any = styled.div`
  display: ${(props: any) => props.visible ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  transition: 0.5s ease-out;
  border-radius: 15px;
  .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 60%;
        border-radius: 20px;
        position: relative;
    }
    .close {
        color: #aaa;
        font-size: 28px;
        font-weight: bold;
        background: transparent;
        outline: none;
        border: none;
        position: absolute;
        right: 0;
        top: 0;
        margin: 10px;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Modal = ({ modalVisible, setModalVisible, children }: any) => {
    return (
        <ModalPopup visible={modalVisible}>
            <div className='modal-content'>
                <div><button type='button' className="close" onClick={() => setModalVisible(false)}>&times;</button></div>
                <div>{ children }</div>
            </div>
            {/* <span className="close">&times;</span> */}
        </ModalPopup>
    );
};

export default Modal;