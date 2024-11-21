"use client";
import React from "react";
import styles from "./Road.module.scss";
import Container from "@/components/Container/Container";
import { roadLinks } from "@/utils/data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useWindowSize } from "react-use";
import { PAGES_DASHBOARD } from "@/utils";

interface IRoadProps {
  className?: string;
}

export default function Road({ ...data }: IRoadProps) {
  const path = usePathname().replace("/payment", "");
  const { width } = useWindowSize();

  const roadLinksToRender =
    width < 480
      ? roadLinks.slice(
          path.includes(PAGES_DASHBOARD.STEP_THREE) ? 1 : 0,
          path.includes(PAGES_DASHBOARD.STEP_THREE) ? 3 : 2
        )
      : roadLinks;

  return (
    <div className={cn(data.className)}>
      <Container className={styles.road}>
        {roadLinksToRender.map((item, i) => (
          <div
            key={i}
            className={cn(
              styles.item,
              item.link.includes(path) && "opacity-30"
            )}
          >
            {item.icon}
            <p>
              <span>Step {item.index}</span>
              <span>{item.title}</span>
            </p>
          </div>
        ))}
      </Container>
    </div>
  );
}
