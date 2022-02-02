import type { NextPage } from 'next'

//https://dribbble.com/shots/15996385-Ecommerce-elements

const Home: NextPage = () => {  
  return (
    <div className='dark bg-slate-400 py-20 px-20 grid gap-10 min-h-screen xl:grid-cols-3 lg:grid-cols-2'>
      <div className='bg-white dark:bg-black flex flex-col justify-between p-6 rounded-3xl shadow-xl '>
        <span className='dark:text-white font-semibold text-3xl'>Select Item</span>
        <ul>
					{[0, 1, 2, 3,].map(i => 
						<li key={i} className='flex justify-between my-2 odd:bg-yellow-100 even:bg-blue-50 only:bg-red-500'>
							<span className='text-gray-500 dark:text-gray-100'>Grey Chair</span>
							<span className='font-semibold dark:text-white'>$10</span>
						</li>
					)}
				</ul>
				<ul>
					{["a", "b", ""].map((c, i) => (
						<li className='bg-red-500 py-2 empty:bg-blue-500 dark:text-white' key={i}>{c}</li>
						)) }
				</ul>
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span className='dark:text-white'>Total</span>
          <span className='font-semibold dark:text-gray-100'>$20</span>
        </div>
        <button className='block mt-5 bg-blue-500 dark:bg-black dark:border text-center rounded-xl w-3/4 text-white p-3 mx-auto
				hover:bg-teal-300 cursor-pointer dark:hover:bg-white dark:hover:text-white hover:text-black active:bg-yellow-500 focus:bg-red-500'>Checkout</button>
      </div>

      <div className='bg-white overflow-hidden rounded-2xl shadow-xl group'>
        <div className='portrait:bg-indigo-600 landscape:bg-teal-500 p-6 pb-14 xl:pb-60'>
          <span className='text-white text-2xl'>Profile</span>
        </div>
        <div className='rounded-2xl bg-white relative -top-5 p-6'>
          <div className='flex relative -top-16 items-end justify-between'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className='font-semibold'>340</span>
            </div>
            <div className='h-24 w-24 bg-red-400 rounded-full group-hover:bg-teal-500 transition-colors' />
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
			
			<form className="flex flex-col space-y-2 bg-blue-500 p-10 rounded-2xl focus-within:bg-blue-200 disabled:opacity-5">
				<input type="text" required placeholder="Username" className='required:border-2 border-yellow-500 invalid:bg-red-500'/>
				<input type="password" required placeholder="Password" className='placeholder-shown:bg-teal-500 valid:bg-teal-500'/>
				<span className='hidden peer-invalid:block text-red-500'>This input is invalid</span>
				<input type="submit" value="Login" className='bg-white' />
			</form>
			<form className="flex flex-col space-y-2 bg-blue-500 p-10 rounded-2xl">
				<input type="text" required placeholder="Username" className='peer'/>
				<span className='hidden peer-valid:block peer-valid:text-teal-500'>Awesome username</span>
				<span className='hidden peer-invalid:block peer-invalid:text-red-500'>This input is invalid</span>
				<span className='hidden peer-hover:block peer-invalid:text-yellow-500'>Hello</span>
				<input type="submit" value="Login" className='bg-white' />
			</form>

			<div className='bg-white p-10 rounded-2xl shadow-xl'>
				<details className='open:text-white open:bg-indigo-400'>
					<summary className='select-none cursor-pointer'>What is my fav. food.</summary>
					<div className='selection:bg-indigo-500 selection:text-white'>김치</div>
				</details>
			</div>

			<div className='bg-white p-10 rounded-2xl shadow-xl'>
				<ul className='list-decimal marker:text-teal-600'>
					<li>hi</li>
					<li>hi</li>
					<li>hi</li>
				</ul>
			</div>

			<div className='bg-white p-10 rounded-2xl shadow-xl'>
				<input type="file" className='
					file:border-0
					file:rounded-md
					file:px-3 file:py-2
					file:bg-purple-400
					file:text-white
					file:text-sm
					file:cursor-pointer
					file:hover:text-purple-600
					file:hover:bg-white
					file:hover:border
					file:transition-colors' />
			</div>
			
			<div className='bg-white p-10 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-3'>
				<p className='first-letter:capitalize first-letter:hover:text-purple-400'>lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, ex, minima alias ipsam molestiae inventore voluptas odit atque explicabo nostrum perspiciatis praesentium ratione nisi, dolorem iure quae? At, nulla mollitia?</p>
			</div>

    </div>
	
  );
};

export default Home;
