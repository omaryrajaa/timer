const args = process.argv;
let numSeconds = 0;

if (args.length === 2) {
  return;
} else {
  for (let i = 2; i < args.length; i++) {
    numSeconds = args[i];
    if (numSeconds > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, numSeconds * 1000);
    } 
  }
}
