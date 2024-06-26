import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: '404 - ページが見つかりません',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <div className="text-[#e85444] flex items-center gap-5 mt-[-50px] sm:mt-[-150px]">
        <span className="text-[100px] sm:text-[200px]">4</span>
        <span className="text-[100px] sm:text-[200px]">0</span>
        <span className="text-[100px] sm:text-[200px]">4</span>
      </div>
      <h2 className="dark:text-white text-black font-semibold text-xl sm:text-3xl">
        お探しのページは見つかりませんでした
      </h2>
      <Link
        href="/"
        className="dark:text-white dark:hover:text-slate-300 underline transition-colors duration-300 text-sm sm:text-base"
      >
        ホームへ戻る
      </Link>
    </div>
  );
}
