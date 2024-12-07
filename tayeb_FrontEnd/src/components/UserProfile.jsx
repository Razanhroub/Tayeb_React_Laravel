// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // لاستخدام id من الرابط
// import axios from 'axios';

// const UserProfile = () => {
//   const { id } = useParams(); // استخراج id من الرابط
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone_number: '',
//     gender: 'male',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // تحميل بيانات المستخدم بناءً على id
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:8000/api/users/${id}`, {
//           headers: {
//             Authorization: `Bearer YOUR_ACCESS_TOKEN`, // ضع التوكن إذا كان مطلوبًا
//           },
//         });
//         setUser(response.data); // تعيين بيانات المستخدم
//       } catch (err) {
//         setError('Failed to fetch user data');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [id]); // تحديث عند تغيير id

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`/api/users/${id}`, user, {
//         headers: {
//           Authorization: `Bearer YOUR_ACCESS_TOKEN`, // ضع التوكن إذا كان مطلوبًا
//         },
//       });
//       alert(response.data.message); // رسالة تأكيد
//       setIsEditing(false); // إيقاف وضع التحرير
//     } catch (err) {
//       console.error('Error updating user data:', err);
//       alert('Failed to update profile.');
//     }
//   };

//   const getAvatar = () => {
//     return user.gender === 'male'
//       ? 'https://img.freepik.com/free-vector/coloured-chefdesign_1152-72.jpg?t=st=1733502343~exp=1733505943~hmac=ac1fc38f99cace96bc9315068d08c3672e9704dc63745d1b67a878d0b4ca1646&w=826'
//       : 'https://img.freepik.com/premium-photo/cute-playful-3d-girl-chef-character-with-expressive-eyes-wearing-chefs-hat-apron_1305436-369.jpg?ga=GA1.1.1643396337.1727782725&semt=ais_hybrid';
//   };

//   if (loading) return <p>Loading user data...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f7f7f7',
//         fontFamily: "'Arial', sans-serif",
//         padding: '0 20px',
//       }}
//     >
//       <div
//         style={{
//           width: '100%',
//           maxWidth: '800px',
//           backgroundColor: 'white',
//           borderRadius: '10px',
//           boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//           padding: '30px',
//           textAlign: 'center',
//           overflow: 'hidden',
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             marginBottom: '20px',
//           }}
//         >
//           <img
//             src={getAvatar()}
//             alt="Avatar"
//             style={{
//               width: '120px',
//               height: '120px',
//               borderRadius: '50%',
//               border: '5px solid #4e73df',
//               objectFit: 'cover',
//             }}
//           />
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '20px' }}>
//             <label style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Name:</label>
//             {isEditing ? (
//               <input
//                 type="text"
//                 name="name"
//                 value={user.name}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   fontSize: '16px',
//                   borderRadius: '8px',
//                   border: '1px solid #ddd',
//                   marginBottom: '10px',
//                 }}
//               />
//             ) : (
//               <h2 style={{ color: '#333' }}>{user.name}</h2>
//             )}
//           </div>

//           <div style={{ marginBottom: '20px' }}>
//             <label style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Email:</label>
//             <p style={{ fontSize: '16px', color: '#555', margin: '10px 0' }}>{user.email}</p>
//           </div>

//           <div style={{ marginBottom: '20px' }}>
//             <label style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Phone Number:</label>
//             {isEditing ? (
//               <input
//                 type="text"
//                 name="phone_number"
//                 value={user.phone_number}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   fontSize: '16px',
//                   borderRadius: '8px',
//                   border: '1px solid #ddd',
//                   marginBottom: '10px',
//                 }}
//               />
//             ) : (
//               <p style={{ fontSize: '16px', margin: '10px 0' }}>{user.phone_number}</p>
//             )}
//           </div>

//           <div style={{ marginBottom: '20px' }}>
//             <label style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Gender:</label>
//             {isEditing ? (
//               <select
//                 name="gender"
//                 value={user.gender}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   fontSize: '16px',
//                   borderRadius: '8px',
//                   border: '1px solid #ddd',
//                   marginBottom: '10px',
//                 }}
//               >
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             ) : (
//               <p style={{ fontSize: '16px', margin: '10px 0' }}>{user.gender}</p>
//             )}
//           </div>

//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             {isEditing ? (
//               <div>
//                 <button
//                   type="submit"
//                   style={{
//                     backgroundColor: '#4e73df',
//                     color: 'white',
//                     padding: '12px 24px',
//                     border: 'none',
//                     borderRadius: '8px',
//                     fontSize: '16px',
//                     cursor: 'pointer',
//                     marginRight: '10px',
//                   }}
//                 >
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsEditing(false)}
//                   style={{
//                     backgroundColor: '#ddd',
//                     color: 'black',
//                     padding: '12px 24px',
//                     border: 'none',
//                     borderRadius: '8px',
//                     fontSize: '16px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => setIsEditing(true)}
//                 style={{
//                   backgroundColor: '#4e73df',
//                   color: 'white',
//                   padding: '12px 24px',
//                   border: 'none',
//                   borderRadius: '8px',
//                   fontSize: '16px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Edit Profile
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;


 // ---------------------------------------------------------

 import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const userId = localStorage.getItem('userId'); // قراءة userId من localStorage
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone_number: '',
    gender: 'male',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // تحميل بيانات المستخدم بناءً على userId
  useEffect(() => {
    if (!userId) {
      setError('User ID not found in localStorage.');
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`, // ضع التوكن إذا كان مطلوبًا
          },
        });
        setUser(response.data); // تعيين بيانات المستخدم
      } catch (err) {
        setError('Failed to fetch user data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // تحديث عند تغيير userId

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/users/${userId}`, user, {
        headers: {
          Authorization: `Bearer YOUR_ACCESS_TOKEN`, // ضع التوكن إذا كان مطلوبًا
        },
      });
      alert(response.data.message); // رسالة تأكيد
      setIsEditing(false); // إيقاف وضع التحرير
    } catch (err) {
      console.error('Error updating user data:', err);
      alert('Failed to update profile.');
    }
  };

  const getAvatar = () => {
    return user.gender === 'male'
      ? 'https://img.freepik.com/free-vector/coloured-chefdesign_1152-72.jpg?t=st=1733502343~exp=1733505943~hmac=ac1fc38f99cace96bc9315068d08c3672e9704dc63745d1b67a878d0b4ca1646&w=826'
      : 'https://img.freepik.com/premium-photo/cute-playful-3d-girl-chef-character-with-expressive-eyes-wearing-chefs-hat-apron_1305436-369.jpg?ga=GA1.1.1643396337.1727782725&semt=ais_hybrid';
  };

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        fontFamily: "'Arial', sans-serif",
        padding: '0 20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          padding: '30px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <img
            src={getAvatar()}
            alt="Avatar"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '5px solid #4e73df',
              objectFit: 'cover',
            }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  marginBottom: '10px',
                }}
              />
            ) : (
              <h2 style={{ color: '#333' }}>{user.name}</h2>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Email:</label>
            <p style={{ fontSize: '16px', color: '#555', margin: '10px 0' }}>{user.email}</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Phone Number:</label>
            {isEditing ? (
              <input
                type="text"
                name="phone_number"
                value={user.phone_number}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  marginBottom: '10px',
                }}
              />
            ) : (
              <p style={{ fontSize: '16px', margin: '10px 0' }}>{user.phone_number}</p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Gender:</label>
            {isEditing ? (
              <select
                name="gender"
                value={user.gender}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  marginBottom: '10px',
                }}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            ) : (
              <p style={{ fontSize: '16px', margin: '10px 0' }}>{user.gender}</p>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {isEditing ? (
              <div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#4e73df',
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  style={{
                    backgroundColor: '#ddd',
                    color: 'black',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                style={{
                  backgroundColor: '#4e73df',
                  color: 'white',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;