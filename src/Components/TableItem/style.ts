import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
    background-color: ${props => props.color};
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
`;

export const Valeu = styled.div<{ color: string }>`
    color: ${props => props.color};
`;