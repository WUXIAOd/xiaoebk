import styled from 'styled-components';
import React, {useState} from 'react';

type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['餐饮','住宿','服装','交通'])
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('新标签名为：');
    if(tagName !== null){
      setTags([...tags, tagName])
    }
  };
  // 如果 tag 已被选中，就复制没有被选中的 tag ，作为新的 selectedTags
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)
    if(index >= 0){
      props.onChange(selectedTags.filter(t => t !== tag))
    }else{
      props.onChange([...selectedTags,tag])
    }
  };
  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={()=>{onToggleTag(tag)}}
              className={ getClass(tag) }>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>添加标签</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px; flex-grow: 1;
  display: flex;flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{
    margin: 0 -12px;
    >li{ color:white;background: lightslategray;border-radius: 18px; display: inline-block;padding: 3px 18px; font-size: 14px;margin: 8px 12px;
     &.selected{ background: #F19292; }
    }
  }
  > button{ background: none; border: none; padding: 2px 4px; border-bottom: 1px solid #333; color: #666; margin-top: 8px;
  }
`;

export {TagsSection}
