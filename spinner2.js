process.stdout.write('Sayin  from spinner2.js... \rHIIIII\n');
const newSpin = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  \n'];
let timeDelay = 200
for (const b of newSpin) {
  setTimeout(() => {
    process.stdout.write(b);
  }, timeDelay)
  timeDelay += 300;
}
