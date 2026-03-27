import { boardService } from "@/services/board-service";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  //const numbericId = parseInt(id, 10);
  const board = await boardService.getBoardDetail(id);
  return (
    <div>
      <div>상세페이지</div>
      <div>{board.id}</div>
      <div>{board.title}</div>
      <div>{board.content}</div>
      <div>{board.author}</div>
      <div>{board.createdDate}</div>
      <div>
        <Link href={"/board"}>목록으로</Link>
      </div>
    </div>
  );
}
