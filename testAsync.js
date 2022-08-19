// function run() {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {}
//     const end = Date.now();
//     console.log(end - start + 'ms');
//   }
//   run();
//   console.log('Done !!!');

// function run() {
//     setTimeout(() => {
//       const start = Date.now();
//       for (let i = 0; i < 1000000000; i++) {}
//       const end = Date.now();
//       console.log(end - start + 'ms');
//     }, 1000);
//   } 
//   run();
//   console.log('Done !!!');

// function run(callback) {
//     setTimeout(() => {
//       const start = Date.now();
//       for (let i = 0; i < 1000000000; i++) {}
//       const end = Date.now();
//       console.log(end - start + 'ms');
//       callback();
//     }, 1000);
//   }
//   run(() => {
//     console.log('Done !!!');
//   });

function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 100000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
} 
async function process() {
    await run();
    await run();
    console.log('Done !!!');
} 
process();
