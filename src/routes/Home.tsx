import React from 'react';
import Spinner from 'components/spinner/Spinner';
import { useQuery } from 'react-query';

// type HomeProps = {};

const Home: React.FC = () => {
  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  };
  const { data, status } = useQuery('users', fetchUsers);
  return (
    <div
      data-testid='home-page'
      className='flex h-screen flex-col items-center justify-center gap-8'
    >
      {status === 'error' && <p>Error fetching data</p>}
      {status === 'loading' && <Spinner />}
      {status === 'success' && (
        <div>
          {data.map((user: Record<string, never>) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
