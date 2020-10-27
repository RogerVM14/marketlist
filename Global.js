import {NetworkInfo} from 'react-native-network-info';
var ip = "";
// Get Local IP
NetworkInfo.getIPAddress().then(ipAddress => {
  //console.log(` the server is running on http://${ipAddress}:8080`);
  ip = ipAddress;
});


var Global = {
    url: 'http://localhost:8080',
    ErrorValues: {
        'email': 'correo',
        'password': 'contraseña',
        'passwordConfirm': 'confirmación del password'
    },

}

export default Global;