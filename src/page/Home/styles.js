import { Link } from 'react-router-dom';
import styled from 'styled-components'


export const PromoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin-top: 18px;
`;

export const Promo = styled.div`
    padding: 20px;
    border-radius: 8px;
    background: linear-gradient(180deg, #ffffffbb, #f1f6ff9a);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);


    h3{
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
        color: #333;
    }

    p{
        font-size: 14px;
        color: #666;
        margin-bottom: 16px;
    }

    strong{
        font-size: 20px;
        font-weight: bold;
        color: #0d6401ff;
    }
`;

export const CTA = styled(Link)`
    display: inline-block;
    margin-top: 16px;
    padding: 10px 20px;
    border-radius: 8px;
    background: #007bff;
    color: #fff;
    text-decoration: none;

    &:hover {
        background: #0056b3;
    }
`;

export const Wrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 28px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const Text = styled.p`
    font-size: 20px;
    color: #333;
    margin-bottom: 24px;
`;

export const Section = styled.section`
    padding: 28px;
`;
