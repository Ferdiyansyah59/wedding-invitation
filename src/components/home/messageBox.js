function MessageBox({ data }) {
  return (
    <>
      <div className='bg-amber-100 text-center rounded-lg mb-10 flex flex-col items-center'>
        <h1 className='font-semibold'>{data.name}</h1>
        <p
          className={`${
            data.present === 'Hadir' ? 'bg-green-600' : 'bg-red-600'
          } w-fit px-5 mt-2 text-sm text-white rounded-full`}
        >
          {data.present === 'Hadir' ? 'Hadir' : 'Tidak Hadir'}
        </p>
        <p className='p-5 text-sm'>{data.msg}</p>
      </div>
    </>
  );
}

export default MessageBox;
