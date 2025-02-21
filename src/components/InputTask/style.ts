import styled from "styled-components";

export const TextField = styled.input`
    width: 740px;
    height: 60px;
    background-color:  ${({ theme }) => theme.colors.gray500};
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    line-height: 140%;
    padding: 12px;
    outline: none;
`;

export const TextFieldContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 170px;
`;

export const SubmitButton = styled.button`
    width: 125px;
    height: 84px;
    padding: 12px;
    background-color:  ${({ theme }) => theme.colors.blueDark};
    color: ${({ theme }) => theme.colors.gray100};
    font-size: 18px;
    line-height: 140%;
    border: none;
    border-radius: 12px;

`