import React from 'react';


class App extends React.Component{

   //set data to local storage
   setData(){

      let obj = {name: 'Sam Smith', age: 12, email:'samsmith@gmail.com'};
      //localStorage.setItem('myData', JSON.stringify(obj));
      let number = 41;

      //use session storage instead
      sessionStorage.setItem('myData', JSON.stringify(obj));
      sessionStorage.setItem('myNumber', JSON.stringify(number));

   }
   //get data from local storage
   getData(){
      let data = sessionStorage.getItem('myData');
      data = JSON.parse(data);
      console.log(data.name);
      let num = sessionStorage.getItem('myNumber');
      num = JSON.parse(num);
      console.log(num);
   }

   render(){
      return (
         <div className="App">
            <button onClick={() => this.setData()}>Set Data</button>
            <button onClick={() => this.getData()}>Get Data</button>
         </div>
      );
   }

}

export default App;
