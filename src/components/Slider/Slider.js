import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./slider.css";

export default function Slider({ slides }) {
  const [slide, setSlide] = useState(slides);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slide.length - 1;

    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, slide]);

  // useEffect(() => {
  //   let slider = setInterval(
  //     () => setCurrentIndex((prevState) => prevState + 1),
  //     9000
  //   );
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [currentIndex]);

  return (
    <section className="section">
      <div>
        <h2 className="title">title</h2>
      </div>
      <div className="section-center">
        {slide.map((slideIt, slideIndex) => {
          const { img, text, id } = slideIt;
          let position = "nextSlide";
          if (slideIndex === currentIndex) {
            position = "activeSlide";
          }
          if (
            slideIndex === currentIndex - 1 ||
            (currentIndex === 0 && slideIndex === slide.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <h4>{text}</h4>
              <img src={img} alt={text} />
              {/* <FaAngleRight /> */}
              <div className={`text-overlay ${position}`}>{`${currentIndex+1}/${slide.length}`}</div>
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setCurrentIndex((prevState) => prevState - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setCurrentIndex((prevState) => prevState + 1);
          }}
        >
          <FiChevronRight />
        </button>

      </div>
        <div className="wrapperPagination">
       { slide.map((it,ind)=>{
        return(
          <div className={`page ${currentIndex +1===it.id?'active':''}`} onClick={()=>{
            setCurrentIndex(it.id -1)
          }} key={ind}>{it.id}</div>
        )
       })}
        </div>
    </section>
  );
}
