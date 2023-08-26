
const searchBtn = document.querySelector('.search_button');
const inputBox = document.querySelector('#lang');
const inputStar = document.querySelector('#stars');

const profilePic = document.querySelector('.profile_img');
const DateUpdated = document.querySelector('.updatedDate');
const forks = document.querySelector('.forks');

searchBtn.addEventListener('click', function(e) {

    const apiUrl = 'https://api.github.com/search/repositories';
    const lang = "?q=language:" + inputBox.value;
    const star = "?q=stars:" + inputStar.value;
    // const star = "?q=stars%3A" + inputStar.value;

    alert( apiUrl + lang + star );
    const finalUrl = fetch( apiUrl + lang + star)
        .then((result) => result.json())
        .then((data) => {
            console.log( data );
            // data.items.forEach( (e) => {
            //     let pic = e.owner.avatar_url ;
            //     let upd = e.updated_at;
            //     let frk = e.forks_count;
            //     console.log(pic, upd, frk );
            //     profilePic.src = pic;
            //     DateUpdated.innerHTML =` Date Updated :   ${upd}`;
            //     forks.innerHTML = `Forks :   ${frk}`;
            // });
        })
        .catch((err) => console.log("error occured", err));
})
