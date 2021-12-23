import React, { useState } from 'react';
import { evaluate } from 'mathjs';

interface Result {
  sum: any;
  diff: any;
  mult: any;
  divide: any;

}

export const Main: React.FC = () => {
  const [z1, setZ1] = useState<string>('');
  const [z2, setZ2] = useState<string>('');
  const [result, setResult] = useState<Result>({
    sum: '',
    diff: '',
    mult: '',
    divide: ''
  });

  const firstNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZ1(e.target.value);
  }

  const secondNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZ2(e.target.value);
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult({
      sum: evaluate(`(${z1}) + (${z2})`),
      diff: evaluate(`(${z1}) - (${z2})`),
      mult: evaluate(`(${z1}) * (${z2})`),
      divide: evaluate(`(${z1}) / (${z2})`)
    })
  }

  return (
    <main>
        <form className="numbers" id="form" onSubmit={submitHandler}>
          <fieldset>
            <legend>Set imagining numbers to make some calculations</legend>
            <label htmlFor="z1">
              First imagining number:
              <input className="numbers_field" type="text" value={z1} onChange={firstNumberHandler} />
              <span className="bar"></span>
            </label>
            <label htmlFor="z2">
              Second imagining number:
              <input className="numbers_field" type="text" value={z2} onChange={secondNumberHandler} />
              <span className="bar"></span>
            </label>
          </fieldset>
          <button className="submit-button" type="submit">Calculate</button>
        </form>

        <div className="output">
          <div className="output__sum">Сума чисел: {typeof result.sum !== 'object'
            ? result.sum :
            `${result.sum.re}${result.sum.im >= 0 ? '+' + result.sum.im : result.sum.im}i`}
          </div>
          <div className="output__diff">Різниця чисел: {typeof result.diff !== 'object'
            ? result.diff :
            `${result.diff.re}${result.diff.im >= 0 ? '+' + result.diff.im : result.diff.im}i`}
          </div>
          <div className="output__mult">Добуток чисел: {typeof result.mult !== 'object'
            ? result.mult :
            `${result.mult.re}${result.mult.im >= 0 ? '+' + result.mult.im : result.mult.im}i`}
          </div>
          <div className="output__divide">Частка чисел: {typeof result.divide !== 'object'
            ? result.divide :
            `${result.divide.re}${result.divide.im >= 0 ? '+' + result.divide.im : result.divide.im}i`}
          </div>
        </div>
      </main>
  );
}
