import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class ToastMessage extends Component {
   constructor(props) {
      super();
      this.state = {
         message: '',
      };
   }

   componentDidMount() {
      this.setState({
         message: this.props.message,
      });
   }
   notify = () => {
      let { message } = this.state;
      if (message !== '') {
         toast.dark(message);
      }
   };

   render() {
      this.notify();
      return (
         <ToastContainer
            style={{ textAlign: 'center' }}
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl
            pauseOnFocusLoss={false}
            draggable={true}
            pauseOnHover={false}
         />
      );
   }
}
