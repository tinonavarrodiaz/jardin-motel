import image01 from '../img/slider-images/image01.jpg';
import image02 from '../img/slider-images/image02.jpg';
import image03 from '../img/slider-images/image03.jpg';
import image04 from '../img/slider-images/image04.jpg';
import axios from 'axios';
import logo from '../img/logo2.png';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';

const images = [image01, image02, image03, image04];

const Home = () => {
  const sliders = useRef();
  const buttonNext = useRef();
  const dots = useRef();
  const [sliderEl, setSliderEl] = useState(null);
  const [sliderImg, setSliderImg] = useState(null);
  const [dotEl, setDotEl] = useState(null);
  const [dotItems, setDotItems] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    setSliderEl(sliders.current);
    setSliderImg([...sliders.current.querySelectorAll('img.img-slide')]);
    setDotEl(dots.current);
    setDotItems([...dots.current.querySelectorAll('li')]);

    setInterval(() => {
      buttonNext.current.click();
    }, 5000);
    // axios
    //   .get('https://contador.up.railway.app/')
    //   .then((res) => {
    //     let c = res.data.cout;
    //     setCount(c);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    // });
  }, []);

  const sliderActionNext = (e) => {
    const total = sliderImg.length;
    const active = sliderEl.querySelector('img.is-active');
    const index = sliderImg.indexOf(active);
    sliderImg.map((img) => img.classList.remove('is-active'));
    dotItems.map((li) => li.classList.remove('is-active'));
    if (index < total - 1) {
      sliderImg[index + 1].classList.add('is-active');
      dotItems[index + 1].classList.add('is-active');
    } else {
      sliderImg[0].classList.add('is-active');
      dotItems[0].classList.add('is-active');
    }
  };

  const sliderActionPrev = (e) => {
    const total = sliderImg.length;
    const active = sliderEl.querySelector('img.is-active');
    const index = sliderImg.indexOf(active);
    sliderImg.map((img) => img.classList.remove('is-active'));
    dotItems.map((li) => li.classList.remove('is-active'));
    if (index > 0) {
      sliderImg[index - 1].classList.add('is-active');
      dotItems[index - 1].classList.add('is-active');
    } else {
      sliderImg[total - 1].classList.add('is-active');
      dotItems[total - 1].classList.add('is-active');
    }
  };

  const navClick = (e) => {
    e.preventDefault();
    const Target = e.target;
    const href = Target.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <section className="Home" id="inicio">
      <div className="sliders" ref={sliders}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slider ${index}`}
            data-index={index}
            className={`img-slide ${index === 0 ? 'is-active' : ''}`}
          />
        ))}
        <img src={logo} alt="Logotipo" className="main-logo" />
      </div>

      {/* <div className="count"> */}
      {/* {new Intl.NumberFormat('us-IN', {}).format(count)} */}
      {/* {count} */}
      {/* </div> */}

      <div className="bottom-bar">
        <div className="arrows bg-dark">
          <div className="arrow arrow-prev" onClick={sliderActionPrev}>
            <BiChevronLeft />
          </div>
          <div
            className="arrow arrow-next"
            onClick={sliderActionNext}
            ref={buttonNext}
          >
            <BiChevronRight />
          </div>
        </div>
        <ul className="slider-dots" ref={dots}>
          {images.map((img, index) => (
            <li key={index} className={index === 0 ? 'is-active' : ''}></li>
          ))}
        </ul>
        <a className="btn-menu bg-dark" href="#galeria" onClick={navClick}>
          Menú
        </a>
      </div>
    </section>
  );
};

export default Home;
