import styled from "styled-components";

export const TaskViewCard = styled.div`
    width: 875px;
    height: 60px;
    background-color:  ${({ theme }) => theme.colors.gray500};
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    line-height: 140%;
    padding: 12px;
    outline: none;
    display: flex;
`;

export const TaskViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 120px;
`;

export const TaskViewContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;
