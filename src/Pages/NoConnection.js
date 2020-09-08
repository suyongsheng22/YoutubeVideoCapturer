import React, { Component } from 'react';
import '../Pages/styling/NoConnection.css';
import { FaRedo, FaWifi } from 'react-icons/fa';

export default class NoConnection extends Component {
   constructor(props) {
      super(props);
      this.state = {
         currentpage: '',
         isloading: false,
      };
   }
   componentDidMount() {
      document.title = 'No Connection - Welcome to Sunrise';

      let split = window.location.href.split('/');
      let max = split.length;

      this.setState({
         currentpage: split[max - 1],
      });

      console.log(this.state.currentpage);
   }

   reloadpage = () => {
      let link = '/' + this.state.currentpage;
      window.location.href = link;
   };

   NoConnection = () => {
      setTimeout(() => {
         this.setState({
            isloading: true,
         });
      }, 3000);
      if (this.state.isloading) {
         return (
            <div className="NoConnection_Container">
               <div className="NoConnection_Center">
                  <div className="NoConnection_ImageContainer">
                     <img
                        src={require('../Pages/Images/NC-left.jpg')}
                        className="NoConnection Left"></img>

                     <img
                        className="NoConnection Right"
                        src={require('../Pages/Images/NC-right.jpg')}></img>
                  </div>
                  <h1>No Internet Connection</h1>
                  <p>You are not connected to the internet</p>
                  <p>
                     Make sure Wi-Fi
                     <FaWifi className="NoConnection_Emoji"></FaWifi>
                     or Mobile Hotspot 📶 is on, Airplane Mode ✈️ is off
                  </p>

                  <div className="NoConnection_Reload">
                     <p>Reload</p>
                     <div
                        onClick={() => this.reloadpage()}
                        className="NoConnection_Button">
                        <FaRedo></FaRedo>
                     </div>
                     <p> Webpage</p>
                  </div>
               </div>
            </div>
         );
      } else {
         return (
            <div className="NoInternet_Animation_Container">
               <div className="NoInternetAnimation">
                  <img src={require('../Pages/Images/Wifi.png')}></img>
                  <div className="Slices Left"></div>
                  <div className="Slices Right"></div>
               </div>
            </div>
         );
      }
   };
   render() {
      return this.NoConnection();
   }
}
