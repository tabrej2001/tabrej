// import logo from './logo.svg';
import './App.css';

function App() {

  let isLogedin=false;
  if(isLogedin)
  return (
    <div>


<form>
	

<div>


<label for="username" > Username</label><br></br>
<input type="text" id="username"  required> </input>

</div>
<div>
<label for="password">Password</label><br></br>
<input type="password" id="password" required></input>
</div>


<div>
<label for="email">Email</label><br></br>
<input type="email" id="email" required placeholder="example@gmail.com" name="email"></input>
</div>

<div>
<label for="time">Password</label><br></br>
<input type="time" id="time" required name="password"></input>
</div>


<div>
<label for="number">Number</label><br></br>
<input type="number" id="number" required name="number"></input>
</div>



<div>
<label for="country">Country</label><br></br>
<input type="text" id="country" required name="country" value="India"></input>
</div>



<input type="submit" name="submit"></input>







</form>


    </div>
  );
}

export default App;
