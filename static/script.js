
const searchBtn = document.querySelector('.search_button');
const inputBox = document.querySelector('#lang');
const inputStar = document.querySelector('#stars');

searchBtn.addEventListener('click', async (e) => {

    const apiUrl = 'https://api.github.com/search/repositories';
    const lang = "?q=language:" + inputBox.value;
    const star = "+stars:" + inputStar.value;

    let arr = [];
    alert( apiUrl + lang + star );
    arr.push(apiUrl, lang, star );



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
        let profile_name = e.name;
        let updated_date = e.updated_at;
         // console.log(`user${i}=> ${profile_pic}, ${star_count}, ${fork_count}`)
        renderCards(profile_pic, profile_name, updated_date, star_count, fork_count);
    });
})

function renderCards(profile_pic, profile_name, updated_date, star_count, fork_count) {
    let cardList = '';
    cardList += `
        <div class="main_card">
            <div class="top_section">
                <img class="profile_img" src="${profile_pic}">
                <div class="profile_name">${profile_name}</div>
            </div>
            <div class="middle_section">
                <span>Stars : ${star_count}</span>
                <span>Fork : ${fork_count}</span>
            </div>
            <div class="bottom_section">
                <div class="updated-date">Updated on: ${updated_date}</div>
            </div>
        </div>
        `
        document.querySelector('.right-main').innerHTML += cardList;
}