import { useState } from 'react';
import cover from '../img/cover.png';
// import cover0 from '../img/cover0.png';
import cover0 from '../img/cover99.png';
import rose from '../img/rose.png';
import rose2 from '../img/rose2.png';

import { BsFillEnvelopePaperHeartFill } from 'react-icons/bs';

const name = window.location.pathname;

function Cover({ onClick, isOpen }) {
  //   const [isOpen, setIsOpen] = useState(1);

  return (
    <section
      style={{
        top: !isOpen ? -2000 : 0,
        transition: 'all 3.5s ease-out',
        visibility: !isOpen ? 'hidden' : 'visible',
        // backgroundImage: `url(${cover0})`,
        opacity: !isOpen ? '0' : '1',
      }}
      className='w-screen h-full cover1 bg-cover bg-no-repeat bg-top flex absolute top-0 left-0 flex-col justify-center items-center'
    >
      <div className='flex items-center justify-center'>
        <img
          className='mt-12 kew h-20 md:h-32'
          src={rose2}
          alt='rose2'
        />
        <div className='text-white text-center'>
          <h1 className='text-sm'>You are Invited!</h1>
          <h1 className='font-semibold text-sm md:text-xl'>The Wedding Of</h1>
          <h1 className='font-[Satisfy] text-lg md:text-3xl mt-5'>
            Chaidir & Alifah
          </h1>
        </div>
        <img
          className='mt-12 scale-x-100 kew h-20 md:h-32'
          src={rose}
          alt='rose'
        />
      </div>
      <h1 className='mt-10 italic text-sm text-white'>
        Kepada Yth. Bapak/Ibu/Saudara/i
      </h1>
      <h1 className='font-bold italic text-lg text-white capitalize'>
        {decodeURI(name.slice(1))}
      </h1>
      <button
        onClick={onClick}
        className='flex items-center justify-center gap-2 bg-blue-700 text-white text-sm px-10 py-2 mt-4 rounded-xl'
        type='button'
      >
        <BsFillEnvelopePaperHeartFill className='text-lg' />
        Buka Undangan
      </button>
    </section>
  );
}

export default Cover;
