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
    outline: none;
    display: flex;
`;

export const TaskViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin-top: 200px;
    padding-bottom: 20px;
`;

export const TaskViewContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 12px;
    text-indent: 24px;
`;
