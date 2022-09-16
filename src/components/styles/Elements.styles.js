import styled from 'styled-components';

export const sideBarHeader = styled.div`
    display: flex;

    `;

export const SideBarLi = styled.li`
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
  `;

export const SideBarIcon = styled.span`
  min-width: 60px;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--text-color);
  transition: var(--tran-03);
`;
