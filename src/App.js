import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabledata from './Table/Tabledata'
import { Button } from 'react-bootstrap';
import styles from './Styles.module.css'

function App() {
  const [dataKit, setDataKit] = useState(null)

  const minDataUrl = 'https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  const maxDataUrl = 'https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

  const onChooseDataKit = (dataKit) => {
    setDataKit(dataKit)
  }

  return (
    <div>
      <h4>Choose your datakit:</h4>
      <div className = {styles.buttons__block}>
        <Button onClick = {() => onChooseDataKit(minDataUrl)} variant="primary" className = {styles.button__kit}>Small data kit</Button>
        <Button onClick = {() => onChooseDataKit(maxDataUrl)} variant="primary" className = {styles.button__kit}>Large data kit</Button>
      </div>
      {dataKit ? <Tabledata dataKit = {dataKit}/> : null}
    </div>
  );
}

export default App;
