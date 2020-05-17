import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Add/TagsSection';
import {NoteSection} from './Add/NoteSection';
import {CategorySection} from './Add/CategorySection';
import {NumberPadSection} from './Add/NumberPadSection';

const MyLayout = styled(Layout)`
   display: flex;
   flex-direction: column;
`

function Add() {
  return (
    <MyLayout>
      <TagsSection>
      </TagsSection>
      <NoteSection>
        <label>
          <span>备注：</span>
          <input type="text" placeholder="加个备注呗"/>
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">保存</button>
          <button>.</button>
          <button>0</button>
          <button>xx</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}
export default Add;
