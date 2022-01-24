import type { NextPage } from 'next'

//https://dribbble.com/shots/15996385-Ecommerce-elements

const Home: NextPage = () => {  
  return (
    <div className='bg-slate-400 py-20 px-20 grid gap-10 min-h-screen'>
      <div className='bg-white p-6 rounded-3xl shadow-xl'>
        <span className='font-semibold text-3xl'>Select Item</span>
        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$10</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$10</span>
        </div>
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>$20</span>
        </div>
        <div className='mt-5 bg-blue-500 text-center rounded-xl w-3/4 text-white p-3 mx-auto
				hover:bg-teal-300 cursor-pointer hover:text-black active:bg-yellow-500 focus:bg-red-500'>Checkout</div>
      </div>

			<div className='bg-white overflow-hidden rounded-2xl shadow-xl'>
				<div className='bg-blue-500 p-6 pb-14'>
					<span className='text-white text-2xl'>Profile</span>
				</div>
				<div className='rounded-2xl bg-white relative -top-5 p-6'>
					<div className='flex relative -top-16 items-end justify-between'>
						<div className='flex flex-col items-center'>
							<span className='text-sm text-gray-500'>Orders</span>
							<span className='font-semibold'>340</span>
						</div>
						<div className='h-24 w-24 bg-red-400 rounded-full' />
						<div className='flex flex-col items-center'>
							<span className='text-sm text-gray-500'>Spent</span>
							<span className='font-semibold'>$2,310</span>
						</div>
					</div>
					<div className='flex relative -mt-10 flex-col items-center -mb-5'>
						<span className='text-lg font-semibold'>Tony Molloy</span>
						<span className='text-sm text-gray-500'>New York, USA</span>
					</div>
				</div>
			</div>

      <div className='bg-white p-10 rounded-2xl shadow-xl'>
				<div className='flex mb-5 justify-between items-center'>					
					<span className='w-8 aspect-square rounded-lg bg-slate-400 text-white text-center flex items-center justify-center cursor-pointer hover:bg-teal-400 active:bg-yellow-500'>←</span>					
					<div className='space-x-3'>
						<span>⭐4.9</span>
						<span className='shadow-xl p-2 rounded-md'>❤</span>
					</div>
				</div>
				<div className='bg-zinc-400 h-72 mb-5'/>
				<div className='flex flex-col'>
					<span className='font-medium text-xl'>Swoon Lounge</span>
					<span className='text-xs text-gray-500'>Chair</span>
					<div className='mt-4 mb-5 flex justify-between items-center'>
						<div className='space-x-2'>
							<button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
							<button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
							<button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
						</div>
						<div className='flex items-center space-x-5'>
							<button className='p-1.5 bg-blue-200 flex justify-center items-center rounded-lg w-10 aspect-square text-xl text-gray-500'>-</button>
							<span>1</span>
							<button className='p-1.5 bg-blue-200 flex justify-center items-center rounded-lg w-10 aspect-square text-xl text-gray-500'>+</button>
						</div>
					</div>
					<div className='flex justify-between items-center'>
						<span className='font-medium text-2xl'>$450</span>
						<button className='bg-blue-500 text-center text-white rounded-lg px-8 py-2 text-sm'>Add to cart</button>
					</div>
				</div>
			</div>

    </div>
  );
};

export default Home;
