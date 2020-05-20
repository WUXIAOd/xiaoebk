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
  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]
  const findTagIndex = (id:number) => {
    let result = -1;
    for(let i=0; i<tags.length; i++){
      if(tags[i].id === id){
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id:number, {name}: {name:string}) => {
    setTags(tags.map(tag => tag.id === id ? {id,name:name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  }
  return{
    tags,setTags, findTag, updateTag, findTagIndex, deleteTag }
}
export {useTags}
