// import { useState } from "react";
// import { useEffect } from "react";

// export default function Test(props) {
//     const [posts, setPosts] = useState([]);
//     const [user, setUser] = useState('');
//     const [rememberMe, setRememberMe] = useState();
//     useEffect(async () => {
//         console.log('start');

//         const rememberMe = localStorage.getItem('rememberMe') === 'true';
//         const user = rememberMe ? localStorage.getItem('user') : '';
//         setUser(user);
//         setRememberMe(rememberMe);

//         try {
//             const response = await fetch(`https://backend.preycreate.xyz/wp-json/wp/v2/posts/`);
//             const responseJson = await response.json();
//             // console.log(responseJson);
//             let res = [];
//             let item;
//             for (item of responseJson) {
//                 const { title, date, content } = item;
//                 console.log(title);
//                 res.push({ title, date, content });
//             }
//             setPosts(res);
//         } catch (error) {
//             console.error(error);
//         }
//     }, []);

//     const handleChange = (event) => {
//         const input = event.target;
//         const value = input.type === 'checkbox' ? input.checked : input.value;

//         setUser(value);
//     };

//     const handleFormSubmit = () => {
//         localStorage.setItem('rememberMe', rememberMe);
//         localStorage.setItem('user', rememberMe ? user : '');
//         return;
//     };

//     return (
//         <section>
//             <h1 className="text-center">TEST</h1>
//             <div>
//                 <ul>
//                     {posts.map(function (item, i) {
//                         return <li key={i}>{item.title.rendered}</li>
//                     })}
//                 </ul>
//             </div>
//             <form onSubmit={handleFormSubmit}>
//                 <label>
//                     User: <input name="user" value={user} onChange={(event) => setUser(event.target.value)} />
//                 </label>
//                 <label>
//                     <input name="rememberMe" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} type="checkbox" /> Remember me
//                 </label>
//                 <button type="submit">Sign In</button>
//             </form>
//         </section>
//     )
// }