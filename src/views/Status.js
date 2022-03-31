import '../views/Status.css';
import Drone from '../assets/graphics/drone.svg';

function Status() {
    return (
        <div class="background">
    <div class="ordernum">
      <h4>Ordernummer: </h4>
    </div>
    <div class="drone">
      <img src= {Drone} alt='Drone'/>
    </div>
    <div class="order">
      <h1>Din beställning är på väg!</h1>
    </div>
    <div class="timer">
      <p>13 minuter</p>
    </div>
    <button><h3>Ok, cool!</h3></button>
  </div>
    )
}

export default Status;