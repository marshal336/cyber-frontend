"use client";
import React from "react";
import Link from "next/link";
import styles from "./Category.module.scss";
import 'swiper/css';
import useValidWidth from "@/hooks/use-valid-width";
import Container from "../Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { categoryLinks } from "@/utils/data";
import { cn } from "@/lib/utils";

export default function Category() {
  const sliderRef = React.useRef<any>(null);
  const slidesPerView = useValidWidth()

  return (
    <>
      <div className={styles.swiper}>
        <Container className={cn(styles.container)}>

          <div className={styles.button}>
            <h2>Browse By Category</h2>
            <div className={styles.div}>
              <FaChevronLeft className={styles.arrow} onClick={() => sliderRef.current.swiper.slidePrev()} />
              <FaChevronRight className={styles.arrow} onClick={() => sliderRef.current.swiper.slideNext()} />
            </div>
          </div>
          <Swiper
            ref={sliderRef}
            className={styles.Swiper}
            slidesPerView={slidesPerView}
            modules={[Navigation]}
          >
            {categoryLinks.map(({ icon, title, link }, i) => (
              <SwiperSlide className={styles["swiper-slide"]} key={i}>
                <Link href={link} key={i} className={styles["swiper-icon"]}>
                  {icon}
                  {title}
                </Link>
              </SwiperSlide>
            ))}

          </Swiper>
        </Container>
      </div>
    </>
  );
}
