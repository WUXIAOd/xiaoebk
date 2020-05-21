import {useEffect, useRef, useState} from 'react';
import {creatId} from '../lib/creatId';
import {useUpdate} from './useUpdate';

const useTags = () => { // 封装自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: creatId(), name: '餐饮'},
        {id: creatId(), name: '住宿'},
        {id: creatId(), name: '服装'},
        {id: creatId(), name: '交通'},
      ]
    }
    setTags(localTags);
  }, []);// 组件挂载时执行

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: name} : tag));
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const addTag = () => {
    const tagName = window.prompt('新标签名为：');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: creatId(), name: tagName}]);
    }
  };

  const getName = (id:number) =>{
    const tag = tags.filter(t => t.id === id)[0]
    return tag ? tag.name : '';
  }
  return {
    tags, setTags,getName, findTag, updateTag, findTagIndex, deleteTag, addTag
  };
};
export {useTags};
