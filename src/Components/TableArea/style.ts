import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    margin-top: 10px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
`;

export const TableHeadColumn = styled.th<{ width?: number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
`;