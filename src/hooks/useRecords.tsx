import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem =  {
  tagIds : number[]
  note: string
  category: '+' | '-'
  amount: number
  createAt: string  //ISO 8601
}
type newRecordItem = Omit<RecordItem,'createAt'>

export const useRecords = () =>{
  const [records,setRecords] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  },[])

  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records));
  }, [records])
  const addRecord = (newRecord: newRecordItem) => {
    if(0 >= newRecord.amount){
      alert('请输入金额');
      return false;
    }
    if(newRecord.tagIds.length === 0){
      alert('请选择一个标签');
      return false;
    }
    const record = {...newRecord, createAt: (new Date()).toISOString()};
    setRecords([...records,record]);
    return true
  };

  return {records, addRecord}
}
