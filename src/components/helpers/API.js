import axios from 'axios';
import { AsyncStorage, Platform } from 'react-native';
class API {
  constructor() {
    this.api = axios.create({      
      baseURL: 'http://apps.merakjaya.co.id/ando/',
      // baseURL: 'https://andoheem.000webhostapp.com/', //PATH Online ando      
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  async saveToken(token) {
    try {
      await AsyncStorage.setItem('@OK:token', token);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getToken() {
    try {
      let token = await AsyncStorage.getItem('@OK:token');
      // console.log("Method getToken:",token);
      return token;
    } catch (error) {
      return null;
    }
  }  

  setToken(token) {
    this.api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }

  async clearToken() {
    try {
      this.api.defaults.headers.common['Authorization'] = '';
      return await AsyncStorage.clear();
    } catch (error) {
      return false;
    }
  }

  // me(token) {
  //   // this.token = await this.getToken();
  //   console.log("Tokennya api: ",token)
  //   // if (this.token !== null) {
  //     // this.setToken(this.token);
  //     return this.api.post('/profil.php',{
  //       token : token
  //     });
  //   // }
  // }

  async profil() {
    this.token = await this.getToken();
    // console.log("Tokennya: ",this.token)
    if (this.token !== null) {
      this.setToken(this.token);
          return this.api.post('/profil.php',{
        token : this.token
      });
    }
  }

  login(email, password, dev_id) {
     console.log('login jl',email, password, dev_id);
    return this.api.post('/login.php', {
      email: email,
      password: password,
      dev_id: dev_id,
    });
  }

  logout(dev_id){
    // console.log('logout jl',dev_id);
    return this.api.post('/logout.php',{
      dev_id: dev_id
    });
  }

  signup(nama_depan, nama_belakang, telepon, alamat, email, password, gender) {
    // console.log(gender);
    return this.api.post('/signup.php', {
      nama_depan: nama_depan,
      nama_belakang: nama_belakang,
      // jk: jk,
      telepon: telepon,
      alamat: alamat,
      email: email,
      password: password,
      gender: gender
    });
  }

  lupa(email) {    
    // console.log('ok',email)
    return this.api.post('/lupa.php', {
      email: email,
    });
  }

  // checkcode(code1,code2,code3,code4,email) {    
  //   return this.api.post('/checkcode.php', {
  //     code1: code1, code2: code2, code3: code3, code4: code4, email: email
  //   });
  // }

  checkcode(code,email) {   
    console.log('code',code,'+++','email',email);
    return this.api.post('/checkcode.php', {
      code: code, email: email
    });
  }

  kirimUlang(email) {    
    return this.api.post('/kirimUlang.php', {
      email: email,
    });
  }

  async getLokasi() {
      return this.api.get('/lokasi.php');
  }

  async getPlant(idlokasi) {    
    return this.api.post('/plant.php',{
      idlokasi:idlokasi
    });
  }

  getMutu(idplant,idlokasi) {    
    console.log('idpslant',idplant, 'idlokas=>', idlokasi);
    return this.api.post('/mutu.php',{
      idplant:idplant,
      idlokasi:idlokasi
    });
  }

  getUOM(lineid) {    
    console.log('lineid',lineid);
    return this.api.post('/uom.php',{      
      lineid:lineid
    });
  }

  async getJasaCP() {
    return this.api.get('/jasacp.php');
  }
}

export default API;