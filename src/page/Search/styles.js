import styled from "styled-components";

export const Wrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
`;

export const Input = styled.input`
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

export const Button = styled.button`
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #007bff;
    color: white;

    &:hover {
        background-color: #0056b3;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
`;
