import {useState} from 'react';

const useTags = () => { // 封装自定义 Hook
  const [tags, setTags] = useState<{id: number; name: string}[]>([
    {id: 1, name: '餐饮'},
    {id: 2, name: '住宿'},
    {id: 3, name: '服装'},
    {id: 4, name: '交通'}
  ])
  return{
    tags,setTags
  }
}
export {useTags}
