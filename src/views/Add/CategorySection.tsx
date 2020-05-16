import styled from 'styled-components';

const CategorySection = styled.section`
  > ul {
  display: flex;
  background: #dcedc1;
    > li { width: 50%; text-align: center; padding: 16px 0; position: relative;
      &.selected::after{ content: '';position: absolute;display: block; height: 3px;width: 100%;bottom: 0;
        left: 0;background: #FF9FBA; }
    }
  }
`;
export {CategorySection}
