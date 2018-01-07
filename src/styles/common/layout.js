import styled from 'styled-components';

const offset = '300px';

export const RootContainer = styled.div``;

export const Aside = styled.aside`
    position: fixed;
    height: 100vh;
    left: 0;
    display: flex;
    flex-direction: row;
    width: ${offset};
    background-color: white;
`;

export const Main = styled.main`
    position: absolute;
    left: ${offset};
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background-color: ${props => props.theme.ternary};
    width: calc(100% - ${offset});
`;

export const ContainerPadded = styled.div`
    padding: 15px 20px;
`;