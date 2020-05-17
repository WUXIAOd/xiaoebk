import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background: #fff;
  padding: 0 16px;
  font-size: 14px;
  >label{ display: flex; align-items: center;
    > span{ margin-right: 16px;white-space: nowrap;
    }
    > input{ display: block; width: 100%; height: 72px; background: none; border: none;
    }
  }
`;

const NoteSection: React.FC = () => {
  const [note, setNote] = useState('')
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if(refInput.current !== null){
      setNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注：</span>
        <input type="text" placeholder="加个备注呗" defaultValue={note}
               ref={refInput} onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}
export {NoteSection}
