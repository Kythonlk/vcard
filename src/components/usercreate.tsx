import React from 'react';
import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import axios from 'axios';


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
  const { control, handleSubmit } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = async (data) => {
    try {
      const response = await axios.post('/api/create-users', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl mt-16 bg-sky-900 p-4">
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="id"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="User Name (Only letters, numbers, - or _ and no spaces)"
                  {...field}
                  className="p-2 border rounded"
                />
              )}
            />
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Name"
                  {...field}
                  className="p-2 border rounded"
                />
              )}
            />
          

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="email"
                placeholder="Email"
                {...field}
                className="p-2 border rounded"
              />
            )}
          />

          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Mobile"
                {...field}
                className="p-2 border rounded"
              />
            )}
          />

          <Controller
            name="birthday"
            control={control}
            render={({ field }) => (
              <input
                type="date"
                {...field}
                className="p-2 border rounded"
                placeholder="birthday"
                // value={field.value.toISOString().split('T')[0]}
              />
            )}
          />

          <Controller
            name="job"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder="Job"
                {...field}
                className="p-2 border rounded"
              />
            )}
          />

          <Controller
            name="whatsapp"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder="WhatsApp"
                {...field}
                className="p-2 border rounded"
              />
            )}
          />

          </div>

          <Controller
            name="bio"
            control={control}
            render={({ field }) => (
              <textarea
                placeholder="Bio"
                {...field}
                className="p-2 mt-4 border rounded"
                rows={4}
              />
            )}
          />
          <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded hover-bg-blue-700">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

