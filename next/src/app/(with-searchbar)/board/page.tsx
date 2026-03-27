import BoardItem from "@/components/board-item";
import Search from "@/components/searchbar";
import SearchResult from "@/components/searchResult";
import { BoardData } from "@/types";

async function BoardList() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/v1/boards`,
    {
      cache: "force-cache", //캐시는 계속함
      next: { tags: ["board"] },
    }, //온 디맨드. board라는 이름을 붙임. 글작성, 수정 시 revalidateTag
  );
  if (!response.ok) {
    return <div>조회중 오류 발생..</div>;
  }
  const result = await response.json();
  const { content } = result.data;
  console.log(result);
  console.log("---------------------");
  console.log(content);
  const boards: BoardData[] = content;
  return (
    <div>
      {boards.map((board) => (
        <BoardItem key={board.id} {...board} />
      ))}
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ title?: string; author?: string }>;
}) {
  const { title, author } = await searchParams;

  //검색어가 하나라도 있는지 확인
  const isSearching = !!(title || author);

  return (
    <div>
      <div>/board/page</div>
      <div>게시판</div>
      <div>title : {title}</div>
      <div>author : {author}</div>
      <Search />
      {/* 검색어가 있으면 검색 결과 페이지를, 아니면 기본 리스트를 보여줌 */}
      {isSearching ? <SearchResult cond={{ title, author }} /> : <BoardList />}
    </div>
  );
}
