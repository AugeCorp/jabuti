import styled from 'styled-components';

const Options = styled.View`
    width: 100%;
    height: 100%;
    padding-left: 20%;
    padding-top: 3%;
    background: ${props => props.backgroundColor || "#FFF"};
    align-items: flex-start;
    position: absolute;
    border-radius: 5px;
    elevation: 15;
`;

export default Options;