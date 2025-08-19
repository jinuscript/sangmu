import React from "react";

const WritePage = () => {
  return (
    <main>
      <form>
        {/* 이름 */}
        <div>
          <label htmlFor="">이름</label>
          <input type="text" />
        </div>
        {/* 이름 */}
        <div>
          <label htmlFor="">사건유형</label>
          <input type="text" />
        </div>
        {/* 이름 */}
        <div>
          <label htmlFor="">연락처</label>
          <input type="string" />
        </div>
        {/* 제목 */}
        <div>
          <label htmlFor="">제목</label>
          <input type="text" />
        </div>
        {/* 내용 */}
        <div>
          <label htmlFor="">내용</label>
          <textarea />
        </div>
        {/* 비밀번호 */}
        <div>
          <label htmlFor="">비밀번호</label>
          <input type="password" />
        </div>

        <button>글쓰기</button>
      </form>
    </main>
  );
};

export default WritePage;
