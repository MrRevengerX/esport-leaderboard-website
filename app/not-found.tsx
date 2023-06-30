import Link from "next/link";
import { TiWarning } from "react-icons/ti";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-6 px-5">
      <TiWarning className="text-7xl text-yellow-500" />
      <h2 className="text-center text-4xl text-white">
        Oooops, this page doesn&#39;t exist.
      </h2>
      <Link
        href="/"
        className="mt-5 flex items-center gap-x-3 text-primary600 transition-colors duration-300 ease-in-out hover:text-white"
      >
        <FiArrowLeft /> Back to Home
      </Link>
    </div>
  );
}
