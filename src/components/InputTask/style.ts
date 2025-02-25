import styled from "styled-components";

export const TextField = styled.input`
    width: 740px;
    height: 100%;
    background-color:  ${({ theme }) => theme.colors.gray500};
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    line-height: 140%;
    outline: none;
    text-indent: 24px;
`;

export const TextFieldContainer = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    gap: 10px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 160px;
    z-index: 20;
`;

export const SubmitButton = styled.button`
    width: 125px;
    height: 100%;
    background-color:  ${({ theme }) => theme.colors.blueDark};
    color: ${({ theme }) => theme.colors.gray100};
    font-size: 18px;
    line-height: 140%;
    border: none;
    cursor: pointer;
    border-radius: 12px;
`
export const GeneralContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 180px;
    overflow: hidden;
`;

export const InfoContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    width: 875px;
    position: fixed;
    top: 280px;
    z-index: 10;
    padding: 10px;
`;

export const BlueParagraph = styled.p`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin-right: 8px;
`;

export const PurpleParagraph = styled.p`
    color: ${({ theme }) => theme.colors.purple};
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin-right: 8px;
`;

export const Badge = styled.div`
    min-width: 24px;
    width: auto;
    padding: 6px;
    border-radius: 10px;
    background-color:  ${({ theme }) => theme.colors.gray400};
    display: flex;
    justify-content: center;
    align-itens: center;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray200};
`;
