import React from 'react';


class App extends React.Component{

   //set data to local storage
   setData(){

      let obj = {name: 'Sam Smith', age: 12, email:'samsmith@gmail.com'};
      //localStorage.setItem('myData', JSON.stringify(obj));

      //use session storage instead
      sessionStorage.setItem('myData', JSON.stringify(obj));

   }
   //get data from local storage
   getData(){
      let data = sessionStorage.getItem('myData');
      data = JSON.parse(data);
      console.log(data.name);
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
