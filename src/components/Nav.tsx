import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  background: #fff;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul {
  display:flex;
    > li {
      width: 33.3333%;
      text-align: center;
      > a {
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon{
          width: 24px;
          height: 24px;
        }
        &.selected{
        color: #FF9FBA;
        .icon {
          fill: #FF9FBA;
        }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"></Icon>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="selected">
            <Icon name="add"></Icon>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/chart" activeClassName="selected">
            <Icon name="chart"></Icon>
            账单
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
