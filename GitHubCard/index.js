/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const cards = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/lflores0214")
  .then(response => {
    console.log(response);
    cards.appendChild(userCards(response.data));
  })
  .catch(error => console.log(error));

const followersArray = [
  "Cireimu",
  "primelos",
  "sara-DLC",
  "vpagano10",
  "bschatzj"
];

followersArray.forEach(el => {
  axios
    .get(`https://api.github.com/users/${el}`)
    .then(response => {
      console.log(response);
      const cards = document.querySelector(".cards");
      const card = userCards(response.data);
      cards.appendChild(card);
    })
    .catch(error => console.log(error));
});

const followersArray2 = [];

axios
  .get(`https://api.github.com/users/lflores0214/followers`)
  .then(response => {
    followersArray2.push(response);
    response.data.forEach(el => {
      axios.get(`https://api.github.com/users/${el.login}`).then(response => {
        console.log(response);
        const cards = document.querySelector(".cards");
        const card = userCards(response.data);
        cards.appendChild(card);
      });
    });
  })
  .catch(error => console.log(error));
console.log(followersArray2);

// followersArray2.forEach(el => {
//   axios.get(`https://api.github.com/users/${el.data.login}`).then(response =>{
//     console.log(response)
//     const cards = document.querySelector('.cards');
//     const card = userCards(response.data);
//     cards.appendChild(card)
//   })
// })

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function userCards(obj) {
  const newCard = document.createElement("div"),
    img = document.createElement("img"),
    cardInfo = document.createElement("div"),
    name = document.createElement("h3"),
    userName = document.createElement("p"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    profileLink = document.createElement("a"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");

  newCard.classList.add("card");
  name.classList.add("name");
  userName.classList.add("username");

  img.src = obj.avatar_url;
  name.textContent = obj.name;
  userName.textContent = obj.login;
  location.textContent = obj.location;
  profileLink.href = obj.html_url;
  profileLink.textContent = obj.html_url;
  followers.textContent = obj.followers;
  following.textContent = obj.following;

  newCard.appendChild(img);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return newCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
// data:
// avatar_url: "https://avatars3.githubusercontent.com/u/52762728?v=4"
// bio: null
// blog: ""
// company: null
// created_at: "2019-07-10T21:28:30Z"
// email: null
// events_url: "https://api.github.com/users/lflores0214/events{/privacy}"
// followers: 14
// followers_url: "https://api.github.com/users/lflores0214/followers"
// following: 15
// following_url: "https://api.github.com/users/lflores0214/following{/other_user}"
// gists_url: "https://api.github.com/users/lflores0214/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/lflores0214"
// id: 52762728
// location: "Denver, CO"
// login: "lflores0214"
// name: "Luis Flores"
// node_id: "MDQ6VXNlcjUyNzYyNzI4"
// organizations_url: "https://api.github.com/users/lflores0214/orgs"
// public_gists: 0
// public_repos: 26
// received_events_url: "https://api.github.com/users/lflores0214/received_events"
// repos_url: "https://api.github.com/users/lflores0214/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/lflores0214/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/lflores0214/subscriptions"
// type: "User"
// updated_at: "2019-09-30T14:51:42Z"
// url: "https://api.github.com/users/lflores0214"
