const searchBtn = document.querySelector('.search_button');
const inputBox = document.querySelector('#lang');
const inputStar = document.querySelector('#stars');

// const profilePic = document.querySelector('.profile_img');
// const DateUpdated = document.querySelector('.updatedDate');
// const forks = document.querySelector('.forks');
// const starCount = document.querySelector('.starCount');

searchBtn.addEventListener('click', function(e) {

    const apiUrl = 'https://api.github.com/search/repositories';
    const lang = "?q=language:" + inputBox.value;
    const star = "+stars:" + inputStar.value;
    // const star = "?q=stars%3A" + inputStar.value;\

    let arr = [];
    alert( apiUrl + lang + star );
    arr.push(apiUrl, lang, star );
    console.log(arr);
    fetch('https://localhost:3000'), {
        method: 'POST',
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(arr)
    }


    // const finalUrl = fetch( apiUrl + lang + star)
    //     .then((result) => result.json())
    //     .then((data) => {
            // console.log( data );

            // data.items.forEach( (e) => {
            //     let pic = e.owner.avatar_url ;
            //     let upd = e.updated_at;
            //     let star = e.stargazers_count ;
            //     let frk = e.forks_count;
            //     console.log(pic, upd, frk, star);
            //     profilePic.src = pic;
            //     DateUpdated.innerHTML =` Date Updated :   ${upd}`;
            //     forks.innerHTML = `Forks :   ${frk}`;
            //     starCount.innerHTML = `Stars : ${star}`;
            // });
        // })
        // .catch((err) => console.log("error occured", err));
})
