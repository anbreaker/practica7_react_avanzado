// import Swal from 'sweetalert2';
// import {types} from '../types/types';

// export const startLoginEmailPassword = (credentials, props) => {
//   return (dispatch) => {
//     const {onLogin, location, history} = props;

//     login(credentials)
//       .then(() => {
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
//     dispatch(startLoading());
//   };
// };
