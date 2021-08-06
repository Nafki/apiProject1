
function displayData(filmData){
  //  console.log(filmData)
filmData.forEach((data,index)=>{
    console.log(data,index)
    let li =  document.createElement('li');
    li.innerHTML ='<p class="listofmovie">'+ data.name+'</p> <p>Classification:  ' +data.classification+'</p> <p> Eye Colors:  '+data.eye_colors +'</p><p>Hair Color:  '+data.hair_colors+'</p>'
    document.querySelector('ol').appendChild(li)
    document.querySelectorAll('.listofmovie')[index].style.color = 'green'
})

}
function fetchData() {
    fetch('https://ghibliapi.herokuapp.com/species')
    .then(response => {
        //const data = response.json();
        //console.log(data)
        if(!response.ok){
            throw error('ERROR');
        }
        return response.json();
    })
    .then(data =>{
      //  console.log(data);
        displayData(data)
        })
}
fetchData();