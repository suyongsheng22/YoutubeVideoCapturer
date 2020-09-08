import React, { Component } from 'react';
import YouTube from 'react-youtube';
import '../Pages/styling/Gallery.css';
import ToastMessage from '../Pages/assests/ToastNavigation';
export default class YoutubeVideo extends Component {
   constructor(props) {
      super();
      this.state = {
         FinalArray: [],
         videodetails: [],
         num: 12,
         showToast: false,
         testing: [],
         maximumArray: '',
         isLoading: true,
      };
   }
   componentDidMount() {
      const channelId = 'UCBFUae4y50CUULtFnZUiIHQ';
      const ApiKey = 'AIzaSyAtYFVfvspO4umPNeOm16YObR1tXSQBeWM';
      let NextPageToken = '';
      const maxResults = 50;
      var Array = [];

      const CatchAllVideo = async (token) => {
         fetch(
            'https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=' +
               channelId +
               '&key=' +
               ApiKey +
               '&pageToken=' +
               token +
               '&maxResults=' +
               maxResults
         )
            .then((resp) => resp.json())
            .then((resp) => {
               Array = Array.concat(resp.items);
               NextPageToken = resp.nextPageToken;

               if (NextPageToken !== undefined) {
                  CatchAllVideo(NextPageToken);
               } else {
                  this.ExcludePlaylist(Array);
               }
            })

            .catch((error) => {
               console.log(error);
            });
      };

      CatchAllVideo('');
   }

   ExcludePlaylist(Array) {
      let newArray = [];

      for (let i = 0; i < Array.length; i++) {
         if (Array[i].snippet.type === 'upload') {
            newArray.push(Array[i]);
         }
      }

      this.setState({
         FinalArray: newArray,
         maximumArray: newArray.length,
         isLoading: false,
      });
   }

   showToast() {
      const message = 'No More Video In Gallery 😔';
      let showToasts = this.state.showToast;
      this.state.showToast = false;
      if (showToasts) {
         return <ToastMessage message={message}></ToastMessage>;
      }
   }
   changeNum(action, num) {
      let number = this.state.num;

      switch (action) {
         case 'Increment': {
            number += num;
            break;
         }

         case 'Decrement': {
            number -= num;

            if (number <= 0) {
               number = 0;
            }
            break;
         }

         case 'ShowAll': {
            number = this.state.maximumArray;
         }
      }

      if (number >= this.state.maximumArray) {
         number = this.state.maximumArray;
         this.setState({
            showToast: true,
         });
      }

      this.setState({
         num: number,
      });
   }

   definedate(date) {
      let newdate = date.split('T');

      return newdate[0];
   }

   isloading = () => {
      if (this.state.isLoading) {
         return (
            <div className="Gallery_Isloading_Container">
               <img src={require('../Pages/Images/Loading.gif')}></img>
            </div>
         );
      } else {
         const displayvideo = this.state.FinalArray.slice(
            0,
            this.state.num
         ).map((item) => {
            let links = '';
            links = item.contentDetails.upload.videoId;
            const opts = {
               height: '200px',
               width: '300px',
            };

            return (
               <div className="YoutubeVideo_Content" key={item.id}>
                  <YouTube
                     opts={opts}
                     videoId={links}
                     containerClassName="Youtube_Content"
                  />
                  <p>{item.snippet.title}</p>
               </div>
            );
         });

         return (
            <div className="YoutubeVideo_Container" style={{ width: '100%' }}>
               {displayvideo}{' '}
               <div className="DefineImageRow_Container">
                  <p
                     className="DefineImageRow_Button"
                     onClick={() => this.changeNum('Increment', 12)}>
                     Show More
                  </p>

                  <p
                     className="DefineImageRow_Button"
                     onClick={() => this.changeNum('ShowAll')}>
                     Show All
                  </p>
               </div>
            </div>
         );
      }
   };

   render() {
      return (
         <div className="YoutubeVideo_Container">
            {this.showToast()}

            {this.isloading()}
         </div>
      );
   }
}
