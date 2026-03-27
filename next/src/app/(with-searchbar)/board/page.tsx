import BoardItem from "@/components/board-item";
import Search from "@/components/searchbar";
import SearchResult from "@/components/searchResult";
import { boardService } from "@/services/board-service";
import { BoardData } from "@/types";

// async function BoardList() {
//   return (
//     <div>
//       {boards.map((board) => (
//         <BoardItem key={board.id} {...board} />
//       ))}
//     </div>
//   );
// }

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ title?: string; author?: string }>;
}) {
  const { title, author } = await searchParams;

  const boards = await boardService.getBoards({ title, author });

  //검색어가 하나라도 있는지 확인
  //const isSearching = !!(title || author);

  return (
    <div>
      <div>/board/page</div>
      <div>게시판</div>
      <div>title : {title}</div>
      <div>author : {author}</div>
      <Search />
      {/* 검색어가 있으면 검색 결과 페이지를, 아니면 기본 리스트를 보여줌 */}
      {/* {isSearching ? <SearchResult cond={{ title, author }} /> : <BoardList />} */}
      {boards.length > 0 ? (
        boards.map((board) => <BoardItem key={board.id} {...board} />)
      ) : (
        <div>조회된 데이터가 없습니다.</div>
      )}
    </div>
  );
}
