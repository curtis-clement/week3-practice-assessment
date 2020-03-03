import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientInfo from "./PatientInfo";

export default function DoctorPatientPortal() {
  const [patientState, setPatientState] = useState([]);
  const [doctorState, setDoctorState] = useState([]);
  const [provider, setProvider] = useState(0);

  const doctorUrl =
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors";
  const patientUrl =
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients";

  useEffect(() => {
    const doctorList = async () => {
      const doctorData = await axios.get(doctorUrl);
      setDoctorState(doctorData.data);
    };
    doctorList();
  }, []);

  const patientList = async () => {
    const patientData = await axios.get(patientUrl);
    setPatientState(patientData.data);
  };
  useEffect(() => {
    patientList();
  }, []);

  function comparePatient(patientInfoA, patientInfoB) {
    return patientInfoA.lastName.localeCompare(patientInfoB.lastName);
  }

  const patientsSorted = [...patientState].sort(comparePatient);

  const filterdPatients =
    parseInt(provider) === 0
      ? patientsSorted
      : patientsSorted.filter(
          patient => patient.doctorId === parseInt(provider)
        );
 
  return (
    <div>
      <p>Patient Portal</p>
      <select
        id="doctor"
        name="doctor"
        onChange={event => setProvider(event.target.value)}
      >
        Select Doctor
        <option value={0}>See All Patients</option>
        {doctorState.map(function(eachDoctor) {
          return (
            <option key={eachDoctor.id} value={eachDoctor.id}>
              {eachDoctor.doctor}
            </option>
          );
        })}
      </select>
      {filterdPatients.map(function(eachPatient) {
        return (
          <div key={eachPatient.id}>
            <PatientInfo
              id={eachPatient.id}
              lastname={eachPatient.lastName}
              firstname={eachPatient.firstName}
              gender={eachPatient.gender}
              dateofbirth={eachPatient.dateOfBirth}
              email={eachPatient.email}
              phone={eachPatient.phoneNumber}
              prescriptions={eachPatient.prescriptions}
              doctorid={eachPatient.doctorId}
            />
          </div>
        );
      })}
    </div>
  );
}
