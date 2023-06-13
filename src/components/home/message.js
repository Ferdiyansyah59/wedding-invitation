import { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import axios from 'axios';
import flower from '../../img/flower.png';
import MessageBox from './messageBox';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Message() {
  const msgCollection = collection(db, 'message');
  const [msgData, setMsgData] = useState([]);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [present, setPresent] = useState('Hadir');

  const getData = async () => {
    const data = await getDocs(msgCollection);
    setMsgData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getData();
    AOS.init({
      startEvent: 'DOMContentLoaded',
    });
  }, []);

  const createMsg = async () => {
    await addDoc(msgCollection, { name: name, msg: msg, present: present });
    console.log(present);
    getData();
  };
  return (
    <div className='bg-white rounded-t-[100px] py-20'>
      <div className='flex flex-col items-center justify-center py-10'>
        <img
          className='h-24 md:h-32'
          src={flower}
          alt=''
          data-aos='fade-up'
          data-aos-duration='2500'
        />
        <h1
          className='font-[Pacifico] text-3xl mt-4 md:text-[45px] text-[#232468]'
          data-aos='fade-up'
          data-aos-duration='3000'
        >
          Ucapan dan Doa
        </h1>
      </div>
      <div className='flex flex-col md:flex-row'>
        <section
          className='w-full md:w-1/2 '
          data-aos='fade-right'
          data-aos-duration='2500'
        >
          <form className='flex flex-col mx-10'>
            <label className='mt-10 mb-5'>Nama</label>
            <input
              className='border-b border-gray-600 w-full outline-none'
              type='text'
              placeholder='Masukkan nama kamu'
              onChange={(e) => setName(e.target.value)}
            />
            <label className='mt-10 mb-5'>Pesan</label>
            <textarea
              className='w-full border-b h-24 border-gray-600 outline-none'
              placeholder='Berikan pesan'
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <label className='mt-10 mb-5'>Konfirmasi Kehadiran</label>
            <select
              className='outline-none border-b border-gray-600'
              onChange={(e) => setPresent(e.currentTarget.value)}
              required
              value={present}
            >
              <option value='Hadir'>Hadir</option>
              <option value='Tidak Hadir'>Tidak Hadir</option>
            </select>
            <button
              type='button'
              className='bg-green-600 text-white rounded-md mt-5 text-lg py-2'
              onClick={createMsg}
            >
              Kirim
            </button>
          </form>
        </section>
        <section
          className='w-full md:w-1/2 mt-10 md:mt-0 h-[500px] md:h-[700px] px-12 overflow-y-scroll overscroll-contain'
          data-aos='fade-left'
          data-aos-duration='2500'
        >
          {msgData.map((msg) => {
            return (
              <MessageBox
                key={msg.id}
                data={msg}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Message;
