import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
font-size: 16px;
background: #FDFAF1;
>li{
border-bottom: 1px solid #d5d5d9;
margin-left: 16px;
line-height: 20px;
padding:12px 16px 12px 0;
display: flex;
justify-content: space-between;
align-items: center;
}
`

const Button = styled.button`
font-size: 18px;border: none;padding: 8px 12px;
border-radius: 5px;background: coral;color: #fff;
`
const Center = styled.div`
display: flex; justify-content: center; align-items: center;
flex-direction: column;
`
const Space = styled.div`
height: 20px;
`

function Tags() {
  const {tags,setTags} = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <Icon name="right" ></Icon>
          </li>
        )}
      </TagList>
      <Center>
        <Space />
        <Button>新增标签</Button>
        <Space />
      </Center>
    </Layout>
  );
}
export default Tags;