import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface UserData {
  id: string;
  name: string;
  email: string;
  mobile: number;
  birthday: Date;
  job: string;
  whatsapp: string;
  bio: string;
}

const CreateUser: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    id: '',
    name: '',
    email: '',
    job: '',
    mobile: 0,
    birthday: new Date(),
    whatsapp: '',
    bio: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'id' && !/^[A-Za-z0-9-_]+$/.test(value)) {
      return;
    }

    if (name === 'mobile' && !/^\d+$/.test(value)) {
      return;
    }

    setUserData({ ...userData, [name]: name === 'mobile' ? parseInt(value, 10) : value });
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCreateUser = () => {
    axios
      .post('/api/users', userData)
      .then((response) => {
        console.log(response.data);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  const renderForm = () => {
    return (
      <div>
        <div className="w-full max-w-5xl mt-16 bg-sky-900 p-4">
          <div className="grid grid-cols-2 gap-4 ">
            <input
              type="text"
              name="id"
              placeholder="User Name (Only letters, numbers, - or _ and no spaces)"
              value={userData.id}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userData.name}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="job"
              placeholder="Job"
              value={userData.job}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="mobile"
              placeholder="Mobile"
              value={userData.mobile}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <DatePicker
              selected={userData.birthday}
              onChange={(date : any) => setUserData({ ...userData, birthday : date})}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp"
              value={userData.whatsapp}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
          </div>
          <textarea
            name="bio"
            placeholder="Bio"
            value={userData.bio}
            onChange={handleInputChange}
            className="p-2 mt-4 border rounded"
            rows={4}
          />
          <button onClick={handleCreateUser} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
            Create User
          </button>
        </div>
      </div>
    );
  };

  const renderSuccessMessage = () => {
    return (
      <div className="w-full max-w-5xl mt-16">
        <h2 className="text-3xl mb-2">User Created Successfully</h2>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Go Back to Home
        </button>
        <a
          href="/userlist"
          className="px-4 py-2 font-semibold text-sm bg-purple-700 text-white rounded-lg shadow-sm w-fit"
        >
          Profile List &rarr;
        </a>
      </div>
    );
  };

  return isSubmitted ? renderSuccessMessage() : renderForm();
};

export default CreateUser;
