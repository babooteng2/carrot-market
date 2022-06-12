import type { NextPage } from 'next'
import FloatingButton from '@components/floating-button';
import Item from '@components/item';
import Layout from '@components/layout';
import useUser from '@libs/client/useUser';
import Head from 'next/head';

//https://dribbble.com/shots/15996385-Ecommerce-elements

const Home: NextPage = () => {  
  const user = useUser();
  console.log( "user : ", user)
  return (
    <Layout title="홈" hasTabBar>
      <Head><title>Home</title></Head>
      <div className='flex flex-col space-y-5 divide-y'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (          
          <Item 
            id={i}
            key={i}
            title="New iPhone 14"
            price={2021}
            hearts={1}
            comments={3}
          />
        ))}
        <FloatingButton href='/items/upload'>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
