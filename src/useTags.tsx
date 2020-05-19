import {useState} from 'react';
import {creatId} from './lib/creatId';

const defaultId = [
  {id: creatId(), name: '餐饮'},
  {id: creatId(), name: '住宿'},
  {id: creatId(), name: '服装'},
  {id: creatId(), name: '交通'}
]

const useTags = () => { // 封装自定义 Hook
  const [tags, setTags] = useState<{id: number; name: string}[]>(defaultId)
  return{
    tags,setTags
  }
}
export {useTags}
