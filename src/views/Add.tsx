import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  >ol{
    margin: 0 -12px;
    >li{
      background: #FF9FBA;border-radius: 18px;
      display: inline-block;padding: 3px 18px;
      font-size: 14px;margin: 8px 12px;
    }
  }
  > button{
    background: none;border: none;
    padding: 2px 4px;border-bottom: 1px solid #333;
    color: #666;margin-top: 8px;
  }
`;
const NoteSection = styled.section`
  background: #fff;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    > span{
      margin-right: 16px;white-space: nowrap;
    }
    > input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
const CategorySection = styled.section`
  > ul {
  display: flex;
  background: #dcedc1;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';position: absolute;display: block;
        height: 3px;width: 100%;bottom: 0;
        left: 0;background: #FF9FBA;
      }
    }
  }
`;
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
     background: #fff;
     font-size: 36px;
     line-height: 72px;
     text-align: right;
     padding: 0 16px;
     box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.5),//上阴影
                 inset 0 5px 5px -5px rgba(0,0,0,0.5);// 下阴影
  }
  > .pad{
     > button{
     font-size: 24px;
     float: left;
     width: 25%;height: 64px;border: none;
     &.ok{
     height: 128px;
     float: right;
     }
     &:nth-child(1){
        background: #a8e6cf;
     }
     &:nth-child(2),
     &:nth-child(5){
        background: #dcedc1;
     }
     &:nth-child(3),
     &:nth-child(6),
     &:nth-child(9){
        background: #ffd3b6;
     }
     &:nth-child(4),
     &:nth-child(7),
     &:nth-child(10),
     &:nth-child(13){
        background: #ffaaa5;
     }
     &:nth-child(12),
     &:nth-child(15){
        background: #f19292;
     }
     }
  }
`;


function Add() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>餐饮</li>
          <li>住宿</li>
          <li>服装</li>
          <li>交通</li>
        </ol>
        <button>添加标签</button>
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
    </Layout>
  );
}
export default Add;
