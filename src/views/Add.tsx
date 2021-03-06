import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Add/TagsSection';
import {NoteSection} from './Add/NoteSection';
import {CategorySection} from './Add/CategorySection';
import {NumberPadSection} from './Add/NumberPadSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
   display: flex;
   flex-direction: column;
`;

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}

const CategoryWrapper = styled.div`
  background: #FF9FBA;
`

function Add() {
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submit = () => {
    if(addRecord(selected)){
      alert('保存成功');
      setSelected(defaultFormData);
    }
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={ tagIds => onChange(
                     {tagIds}
                   )}
      />
      <NoteSection value={selected.note}
                   onChange={ note => {
                     onChange({ note});
                   }}
      />
      <CategoryWrapper>
        <CategorySection value={selected.category}
                         onChange={ category => {
                           onChange({category})
                         } }
        />
      </CategoryWrapper>
      <NumberPadSection value={selected.amount}
                        onChange={amount => {onChange({ amount })} }
                        onOk={submit}
      />
    </MyLayout>
  );
}

export default Add;
