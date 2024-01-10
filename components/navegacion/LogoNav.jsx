"use client";
import { useState, useEffect } from "react";
import tintaLogo from "@/public/LogoHorizontalNegro.svg";
import tintaLogoDark from "@/public/LogoHorizontalBlanco.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

export const dynamic = "force-dynamic";

function Logo({ width, height }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let src;

  switch (resolvedTheme) {
    case "light":
      src = tintaLogo;
      break;
    case "dark":
      src = tintaLogoDark;
      break;
    default:
      src = tintaLogo;
      break;
  }

  return (
    <div className="flex items-center justify-between w-full">
      <Image
        src={src}
        alt="Core Logo"
        width={width}
        height={height ? height : "auto"}
      />
    </div>
  );
}

export default Logo;
