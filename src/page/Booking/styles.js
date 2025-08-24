import styled from "styled-components";

export const Wrap = styled.div`
    padding: 28px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Card = styled.div`
    background: #ffffff84;
    padding: 12px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const CardsBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const BoxButton = styled.div`
    display: flex;
    gap: 8px;
`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #333;
`;

export const Title = styled.h1`
     font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;
