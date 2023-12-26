
// // get browser id with window.get()
// // var browserId = window.getBrowserId();
// // console.log(browserId);
//  // the returned ID will be unique per computer

// // const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
// // .then(FingerprintJS => FingerprintJS.load())

// // // Get the visitor identifier when you need it.
// // fpPromise
// // .then(fp => fp.get())
// // .then(result => {
// //   // This is the visitor identifier:
// //   const visitorId = result.visitorId
// //   console.log(visitorId)
// // })

// window.onload = (async () => {
//   const id = await window.getBrowserId();
//   console.log(id);
// })

// function navigateToDonate() {
//     window.open("https://www.facebook.com/hsu.gdsc?locale=vi_VN");
// }

// export const hello = (data) => {
//   console.log(data)
// }

// // let id = MediaDeviceInfo.deviceId;
// // console.log(id);

// Instantiate the Shell object and invoke its execute method.


import * as child from 'child_process';
var exec = child.exec('wmic bios get serialnumber', function (error, stdOut, stdErr) {
    console.log('stdout: ' + stdOut.split('\n')[1]);
    console.log('stderr: ' + stdErr);
    // do what you want!
})

// exec('ipconfig', function (error, stdOut, stdErr) {
//     console.log('stdout: ' + stdOut);
//     console.log('stderr: ' + stdErr);
//     // do what you want!
// });
// var oShell = new ActiveXObject("Shell.Application");

// var commandtoRun = "ipconfig";
// if (inputparms != "") {
//   var commandParms = document.Form1.filename.value;
// }

// // Invoke the execute method.  
// oShell.ShellExecute(commandtoRun, commandParms, "", "open", "1");