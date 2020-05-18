import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if(text === null){return;}
    if(text ===  '保存'){return;}
    if('123456789.'.split('').concat(['退格','清空']).indexOf(text) >= 0){
        setOutput(generateOutput(text, output))
    }
  }
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>退格</button>
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
