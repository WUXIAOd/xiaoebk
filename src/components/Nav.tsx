import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
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
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/bill">
            <Icon name="bill"></Icon>
            账单
          </Link>
        </li>
        <li>
          <Link to="/add">
            <Icon name="add"></Icon>
            记账
          </Link>
        </li>
        <li>
          <Link to="/chart">
            <Icon name="chart"></Icon>
            数据
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
