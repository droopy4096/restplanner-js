# restplanner-js

## Setup

Here's the setup of devel environment:

```code bash
  npm install -g @google-cloud/functions-emulator
  functions start
  npm install --save request
  functions deploy sampleSchedule --trigger-http
  functions call sampleSchedule
  curl -v 'http://localhost:8010/restplanner-200203/us-central1/sampleSchedule'
```
