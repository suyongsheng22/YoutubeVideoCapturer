import React, { Component } from 'react';
import YoutubeVideo from '../Pages/YoutubeVideo';

import '../Pages/styling/Gallery.css';

import { FaHome, FaCaretUp, FaCaretDown } from 'react-icons/fa';

export default class Gallery extends Component {
   constructor(props) {
      super(props);
      this.state = {
         LargeImageStatus: false,
         imagename: '',
         dissappearwhenfullscreen: '',
         Today: '',
         counter: 0,
         radiostatus: [0, 1],
         maximumArray: '',
      };
   }

   goSelectedDiv(divname, towhere) {
      var elm = document.getElementById(divname);
      console.log(elm);
      elm.scrollIntoView({ behavior: 'smooth', block: towhere });
   }

   changestatus = (no) => {
      let sign = this.state.radiostatus;

      if (no === 0) {
         sign = [1, 0];
      } else {
         sign = [0, 1];
      }

      this.setState({
         radiostatus: sign,
      });
   };

   returnContent = () => {
      if (this.state.radiostatus[0] === 1) {
      } else if (this.state.radiostatus[1] === 1) {
         return <YoutubeVideo />;
      }
   };

   render() {
      return (
         <div id="Gallery_Bottom" className="Gallery_Bottom">
            <div className="Lift_Button_Container">
               <div
                  onClick={() => this.goSelectedDiv('Gallery_Bottom', 'start')}
                  className="Return_Top_Button Up">
                  <FaCaretUp></FaCaretUp>
               </div>

               <div
                  onClick={() => this.goSelectedDiv('Gallery_Bottom', 'end')}
                  className="Return_Top_Button Down">
                  <FaCaretDown></FaCaretDown>
               </div>
            </div>

            <div className="Gallery_Container">
               <label className="Gallery_Title">Gallery</label>

               <form className="Gallery_ChangeContent">
                  <input
                     type="radio"
                     onClick={() => this.changestatus(1)}
                     className="Gallery_ChangeContent button"
                     value="Video"
                     checked={this.state.radiostatus[1]}></input>
                  <label onClick={() => this.changestatus(1)} htmlFor="Video">
                     Video
                  </label>
               </form>

               {this.returnContent()}
            </div>
         </div>
      );
   }
}
