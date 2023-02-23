// selector
const searchInp = document.querySelector('.search_header input');
const searchBtn = document.querySelector('.search_header button');
const searchList = document.querySelector('.search_list');
const searchItem = document.querySelector('.search_list li');
searchInp.addEventListener('keyup', handleSearch);

// function
function handleSearch(e) {
  const searchTxt = e.target.value;
  if (searchTxt) {
    fetch('./js/data.json')
      .then((response) => response.json())
      .then((data) => {
        const listResult = data.filter((resultData) => {
          return resultData.title.toLowerCase().startsWith(searchTxt.toLowerCase());
        });
        const listData = listResult.map(function (data) {
          return ` <li>${data.title}</li> `;
        });
        console.log(listData);
        searchList.innerHTML = listData.join('');
      });
  }
}
