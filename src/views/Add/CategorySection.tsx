import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  > ul {
  display: flex;
    > li { width: 50%; text-align: center; padding: 16px 0; position: relative;
      &.selected::after{ content: '';position: absolute;display: block; height: 3px;width: 100%;bottom: 0;
        left: 0;background:#4cd3c2;}
    }
  }
`;

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('-' | '+')[]>(['-','+']);
  const category = props.value;

  return (
    <Wrapper>
    <ul>
      {categoryList.map(c =>
        <li className={category === c ? 'selected' : ''}
          onClick={()=>{props.onChange(c)}}
          key={c}
        >{categoryMap[c]}</li>
      )}
    </ul>
    </Wrapper>
  )
}
export {CategorySection}
