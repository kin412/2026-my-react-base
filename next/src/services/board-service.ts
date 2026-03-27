import { BoardData } from "@/types";

export const boardService = {
  //게시글 조회
  async getBoards(cond?: {
    title?: string;
    author?: string;
  }): Promise<BoardData[]> {
    const params = new URLSearchParams();
    // 조건이 있을 때만 쿼리스트링 추가
    if (cond?.title) params.set("title", cond.title);
    if (cond?.author) params.set("author", cond.author);

    console.log(
      "boardService.getBoard || title : ",
      cond?.title,
      " || author : ",
      cond?.author,
    );

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/v1/boards?${params.toString()}`,
      {
        cache: "force-cache", //캐시는 계속함
        next: { tags: ["board"] },
      }, //온 디맨드. board라는 이름을 붙임. 글작성, 수정 시 revalidateTag
    );
    if (!response.ok) {
      //return <div>조회중 오류 발생..</div>;
      throw new Error("게시글 조회중 오류가 발생했습니다.");
    }
    const result = await response.json();
    //const { content } = result.data;
    //const boards: BoardData[] = content;

    return result.data.content;
  },
};
