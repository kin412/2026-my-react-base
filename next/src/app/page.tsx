import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-24">
      {/* 로그인 섹션 카드 */}
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          서비스 로그인
        </h1>

        {/* Next.js Link 컴포넌트로 버튼 구현 */}
        <Link
          href="/board/" // 이동할 경로
          className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          로그인
        </Link>

        <p className="mt-4 text-center text-sm text-gray-600">
          버튼을 누르면 이동합니다.
        </p>
      </div>
    </main>
  );
}
