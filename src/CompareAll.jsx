import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function CompareAll() {
  return (
    <MDBContainer className="py-5 text-center">
      <MDBTable
        responsive
        striped
        className="text-successtable-border border-light"
      >
        <MDBTableHead className="border-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <strong>Rhyno SE03 Lite</strong>
            </th>
            <th scope="col">
              <strong>Rhyno SE03</strong>
            </th>
            <th scope="col">
              <strong>Rhyno SE03 Max</strong>
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope="row">Battery</th>
            <td>1.8Kwh</td>
            <td>2.7Kwh</td>
            <td>2.7Kwh</td>
          </tr>
          <tr>
            <th scope="row">Battery Features</th>
            <td>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
            <td>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
            <td>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
          </tr>
          <tr>
            <th scope="row">Battery Warranty</th>
            <td>3 years</td>
            <td>3 years</td>
            <td>3 years</td>
          </tr>
          <tr>
            <th scope="row">Charging Time</th>
            <td>3 hours (12A)</td>
            <td>4 hours (12A)</td>
            <td>4 hours (12A)</td>
          </tr>
          <tr>
            <th scope="row">Motor</th>
            <td>1500W</td>
            <td>1500W</td>
            <td>2000W</td>
          </tr>
          <tr>
            <th scope="row">Max Speed</th>
            <td>55 km/h</td>
            <td>55 km/h</td>
            <td>65 km/h</td>
          </tr>
          <tr>
            <th scope="row">Warranty on Electronics</th>
            <td>1 year</td>
            <td>1 year</td>
            <td>1 year</td>
          </tr>
          <tr>
            <th scope="row">Max Range (@30km/h)</th>
            <td>100 km</td>
            <td>150 km</td>
            <td>120 km</td>
          </tr>
          <tr>
            <th scope="row">Max Range (@45km/h)</th>
            <td>90 km</td>
            <td>110 km</td>
            <td>100 km</td>
          </tr>
          <tr>
            <th scope="row">Max Range (@full speed)</th>
            <td>60 km</td>
            <td>90 km</td>
            <td>80 km</td>
          </tr>
          <tr>
            <th scope="row">Other Key Benefits</th>
            <td>Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe</td>
            <td>Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe</td>
            <td>Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe</td>
          </tr>
          <tr>
            <td></td>
            <td className="fw-bold">
              <MDBBtn>Buy Now</MDBBtn>
            </td>
            <td className="fw-bold">
              <MDBBtn>Buy Now</MDBBtn>
            </td>
            <td className="fw-bold">
              <MDBBtn>Buy Now</MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}

