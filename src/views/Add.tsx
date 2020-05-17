import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Add/TagsSection';
import {NoteSection} from './Add/NoteSection';
import {CategorySection} from './Add/CategorySection';
import {NumberPadSection} from './Add/NumberPadSection';

const MyLayout = styled(Layout)`
   display: flex;
   flex-direction: column;
`

function Add() {
  return (
    <MyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  );
}
export default Add;
