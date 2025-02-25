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

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    display: none;
`;

export const CustomCheckbox = styled.span<{ checked: boolean }>`
    width: 20px;
    height: 20px;
    border: 2px solid ${(props) => (props.checked ? "#5E60CE" : "#4EA8DE")};
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background-color: ${(props) => (props.checked ? "#5E60CE" : "transparent")};
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const TaskText = styled.span<{ checked: boolean }>`
    text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
    margin-left: 10px;
`;

export const DeleteButton = styled.button`
    background-color:  ${({ theme }) => theme.colors.gray500};
    cursor: pointer;
    border: none;
`
