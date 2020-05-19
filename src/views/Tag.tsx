import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #FF9FBA;
  color: #fff;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
  
`;

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"></Icon>
        <span>编辑标签</span>
        <span></span>
      </Topbar>
      <InputWrapper>
        <Input label="标签名：" type="text" placeholder="标签名"
         value={tag.name}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};
export {Tag};
