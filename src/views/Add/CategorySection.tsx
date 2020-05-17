import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  > ul {
  display: flex;
  background: #dcedc1;
    > li { width: 50%; text-align: center; padding: 16px 0; position: relative;
      &.selected::after{ content: '';position: absolute;display: block; height: 3px;width: 100%;bottom: 0;
        left: 0;background: #FF9FBA; }
    }
  }
`;

const CategorySection: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('-' | '+')[]>(['-','+']);
  const [category, setCategory] = useState('-')

  return (
    <Wrapper>
    <ul>
      {categoryList.map(c =>
      <li className={category === c ? 'selected' : ''}
          onClick={()=>{setCategory(c)}}
      >{categoryMap[c]}</li>
      )}
    </ul>
    </Wrapper>
  )
}
export {CategorySection}
