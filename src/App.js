import logo from "./logo.svg";
import "./App.css";

function App() {
  // return <h1>Test 19.04.2023</h1>;

  function nbYear(p0, percent, aug, p) {
    let people = p0;
    const percentage = percent / 100;
    let years = 0;
    for (let index = 1; people < p; index++) {
      people = Math.floor(people + people * percentage + aug);
      years = index;
    }

    return years;
  }

  function nbYear(p0, percent, aug, p) {
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
    }
    return years;
  }
  // console.log(nbYear(1500, 5, 100, 5000));
  // console.log(nbYear(1500000, 2.5, 10000, 2000000));
  // console.log(nbYear(1500000, 0.25, 1000, 2000000));

  function solution(string) {
    return string

      .split(/([A-Z][a-z]+)/)
      .filter((str) => Boolean(str))
      .join(" ");
  }
  // console.log(solution("camelCasing"));
  // console.log(solution("camelCasingTest"));

  function createPhoneNumber(numbers) {
    let format = "(xxx) xxx-xxxx";

    for (let i = 0; i < numbers.length; i++) {
      format = format.replace("x", numbers[i]);
    }

    return format;
  }

  // function createPhoneNumber(arr) {
  //   return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
  //     .slice(6)
  //     .join("")}`;
  // }

  // function createPhoneNumber(numbers) {
  //   return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
  // }
  // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

  function validBraces(braces) {
    while (/\(\)|\[\]|\{\}/g.test(braces)) {
      braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
    }
    return !braces.length;
  }

  function findOutlier(integers) {
    let iterateArray = integers.filter((elem) => elem % 2 !== 0);
    let nonIterateArray = integers.filter((elem) => elem % 2 === 0);
    return iterateArray.length === 1 ? iterateArray[0] : nonIterateArray[0];
  }
  // console.log(findOutlier([0, 1, 2]));

  function findUniq(arr) {
    arr = arr.sort();
    console.log(arr);

    if (arr[1] === arr[0]) {
      return arr[arr.length - 1];
    }
    return arr[0];
  }

  // console.log(findUniq([0, 1, 1, 1, 1]));
  // console.log(findUniq([0, 5, 0, 0, 0]));

  function digitize(n) {
    const arr = Array.from(arguments);
    return arr.split("").reverse();
  }

  // console.log(digitize(35231));

  function betterThanAverage(classPoints, yourPoints) {
    return (
      yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
    );
  }

  function solution(str) {
    const arr = str.split(/.S{2}/g);
    return arr;
  }

  // function solution(str) {
  //   if (str.length === 0) {
  //     return [];
  //   }

  //   return (str.length % 2 ? str + "_" : str).match(/../g);
  // }

  // console.log(solution("abcdef"));

  function rgb(r, g, b) {
    const value = (arg) => {
      if (arg <= 0) return 0;
      if (arg > 255) return 255;

      return arg;
    };
    const hex = (arg) => {
      console.log(arg.toString(16).toUpperCase());
      const hexValue = arg.toString(16).toUpperCase();
      if (hexValue.toString().length === 1) {
        return "0" + hexValue;
      }
      return hexValue;
    };

    return hex(value(r)) + hex(value(g)) + hex(value(b));
  }
  // console.log(rgb(0, 0, 0));
  // console.log(rgb(0, 0, -20));
  // console.log(rgb(300, 255, 255));
  // console.log(rgb(173, 255, 47));
  console.log(rgb(69, 94, 12)); // '455E0C'
  console.log(rgb(15, 79, 191));
}

export default App;
