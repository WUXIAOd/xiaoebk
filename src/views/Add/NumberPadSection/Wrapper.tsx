import styled from 'styled-components';

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
     &.zero{ width: 50%; }
     &:nth-child(1){ background: #a8e6cf; }
     &:nth-child(2), &:nth-child(5){ background: #dcedc1; }
     &:nth-child(3), &:nth-child(6), &:nth-child(9){ background: #ffd3b6; }
     &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13){ background: #ffaaa5; }
     &:nth-child(12), &:nth-child(15){ background: #f19292; }
     }
     @media (max-height: 570px){
     > button{
     height: 40px;
     &.ok{
     height: 80px;
     }
     }
  }
  }
`;
export {Wrapper}
