'use strict';

import React, { Component } from 'react';
import FormBuilder from '../main';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import '../css/main.css';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.sampleStore = {
      email: '',
      gender: '',
      savedToCloud: false
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() { }

  componentWillUnmount() { }

  getStore() {
    return this.sampleStore;
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
      ...update,
    }
  }

  onClick() {
    const payload = {};
    this.refs.steper.createMerchant('http://domain', 'port', 'userId', payload).then((response) => {
      console.log(JSON.parse(response));
    })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const steps =
      [
        { name: 'Step1', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
        { name: 'Step2', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
        { name: 'Step3', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
        { name: 'step4', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
        { name: 'Step5', component: <Step5 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
        { name: 'Step6', component: <Step6 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> }
      ]

    return (
      <div className='example'>
        <div className='step-progress'>
          <FormBuilder
            ref="steper"
            steps={steps}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={"Save"}
            hocValidationAppliedTo={[3]}
            startAtStep={window.sessionStorage.getItem('step') ? parseFloat(window.sessionStorage.getItem('step')) : 0}
            onStepChange={(step) => window.sessionStorage.setItem('step', step)}
          />
        </div>
        <div style={{ clear: "both" }}></div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button onClick={this.onClick}>Call FormBuilder Function for Merchant creation</button>
        </div>
      </div>
    )
  }
}
