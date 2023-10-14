import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import useSound from "use-sound";
import hoverSound from '../../../assets/sound/hoverSound.wav'
import slideSound from '../../../assets/sound/slideSound.mp3'
import { EffectCoverflow } from "swiper";
import SwiperItem from "./SwiperItem";
import { descProjects } from "../../../data/projectsData";
import { useMediaQueries } from "../../../hooks/useMediaQuery";

const SwiperComponent = React.memo(() => {
  const { size1300 } = useMediaQueries()
  const [playHover] = useSound(hoverSound, { volume: 0.05 });
  const [playSlide] = useSound(slideSound, { volume: 0.05 });
  return (
    <div>
      <Swiper
        grabCursor
        loop
        centeredSlides
        slidesPerView={size1300 ? 'auto' : 1.9}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        speed={500}
        modules={[EffectCoverflow]}
        onSlideChange={(playSlide)}
      >
        {descProjects.map(item => (
          <SwiperSlide key={item.title}>
            <SwiperItem playHover={playHover} title={item.title} linkDir={item.link} linkGH={item.github}
              photoSrc={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
})

export default SwiperComponent