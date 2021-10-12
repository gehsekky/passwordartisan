import React from 'react';
import Header from "../components/Header";
import PasswordGenerator from "../components/PasswordGenerator";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <PasswordGenerator />
    </React.Fragment>
  )
}
