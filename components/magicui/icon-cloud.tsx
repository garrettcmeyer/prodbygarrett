"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

interface DynamicCloudProps {
  iconSlugs: string[];
  onIconClick: (slug: string) => void;
  // ... other props
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
      paddingLeft: "20%", // Add padding to move content to the right
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2.5 ,
    activeCursor: "pointer",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    freezeActive: true,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string, onClick: () => void) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => {
        e.preventDefault();
        onClick();
      },
    },
  });
};

export const renderCustomPngIcon = (onClick: () => void) => {
  return (
    <div style={{ width: 42, height: 42 }} onClick={onClick}>
      <Image
        src="/icons/ableton.png"
        alt="Ableton"
        width={42}
        height={42}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default function IconCloud({ iconSlugs, onIconClick }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    const icons = Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light", () => onIconClick(icon.slug))
    );

    // Add the custom PNG icon
    icons.push(renderCustomPngIcon(() => onIconClick("ableton")));

    return icons;
  }, [data, theme, onIconClick]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
