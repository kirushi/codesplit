import {
    NavLink
} from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    padding-top: 16px;
`;

export const CommonNavList = Nav.extend`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0 16px;
    box-sizing: border-box;
    margin: 0;
    width: 68px;
    background-color: ${(props) => props.theme.primary};
    p {
        font-size: 1.4rem;
        margin: 0;
    }
`;

export const NavList = Nav.extend`
    list-style: none;
    margin: 0;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 0;
    background-color: ${(props) => props.theme.primary};
    width: 100%;
`;

const activeClassName = "active";

export const NavListItem = styled(NavLink).attrs({
    activeClassName
})`
    color: ${props => props.theme.ternary};
    font-size: 1.4rem;
    text-decoration: none;
    padding: 1.0em;
    display: block;
    border-radius: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.1428571428571428;

    &:hover {
        background-color: rgba(54, 99, 58, 0.45);
    }
  
    &.${activeClassName} {
        background-color: rgba(54, 99, 58, 0.25);
    }
`;


export const TabbedNavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        display: inline-block;
        vertical-align: top;
        &:not(:last-child) {
            margin-right: 8px;
        }
    }
`;

export const TabbedNavListItem = styled(NavLink).attrs({
    activeClassName
})`
    color: ${props => props.theme.blue};
    font-size: 1.4rem;
    text-decoration: none;
    padding: 1.0em;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.1428571428571428;
    border-bottom: 3px solid transparent;

    &:hover {
        border-bottom: 3px solid ${props => props.theme.blue};
    }
  
    &.${activeClassName} {
        border-bottom: 3px solid ${props => props.theme.blue};
    }
`;