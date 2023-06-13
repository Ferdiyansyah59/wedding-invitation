import Cover from './components/cover';
import cover from './img/cover.png';
import cover2 from './img/cover2.png';
import cover3 from './img/cover3.png';
import cover4 from './img/cover4.png';
import cover5 from './img/cover5.png';

import final from './img/Final.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rose from './img/rose.png';
import rose2 from './img/rose2.png';
import bgbg from './img/bgbg.png';
import passport from './img/passport.png';
import ring from './img/ring.png';
import hall from './img/hall.png';

import satu from './img/1.JPG';
import dua from './img/2.JPG';
import tiga from './img/3.JPG';
import empat from './img/4.JPG';

import prokes1 from './img/prokes-1.png';
import prokes2 from './img/prokes-2.png';
import prokes3 from './img/prokes-3.png';
import prokes4 from './img/prokes-4.png';

import arrum from './img/arrum.png';

import bca from './img/bca.png';
import mandiri from './img/mandiri.png';

import { BsFillCalendarHeartFill } from 'react-icons/bs';
import { MdAirplanemodeActive } from 'react-icons/md';
import { IoIosHome } from 'react-icons/io';
import { useEffect } from 'react';
import { useState } from 'react';
import Hero from './components/home/hero';

import Slider from 'react-slick';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Message from './components/home/message';
import Music from './components/music';
function App() {
  const [isOpen, setIsOpen] = useState(1);

  const [mandiriSt, setMandiriSt] = useState(0);
  const [bcaSt, setBcaSt] = useState(0);

  const openHandler = () => {
    setIsOpen(0);
  };

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
    });
  });

  const images = [cover2, cover4, cover5];
  const image = [{ url: satu }, { url: dua }, { url: tiga }];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const mandiriHandler = () => {
    var copyText = document.getElementById('mandiri');

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    setMandiriSt(1);
    setBcaSt(0);
  };

  const bcaHandler = () => {
    var copyText = document.getElementById('bca');

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    setBcaSt(1);
    setMandiriSt(0);
  };

  return (
    <>
      <div
        className={`${
          isOpen ? 'hidden' : 'block'
        } overflow-hidden bg-[#9AAACC]`}
      >
        <Hero images={images} />

        <div className='w-full h-screen bg-cover bg-no-repeat bg-center flex absolute top-0 left-0 flex-col justify-center items-center'>
          <div className='flex items-center justify-center'>
            <img
              className=' mt-10 kew h-20 md:h-32'
              src={rose2}
              alt='rose2'
            />
            <div className='text-white text-center'>
              <h1 className='font-semibold text-sm md:text-xl'>
                The Wedding Of
              </h1>
              <h1 className='font-[Satisfy] text-lg md:text-[45px] mt-8'>
                Chaidir & Alifah
              </h1>
            </div>
            <img
              className=' mt-10 kew h-20 md:h-32'
              src={rose}
              alt='rose'
            />
          </div>
          <p className='text-white font-medium mt-8'>07 JULI 2023</p>
          <a
            className='flex items-center justify-center gap-2 bg-blue-700 text-white text-sm px-10 mt-2 py-2 rounded-xl'
            target='_blank'
            href='https://www.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+Of+Chaidir+and+Alifah&dates=20230706T224000Z/20130706T221500Z'
          >
            <BsFillCalendarHeartFill />
            Save The Date
          </a>
        </div>

        <div className='flex flex-col items-center justify-center py-20 text-white font-semibold bg-white'>
          <img
            className='h-24 md:h-40 mb-10'
            src={arrum}
            alt='qs'
            data-aos='fade-up'
            data-aos-duration='2000'
          />
          <p
            data-aos='fade-up'
            data-aos-duration='3000'
            className='w-full px-8 text-sm md:text-base md:w-1/2 text-center text-black'
          >
            Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir.
          </p>
          <p
            className='text-center mt-3 text-black text-sm'
            data-aos='fade-up'
            data-aos-duration='2000'
          >
            ~ Q.S Ar Rum : 21
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgbg})`,
          }}
          className='bg-white bg-repeat flex flex-col items-center justify-center py-10'
        >
          <img
            data-aos='fade-up'
            data-aos-duration='2000'
            className='w-4/5 md:w-96 my-10 border-2 border-[#C8D4EF] p-1 rounded-full'
            src={final}
            alt=''
          />
          <div className='flex flex-col-reverse md:flex-row-reverse items-center justify-evenly w-full'>
            <div
              data-aos='fade-left'
              data-aos-duration='2500'
              className='text-center w-full px-10 flex flex-col items-center '
            >
              <img
                className='w-4/5 md:w-60 my-10 border-2 border-[#C8D4EF] p-1 rounded-full'
                src={empat}
                alt='foto'
              />
              <h1 className='font-semibold capitalize text-base md:text-lg'>
                CHAIDIR AGUS SAPUTRA RAHMAN, S.T.
              </h1>
              <h1 className='font-medium text-sm mt-2'>
                Putra Ketiga dari Bapak Rahman Asidin dan Ibu Farida Elfiana,
                S.Pd
              </h1>
            </div>
            <div
              data-aos='fade-right'
              data-aos-duration='2500'
              className='text-center w-full  px-10 flex flex-col items-center mb-12 md:mb-0'
            >
              <img
                className='w-4/5 md:w-60 my-10 border-2 border-[#C8D4EF] p-1 rounded-full'
                src={tiga}
                alt='foto'
              />
              <h1 className='font-semibold capitalize text-base md:text-lg'>
                ALIFAH NAKDA AULY, S.Pd.
              </h1>
              <h1 className='font-medium text-sm mt-2'>
                Putri Pertama dari Bapak Hery Trijayadi Mochtar dan Ibu Tini
                Retnowati
              </h1>
            </div>
          </div>
        </div>
        <Music />

        <section className='py-20 flex flex-col items-center'>
          <h1
            className='text-3xl text-white mb-10 font-semibold'
            data-aos='fade-up'
            data-aos-duration='2500'
          >
            Wedding Event
          </h1>
          <div className='flex flex-col md:flex-row gap-16 md:gap-32 justify-center w-full mb-10'>
            <div
              className='flex flex-col items-center text-white'
              data-aos='fade-right'
              data-aos-duration='2500'
            >
              <img
                src={ring}
                alt='ring'
                className='h-28'
              />
              <h1 className='font-[Satisfy] text-[45px]'>Akad</h1>
              <p className='text-lg font-semibold'>Jum'at, 07 Juli 2023</p>
              <p className='text-lg font-semibold'>15.30 s.d 17.00 WIB</p>
            </div>
            <div
              className='flex flex-col items-center text-white'
              data-aos='fade-left'
              data-aos-duration='2500'
            >
              <img
                src={hall}
                alt='hall'
                className='h-28'
              />
              <h1 className='font-[Satisfy] text-[45px]'>Resepsi</h1>
              <p className='text-lg font-semibold'>Jum'at, 07 Juli 2023</p>
              <p className='text-lg font-semibold'>18.30 s.d 21.00 WIB</p>
            </div>
          </div>
          <div
            className='flex items-center justify-center gap-2 my-10 w-full'
            data-aos='fade-up'
            data-aos-duration='2500'
          >
            <div className='h-[3px] w-2/6 bg-white' />
            <IoIosHome className='text-3xl text-white' />
            <div className='h-[3px] w-2/6 bg-white' />
          </div>
          <h1
            className='text-3xl text-white font-semibold mb-5'
            data-aos='fade-right'
            data-aos-duration='2500'
          >
            Lokasi
          </h1>
          <p
            className='text-center text-white font-medium w-4/5 text-lg md:text-xl'
            data-aos='fade-left'
            data-aos-duration='2500'
          >
            MASJID AGUNG AT-TIN
            <br /> TAMAN MINI INDONESIA INDAH
            <br /> JAKARTA TIMUR
          </p>
          <iframe
            class='w-full md:w-4/5 h-96 md:rounded-xl mt-2'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7410758163855!2d106.88156091115684!3d-6.297716493665079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed604e6e96f9%3A0xa88a2a04e7af5329!2sMasjid%20Agung%20At-Tin!5e0!3m2!1sid!2sid!4v1686470091664!5m2!1sid!2sid'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </section>

        <section className='bg-white mx-5 md:mx-20 py-10 rounded-2xl'>
          <h1 className='font-bold text-3xl text-[#232468] text-center'>
            Wedding Gift
          </h1>
          <div className='flex flex-col md:flex-row justify-evenly mt-10'>
            <div
              className='flex flex-col items-center justify-center'
              data-aos='fade-right'
              data-aos-duration='2500'
            >
              <img
                className='h-14 md:h-20'
                src={mandiri}
                alt='mandiri'
              />
              <input
                type='text'
                readOnly={true}
                value={`1290012317588`}
                className='text-[#232468] font-medium mt-3 outline-none text-center'
                id='mandiri'
              />
              <p className='text-[#232468] font-medium'>
                a/n Alifah Nakda Auly
              </p>
              <button
                className='bg-blue-500 text-white px-3 py-[2px] mt-3 rounded-full'
                onClick={mandiriHandler}
              >
                {mandiriSt === 1 ? 'Berhasil Menyalin' : 'Salin Rekening'}
              </button>
            </div>
            <div
              className='flex flex-col items-center justify-center mt-16 md:mt-0'
              data-aos='fade-left'
              data-aos-duration='2500'
            >
              <img
                className='h-14 md:h-20'
                src={bca}
                alt='bca'
              />
              <input
                type='text'
                readOnly={true}
                value={`6871619759`}
                className='text-[#232468] font-medium mt-3 outline-none text-center'
                id='bca'
              />
              <p className='text-[#232468] font-medium'>
                a/n Chaidir Agus Saputra Rahman
              </p>
              <button
                className='bg-blue-500 text-white px-3 py-[2px] mt-3 rounded-full'
                onClick={bcaHandler}
              >
                {bcaSt === 1 ? 'Berhasil Menyalin' : 'Salin Rekening'}
              </button>
            </div>
          </div>
        </section>

        <section className='mt-10'>
          <h1 className='text-center font-bold text-white text-3xl'>
            PROTOKOL KESEHATAN
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-center mb-10'>
            <div
              className='flex flex-col items-center justify-center mt-8'
              data-aos='fade-up'
              data-aos-duration='2600'
            >
              <img
                className='w-44'
                src={prokes4}
                alt='masker'
              />
              <h1 className='text-white font-semibold text-xl mt-2'>
                Menggunakan Masker
              </h1>
            </div>
            <div
              className='flex flex-col items-center justify-center mt-8'
              data-aos='fade-up'
              data-aos-duration='2500'
            >
              <img
                className='w-44'
                src={prokes3}
                alt='masker'
              />
              <h1 className='text-white font-semibold text-xl mt-2'>
                Mencuci Tangan
              </h1>
            </div>
            <div
              className='flex flex-col items-center justify-center mt-8'
              data-aos='fade-up'
              data-aos-duration='2400'
            >
              <img
                className='w-44'
                src={prokes1}
                alt='masker'
              />
              <h1 className='text-white font-semibold text-xl mt-2'>
                Menjaga Jarak
              </h1>
            </div>
            <div
              className='flex flex-col items-center justify-center mt-8'
              data-aos='fade-up'
              data-aos-duration='2300'
            >
              <img
                className='w-44'
                src={prokes2}
                alt='masker'
              />
              <h1 className='text-white font-semibold text-xl mt-2'>
                Menggunakan Hand Sanitizer
              </h1>
            </div>
          </div>
        </section>

        {/* <section className='bg-white'>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </section> */}

        <Message />
      </div>
      <Cover
        onClick={openHandler}
        isOpen={isOpen}
      />
    </>
  );
}

export default App;
