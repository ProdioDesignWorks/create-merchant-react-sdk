# payment-processing-react-prodio

is a multi-step component for sequential steps in payment processing.

Full example in `src/examples` directory.

### get started
- run
```
npm install --save payment-processing-react-prodio
```
- require into your project via
```
import PaymentProcessor from "payment-processing-react-prodio";
```
- define the list of all the components* you want to step through. The `name` indicates the title of the UI step and component is what loads.

```
const steps =
    [
      {name: 'Basic', component: <Basic />},
      {name: 'Personal', component: <Personal />},
      {name: 'Banking', component: <Banking />},
      {name: 'Billing', component: <Billing />}
    ]
```

- and now render it out somewhere in your app
```
    <div className='merchant-form'>
        <PaymentProcessor steps={steps}/>
    </div>
```

- pass in following options as well if you want to customise it further

```
// hide or show Next and Previous Buttons at the bottom
showNavigation: true | false

// disable or enable the steps UI navigation on top
showSteps: true | false

// disable or enable onClick step jumping from the UI navigation on top
stepsNavigation: true | false

// show or hide the previous button in the last step (maybe the last step is a thank you message and you don't want them to go back)
prevBtnOnLastStep: true | false

// dev control to disable validation rules called in step components **
dontValidate: true | false

// by default if you hit the Enter key on any element it validates the form and moves to next step if validation passes. Use this to prevent this behaviour
preventEnterSubmission: true | false

// specify what step to start from in the case you need to skip steps (send in a 0 based index for the item in the steps array. e.g. 2 will load <Step3 /> initially)
startAtStep: [stepIndex]

// specify the next button text (if not given it defaults to "Next")
nextButtonText: "Siguiente"

// specify the back button text (if not given it default to "Previous")
backButtonText: "Espalda"

// specify the next button class (if not given it defaults to "btn btn-prev btn-primary btn-lg" which depends on bootstrap)
nextButtonCls: "btn btn-prev btn-primary btn-lg pull-right"

// specify the back button text (if not given it default to "btn btn-next btn-primary btn-lg")
backButtonCls: "btn btn-next btn-primary btn-lg pull-left"

// specify what the next button text should be in the step before the last (This is usually the last "Actionable" step. You can use this option to change the Next button to say Save - if you save the form data collected in previous steps)
nextTextOnFinalActionStep: "Save"

// its recommended that you use basic javascript validation (i.e simple validation implemented inside your step component. But stepzilla steps can also use 'react-validation-mixin' which wraps your steps as higher order components. If you use this then you need to specify those steps indexes that use 'react-validation-mixin' below in this array)
hocValidationAppliedTo: [1, 2]

// function, which is called every time the index of the current step changes (it uses a zero based index)
onStepChange: (step) => console.log(step)

```

example options usage:
```
<div className='merchant-form'>
    <PaymentProcessor steps={steps} stepsNavigation={false} prevBtnOnLastStep={false} startAtStep=2 />
</div>
```

### dev
- all node source is in src/main.js
- you need to install dependencies first `npm install`
- make any changes and run `npm run build` to transpile the jsx into `dist`
- the transpilation is run as an auto pre-publish task so it should usually be up to date when consumed via npm
- `npm run build-example` builds and packs the example app into the 'docs' folder so it can be accessed via ghpages

### run and view example in browser
A full example is found in the `src/examples` directory.

- run `npm install`
- then run `npm run example`
- then go to `http://localhost:8080/webpack-dev-server/src/examples/index.html` in your browser
- hot reload will work as you dev