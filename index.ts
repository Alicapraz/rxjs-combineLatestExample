import { combineLatest, fromEvent } from 'rxjs';

const temperature = document.getElementById('temperature-input');
const conversion = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

const temperatureEvent$ = fromEvent(temperature, 'input');
const conversionEvent$ = fromEvent(conversion, 'input');

combineLatest([temperatureEvent$, conversionEvent$]).subscribe(
  ([temperatureEvent, conversionEvent]) => {
    // console.log(
    //   temperatureEvent.target['value'],
    //   conversionEvent.target['value']
    // );

    const temperature = Number(temperatureEvent.target['value']);
    const conversion = conversionEvent.target['value'];

    let result: number;
    if (conversion === 'f-to-c') {
      result = ((temperature - 32) * 5) / 9;
    } else if (conversion === 'c-to-f') {
      result = (temperature * 9) / 5 + 32;
    }

    resultText!.innerHTML = String(result);
  }
);
