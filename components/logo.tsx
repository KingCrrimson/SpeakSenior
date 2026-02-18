import Image from "next/image";
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/logo.svg"
      alt="Logo"
      width={200}
      height={60}
      draggable={false}
    />
  );
}