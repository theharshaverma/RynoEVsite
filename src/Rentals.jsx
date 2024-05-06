import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

export default function Rentals(){
    return (
        <div>
        <h1>Rentals</h1>
        <p> 
        Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity. Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
        <br></br>
        Download our rental app : 
        <br></br>
        <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="android" />
          </a>
          <a href='#!' className='text-reset'>
            <MDBIcon fab icon="apple" />
          </a>
        </p>
        </div>
)
}