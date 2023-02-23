const searchInp = document.querySelector('.search_header input');
const searchBtn = document.querySelector('.search_header button');
const searchList = document.querySelector('.search_list');
const searchItem = document.querySelector('.search_list li');

// function start() {
//   getData(renderData);
// }
// start();

// function getData(dataJson) {
//   fetch('./js/data.json')
//     .then((response) => response.json())
//     .then(dataJson);
// }

// selector
searchInp.addEventListener('keyup', handleSearch);

function handleSearch(e) {
  const searchTxt = e.target.value;
  if (searchTxt) {
    fetch('./js/data.json')
      .then((response) => response.json())
      .then((data) => {
        const listResult = data.filter((resultData) => {
          return resultData.title.toLowerCase().startsWith(searchTxt.toLowerCase());
        });
        // const listResulta = listResult.map((a) => {
        //   return (data = '<li>' + a + '</li>');
        // });
        const listData = listResult.map(function (data) {
          return ` <li>${data.title}</li> `;
        });
        console.log(listData);
        searchList.innerHTML = listData.join('');
        searchItem.style.display = 'block';
      });
  }
}

// function renderData(data) {
//   // const searchTxt = e.target.value;
//   // const result = [];
//   // if (searchTxt) {
//   //   result = data.filter((resultData) => {
//   //     return renderData.toLowerCase();
//   //     console.log(result);
//   //   });
//   // }

//   const listData = data.map(function (data) {
//     return `
//   <li>${data.title}</li>
//   `;
//   });
//   searchList.innerHTML = listData.join('');
// }
