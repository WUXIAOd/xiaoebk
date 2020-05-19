import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #FF9FBA;
  color: #fff;
`

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
      <label>
        <span>标签名：</span>
        <input type="text" placeholder={tag.name}
        />
      </label>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  );
};
export {Tag};
