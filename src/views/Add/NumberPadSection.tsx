import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output{ background: #fff; font-size: 36px; line-height: 72px; text-align: right; padding: 0 16px;
     box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.5),//上阴影
                 inset 0 5px 5px -5px rgba(0,0,0,0.5);// 下阴影
  }
  > .pad {
     > button { font-size: 24px;float: left;width: 25%;height: 64px;border: none;
     &.ok { height: 128px;float: right; }
     &:nth-child(1){ background: #a8e6cf; }
     &:nth-child(2), &:nth-child(5){ background: #dcedc1; }
     &:nth-child(3), &:nth-child(6), &:nth-child(9){ background: #ffd3b6; }
     &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13){ background: #ffaaa5; }
     &:nth-child(12), &:nth-child(15){ background: #f19292; }
     }
  }
`;
const NumberPadSection:React.FC = () => {
  const [output, setOutput] = useState('0');
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if(text === null){return}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(output === '0'){
          setOutput(text);
        }else{
          setOutput(output + text);
        }
        break;
      case '删除':
        console.log('删除')
        break;
      case '清空':
        console.log('清空')
        break;
      case '保存':
        console.log('保存')
        break;
      case '.':
        console.log('.')
        break;
    }
  }
  return (
    <Wrapper>
      <div className="output">{{output}}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
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
    </Wrapper>
  )
}
export {NumberPadSection}
