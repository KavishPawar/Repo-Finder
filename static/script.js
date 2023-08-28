
const searchBtn = document.querySelector('.search_button');
const inputBox = document.querySelector('#lang');
const inputStar = document.querySelector('#stars');
const inputDate = document.querySelector('#dates');

searchBtn.addEventListener('click', async (e) => {

    const apiUrl = 'https://api.github.com/search/repositories';
    const lang = "?q=language:" + inputBox.value;
    const star = inputStar.value;
    const date = inputDate.value;

    let arr1 = `${apiUrl}`;
    // alert( apiUrl + lang + star );
    // arr.push(apiUrl, lang, star );

    if(lang){
        arr1 += lang;
    }
    if(star){
        arr1 += `+stars:${star}` ;
    }
    if(date){
        arr1 += `+dates:${date}` ;
    }

    console.log(arr1, typeof arr1)
    let arr = [];
    arr.push(arr1);
    console.log(arr, typeof arr)
    let stri = JSON.stringify(arr);
    console.log(stri, typeof stri)


let sendData = await fetch("/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(arr)
    })
    let rip2 = await sendData.json()
    console.log(rip2);  

    rip2.forEach((e) => {
        let profile_pic = e.owner.avatar_url;
        let star_count = e.stargazers_count;
        let fork_count = e.forks_count;
        let profile_name = e.full_name;
        let description = e.description;
        let updated_date = e.updated_at;
        let language = e.language;

        renderCards(profile_pic,profile_name, updated_date, star_count, fork_count, language, description);
    });
})




function renderCards(profile_pic, profile_name, updated_date, star_count, fork_count, language, description) {
    let cardList = '';
    cardList += `
        <div class="main_card">
            <div class="top_section">
                <img class="profile_img" src="${profile_pic}">
                <div class="profile_name">${profile_name}</div>
            </div>
            <div class="middle_section">
                <div class="description">${description}</div>
                
            </div>
            <div class="bottom_section">
                <div class="ball"></div>
                <div class="language">${language} </div>
                <div class="stars"> Stars: ${star_count} </div>
                <div class="updated-date">Updated on: ${updated_date} </div>
                <div> Fork: ${fork_count} </div>
            </div>
        </div>
        `
        document.querySelector('.right-main').innerHTML += cardList;
}