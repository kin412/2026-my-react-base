import { BoardData } from "@/types";
import BoardItem from "./board-item";

export default async function SearchResult({
  cond,
}: {
  cond: {
    title?: string;
    author?: string;
  };
}) {
  const params = new URLSearchParams();

  //값이 있을 때만 추가 (undefined나 빈 문자열 방지)
  if (cond.title) params.set("title", cond.title);
  if (cond.author) params.set("author", cond.author);

  const response = await fetch(
    //`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/v1/boards?title=${cond.title}&author=${cond.author}`,
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/v1/boards?${params.toString()}`,
    //force-cache를 하게되면 cond가 바뀜에 따라 동적으로 검색되는 것은 어쩔수가 없기때문에 static 페이지로 바꿀수는 없겠지만
    //최소한 동일한 검색조건 cond에 대해서는 데이터 캐시가 가능하다.
    //그리고 이렇게 데이터 캐시가 되면, 이파일의 다른 곳에서 동적인것이 없는경우는 해당 페이지도 빌드타임에 풀라우트 캐시가 적용될수 있음.
    { cache: "force-cache", next: { tags: ["board"] } },
  );
  if (!response.ok) {
    return <div>검색 오류</div>;
  }

  const result = await response.json();
  const { content } = result.data;
  console.log(result);
  console.log("---------------------");
  console.log(content);
  const boards: BoardData[] = content;

  return (
    <div>
      {/* <div>SearchResult</div>
      <div>title: {cond.title}</div>
      <div>author: {cond.author}</div>
      <div>List</div> */}
      {boards.map((board) => (
        <BoardItem key={board.id} {...board} />
      ))}
    </div>
  );
}
