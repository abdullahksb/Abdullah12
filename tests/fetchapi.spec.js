const fetchuser = async ()=>{
      try{
   const response =  await fetch('https://reqres.in/api/users?page=2');

   if(!response.ok){
         throw new Error('Network response was not ok');
   }

    const data = await response.json();
    console.log(data);
}
catch(error) {
      console.error('There has been a problem with your fetch operation:', error);
      }
      
}

fetchuser();