import Slider from "../../components/Slider/Slider";
import style from "./content.module.css";

const slides = [
  {
    id: 1,
    img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    text: "Caption Text 1",
  },
  {
    id: 2,
    img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    text: "Caption Text 2",
  },
  {
    id: 3,
    img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    text: "Caption Text 3",
  },
];

export default function SliderWrapper() {
  return (
    <div className={style.content}>
    
      <Slider
        slides={slides}
        // loop={true}
        // navs={true}
        // pags={true}
        // auto={true}
        // stopMouseHover={true}
        // delay={3}
      />
    </div>
  );
}
