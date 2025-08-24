import styled from "styled-components";

export const Card = styled.div`
    background: linear-gradient(180deg, #ffffffbb, #f1f6ff9a);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const From = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #333;
`;

export const Depart = styled.div`
    font-size: 16px;
    color: #0000007e;
    font-weight: 500;
`;

export const Price = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #0d6401ff;
`;

export const Action = styled.div`
    display: flex;
    gap: 8px;
`;

export const Button = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background: #007bff;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #0056b3;
    }
`;
