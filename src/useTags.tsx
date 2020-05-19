import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['餐饮','住宿','服装','交通'])
  return{
    tags,setTags
  }
}
export {useTags}
