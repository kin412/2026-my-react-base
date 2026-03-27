import { BoardData } from "@/types";

export default function BoardItem({
  id,
  type,
  title,
  content,
  author,
  createdDate,
  lastModifiedDate,
}: BoardData) {
  return (
    <div>
      {id}||{title}||{author}||{createdDate}
    </div>
  );
}
