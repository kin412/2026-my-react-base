import { BoardData } from "@/types";
import Link from "next/link";
//import Link from "next/link";

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
    <table>
      <thead>
        <tr className="border-b hover:bg-gray-50 transition-colors">
          <td className="px-4 py-3 text-center text-sm text-gray-500">{id}</td>
          <td className="px-4 py-3 text-left font-medium text-gray-900">
            <Link href={`/board/${id}`}>{title}</Link>
          </td>
          <td className="px-4 py-3 text-center text-sm text-gray-600">
            {author}
          </td>
          <td className="px-4 py-3 text-center text-sm text-gray-400">
            {createdDate}
          </td>
        </tr>
      </thead>
    </table>
  );
}
