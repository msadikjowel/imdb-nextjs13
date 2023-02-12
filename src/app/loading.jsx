import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image width={200} height={200} src="spinner.svg" alt="loading..." />
    </div>
  );
}
