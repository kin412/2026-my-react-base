"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  //useSearchParams - 읽기 전용
  const searchParams = useSearchParams();
  //값이 있을때만 파라미터에 추가. URLSearchParams - 수정가능
  const params = new URLSearchParams();

  const [title, setTitle] = useState(searchParams.get("title") || "");
  const [author, setAuthor] = useState(searchParams.get("author") || "");
  const router = useRouter();

  // 💡 [실무 팁] 뒤로가기/앞으로가기/새로고침 시 입력창 동기화
  // 주소창이 바뀌면 입력창의 state도 같이 업데이트해줍니다.
  useEffect(() => {
    setTitle(searchParams.get("title") || "");
    setAuthor(searchParams.get("author") || "");
  }, [searchParams]);

  const onSearch = () => {
    if (title) params.set("title", title);
    if (author) params.set("author", author);

    const queryString = params.toString();

    //router.push(`/board?title=${title}&author=${author}`);
    router.push(`/board${queryString ? `?${queryString}` : ""}`);
  };

  const onInit = () => {
    setTitle("");
    setAuthor("");
    router.push(`/board`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div>
      <div>
        제목
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={onKeyDown}
        />
        작성자
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSearch}>검색</button>
        <button onClick={onInit} style={{ marginLeft: "10px" }}>
          초기화
        </button>
      </div>
    </div>
  );
}
