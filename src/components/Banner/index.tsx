"use client";
import { bannerLinks } from "@/utils/data";
import styles from "./Banner.module.scss";
import Image from "next/image";

import Link from "next/link";
import { Button } from "../ui";
import Container from "../Container/Container";


export default function Banner() {
  return (
    <div className={styles.mainBanner}>

      {bannerLinks.map((item, i) => (
        <div
          key={i}
          className={styles.banner}>
          <div className="h-[360px]">
            <img src={item.logo} alt={item.title} />
          </div>

          <div className={styles.info}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>

          <Button variant={'outline'}>
            <Link href="'">Shop Now</Link>
          </Button>
        </div>
      ))}

    </div>
  );
}

