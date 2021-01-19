// import Swal from 'sweetalert2';
// import {login} from '../../../api/auth';
// import {types} from '../types/types';

// export const startLoginEmailPassword = (credentials, props) => {
//   return (dispatch) => {
//     const {onLogin, location, history} = props;

//     login(credentials)
//       .then(() => {
//         dispatch(authLoginSuccess());
//         onLogin(() => {
//           // Navigate to previously required route
//           const {from} = location.state || {from: {pathname: '/'}};
//           history.replace(from);
//         });
//       })
//       .catch((error) => {
//         setError(error.message);
//         console.error('Error ->', error);
//         Swal.fire('Error', error.message, 'error');
//       });
//   };
// };
