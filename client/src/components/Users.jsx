import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getPlans = async () => {
    const data = await fetch('http://localhost:7000/api/v1/gym/1');
    if (data.ok) {
      const data1 = await data.json();
      setUsers(data1.data.members); // corrected variable name
      // console.log(data1.data.members);
    } else {
      console.log('Error fetching data');
    }
  };
  useEffect(() => {
    getPlans();
  }, []);
  return (
    <div className="plain-card w-full">
      <h2 className=" font-bold text-2xl ">All Users</h2>
      <hr />
      <div className="flex flex-col  ">
        {users.map((user, index) => (
          <div key={index}>
            <div className="flex flex-row justify-start items-center">
              <h1>
                <Link className="  text-2xl " to={`/users/${user._id}`}>
                  {user.name}
                </Link>
              </h1>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
