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

export default function RhynoSE03MaxInfo() {
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
        style={{ maxWidth: "100%", height: "auto" }} // Adjust image size here
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
              <strong>Rhyno SE03 Max</strong>
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
            <td>2000W</td>
          </tr>
          <tr>
            <th scope="row">Max Speed</th>
            <td>65 km/h</td>
          </tr>
          <tr>
            <th scope="row">Warranty on Electronics</th>
            <td>1 year</td>
          </tr>
          <tr>
            <th scope="row">Max Range (@30km/h)</th>
            <td>120 km</td>
          </tr>
          <tr>
            <th scope="row">Max Range (@45km/h)</th>
            <td>100 km</td>
          </tr>
          <tr>
            <th scope="row">Max Range (@full speed)</th>
            <td>80 km</td>
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
        This Rhyno is tuned for long drives and no thrills. Like all other
        variants, this machine comes with a fire-safe advanced LFP battery and
        all the other benefits of owning a Rhyno, along with a perfect blend of
        battery capacity and motor power to provide up to 150 km range on a
        single charge. While it may not provide a thrilling ride, it promises a
        dependable and unwavering presence on the long stretches.
      </p>
    </MDBContainer>
  );
}
