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
  const updateTag = (id:number, obj: {name:string}) => {
    const index = findTagIndex(id);
    // react 不允许修改原数组
    // 深拷贝 tags 得到 tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
      // 把tagsClone 得第index删掉，换成(id：id，name:obj.name)
      tagsClone.splice(index, 1,{id:id,name:obj.name});
    setTags(tagsClone)
  };
  const deleteTag = (id: number) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    // 把tagsClone 得第index删掉，换成(id：id，name:obj.name)
    tagsClone.splice(index, 1);
    setTags(tagsClone)
  }
  return{
    tags,setTags, findTag, updateTag, findTagIndex, deleteTag }
}
export {useTags}
