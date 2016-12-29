/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 17:24:29
 * @version $Id$
 */
  
  // onmessage = function(event){
  //   console.log(event.data);
  //     var worker1 = new Worker('web_worker1.js'); 
  //     worker1.postMessage('');
  //     worker1.onmessage = function(evt){
  //       var table ;
  //       for(var i = 0 ; i < evt.data.length ; i++){
  //         table += '<tr>'; 
  //         for(var k = 0 ; k < 6 ; k++){
  //           table += "<td>" + evt.data[i+k] + "</td>";
  //         }
  //         table += '</tr>';
  //         i += 5; 
  //       }

  //       table = "<table>" + table + "</table>";

  //       postMessage(table);
  //     }
      
  // }
// onconnect = function(e) {
//     var port = e.ports[0];

//     port.addEventListener('message', function(e) {
//       var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
//       port.postMessage(workerResult);
//     });

//     port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
// }
  var data;
  onconnect = function(evt){
    var port = evt.ports[0];
    port.onmessage = function(event){
      if(event.data === 'get'){
        port.postMessage(data);
      }else{
        data = event.data;
      }
      
    }
  }
  