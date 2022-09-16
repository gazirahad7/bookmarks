import styled from 'styled-components';

export const Container = styled.div`
   background-color: var(--body-color);
   `;

export const SideNavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    background: var(--sidebar-color);
    transition: var(--tran-05);
    z-index: 100; 
   
`;

export const CollationContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    `;
