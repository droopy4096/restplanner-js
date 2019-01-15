# restplanner-js

## Setup

Here's the setup of devel environment:

```code bash
  npm install @google-cloud/functions-emulator
  node_modules/.bin/functions start
  # projectID: restplanner
  npm install --save request
  npm install pug
  node_modules/.bin/functions deploy sampleSchedule --trigger-http
  node_modules/.bin/functions call sampleSchedule
  curl -v 'http://localhost:8010/restplanner-200203/us-central1/sampleSchedule'
```
