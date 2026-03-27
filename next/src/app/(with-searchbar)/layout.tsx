import Link from "next/link";
import { ReactNode } from "react";

// function Header() {
//   return (
//     <div>
//       <div>
//         <Link href={"/board/"}>게시판</Link>
//         ||
//         <Link href={"/search/"}>서치</Link>
//       </div>
//     </div>
//   );
// }

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
