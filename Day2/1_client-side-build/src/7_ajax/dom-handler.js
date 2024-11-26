import postApiClient from "./post-api-client";
import getData from "./static-data";

const ajaxDiv = document.getElementById('ajaxDiv');
const messageDiv = document.getElementById('messageDiv');

if (ajaxDiv.style.display === 'none') {
    ajaxDiv.style.display = 'block';
    messageDiv.style.display = 'none';
}

var button = document.createElement('button');
button.className = 'btn btn-primary';
button.innerHTML = 'Get Data';

var btnArea = document.getElementById('aDiv_btnArea');
btnArea.appendChild(button);

// // 1. Static Data Call
// button.addEventListener('click', function () {
//     // alert('Button Clicked');
//     var data = getData();
//     generateTable(data);
// });

// // 2. Using Callbacks
// button.addEventListener('click', function () {
//     postApiClient.getAllPostsUsingCallbacks((data) => {
//         generateTable(data);
//     }, (eMsg) => {
//         console.error(eMsg);
//     });
// });

// // 3. Using Promise
// button.addEventListener('click', function () {
//     postApiClient.getAllPostsUsingPromise().then((data) => {
//         generateTable(data);
//     }).catch((eMsg) => {
//         console.error(eMsg);
//     });
// });

// // 4. Using Async Await (ES 2017)
// button.addEventListener('click', async function () {
//     try {
//         var data = await postApiClient.getAllPostsUsingPromise();
//         generateTable(data);
//     } catch (eMsg) {
//         console.error(eMsg);
//     }
// });

// // 5. Using Async Function
// button.addEventListener('click', async function () {
//     try {
//         var data = await postApiClient.getAllPostsAsync();
//         generateTable(data);
//     } catch (eMsg) {
//         console.error(eMsg);
//     }
// });

// 6. Using Async Generators (ES 2018)
button.addEventListener('click', async function () {
    const it = postApiClient.getAllPosts();

    try {
        var data = await it.next();
        generateTable(data.value);
    } catch (eMsg) {
        console.error(eMsg);
    }
});

function generateTable(data) {
    let table = document.getElementById("postTable");
    let row, cell;

    for (const item of data) {
        row = table.insertRow();
        cell = row.insertCell();
        cell.textContent = item.id;
        cell = row.insertCell();
        cell.textContent = item.title;
        cell = row.insertCell();
        cell.textContent = item.body;
    }
}