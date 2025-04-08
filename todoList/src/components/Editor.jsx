import { useRef, useState } from "react";
import "../css/Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  //content의 초기값 ""
  const contentRef = useRef();
  //^얜 뭐지 그 이유는 바로 23번 줄에~!~!~!~!~!
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content == "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      {/* input 안에 ref를 쓰는 이유는 input을 변수화해서 나중에 갖다 쓰려고 */}
      {/* ref는 스크립트고 html이 아니기 때문에 css 참조해 따로 스타일 적용 불가 */}
      <input
        ref={contentRef}
        value={content}
        placeholder="새로운 Todo..."
        onChange={onChangeContent}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
