import { useState } from 'react';
import EditorComponent from './EditorComponent';
const Form = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 작성한 글 데이터를 서버로 보내는 로직 구현
  };

  return (
    <form onSubmit={handleSubmit}>
      <EditorComponent value={content} onChange={setContent} />
      <button type="submit">보내기</button>
      <button type="submit"> 취소</button>
    </form>
  );
};

export default Form;