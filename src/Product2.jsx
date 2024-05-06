import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import red from "./red.png";
import golden from "./golden.png";
import blue from "./blue.png";
import black from "./black.png";

export default function RhynoSE03Info() {
  const images = [red, golden, black, blue];
  const imageNames = ["Red", "Golden", "Black", "Blue"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <MDBContainer className="py-5 text-center">
      <img
        src={images[currentImageIndex]}
        alt={`Rhyno SE03 Max ${imageNames[currentImageIndex]}`}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <MDBBtn color="primary" onClick={toggleImage}>
        Next Image: {imageNames[(currentImageIndex + 1) % images.length]}
      </MDBBtn>
      <MDBTable
        responsive
        striped
        className="text-successtable-border border-light"
      >
        <MDBTableHead className="border-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <strong>Rhyno SE03</strong>
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope="row">Battery</th>
            <td>2.7Kwh</td>
          </tr>
          <tr>
            <th scope="row">Battery Features</th>
            <td>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
          </tr>
          <tr>
            <th scope="row">Battery Warranty</th>
            <td>3 Years</td>
          </tr>
          <tr>
            <th scope="row">Charging Time</th>
            <td>4 hours (12A)</td>
          </tr>
          <tr>
            <th scope="row">Motor</th>
            <td>1500W</td>
          </tr>
          <tr>
            <th scope="row">Max Speed</th>
            <td>55 km/h</td>
          </tr>
          <tr>
            <th scope="row">Warranty on Electronics</th>
            <td>1 year</td>
          </tr>
          <tr>
            <th scope="row">Max Range (@30km/h)</th>
            <td>150 km</td>
          </tr>
          <tr>
            <th scope="row">Max Range (@45km/h)</th>
            <td>110 km</td>
          </tr>
          <tr>
            <th scope="row">Max Range (@full speed)</th>
            <td>90 km</td>
          </tr>
          <tr>
            <th scope="row">Other Key Benefits</th>
            <td>
              Fire-safe battery, Range prediction, Comfortable ride, Stable and
              safe
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="fw-bold">
              <MDBBtn color="primary">Buy Now</MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <p>
        Indulge in the perfect harmony of power and range with this Rhyno.
        Offering an exhilarating experience with its robust 2000W motor, it
        ensures a thrilling ride while still delivering an impressive 80-100km
        range on a single charge. Like its counterparts, this machine features
        the safety assurance of a fire-safe advanced LFP battery, along with
        the comprehensive benefits of owning a Rhyno. Boasting a formidable
        combination of a 2000W motor and a 2.7kWh battery, this beast is ready
        to roar on the roads, providing an electrifying journey at every turn.
        Check out the other details below!
      </p>
    </MDBContainer>
  );
}
