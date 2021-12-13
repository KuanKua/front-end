let listFirst = document.querySelector("#list-first")
let listSecond = document.querySelector("#list-second")
let listThird = document.querySelector("#list-third")
let listFourth = document.querySelector("#list-fourth")
let listFifth = document.querySelector("#list-fifth")

fetch(`https://kuankua-api.herokuapp.com/directories/recentfive`)
.then(r => r.json())
.then(top5 => {
  listFirst.textContent = top5[0].directory_name
  listSecond.textContent = top5[1].directory_name
  listThird.textContent = top5[2].directory_name
  listFourth.textContent = top5[3].directory_name
  listFifth.textContent = top5[4].directory_name
})


const aboutNav = document.querySelector("#about")
const mainContent = document.querySelector("#main-content")
//localStorage.clear()
const navbar = document.querySelector("body > nav > div > ul:nth-child(2)")

let navbarLogin = document.querySelector("#nav-login")
let navbarSignup = document.querySelector("#nav-signup")

const profilePage = document.createElement('div')
profilePage.innerHTML = `
<div class="container" style = "width: 1000px;">
    <div class="main-body">
            
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
  
                    <img id="profile-pic" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" style="margin-bottom: 10px">
                    <div class="mt-3">
                      <h4 id="profile-username" style="font-weight:bold; margin-bottom:40px"></h4>
                      <strong><h4 id="profile-full-name" style="font-size:20px">John Doe</h4></strong>
                      <p id="education_status" class="text-secondary mb-1" style="font-size:14px">Full Stack Developer</p><br>
                      <p id="profile-nationality" class="text-muted font-size-sm" style="color: #ffffff;">Bay Area, San Francisco, CA</p>
                      <br>
                      <button id="profile-follow-button" class="btn btn-primary" style="background-color: #ffffff; border-color: #000000; color:black; font-weight:bold">Follow</button>
                    </div>
                    <br><br>
                  </div>
                </div>
              </div>
              
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> <strong>Website</strong></h6>
                    <span class="text-secondary" id="profile-website">https://bootdey.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> <strong>Github</strong></h6>
                    <span class="text-secondary" id="profile-github">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> <strong>Twitter</strong></h6>
                    <span class="text-secondary" id="profile-twitter">@bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> <strong>Instagram</strong></h6>
                    <span class="text-secondary" id="profile-instagram">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> <strong>Facebook</strong></h6>
                    <span class="text-secondary" id="profile-facebook">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div id="append-progress" class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" style="font-size: 1em;"><strong>Full Name</strong></h6>
                    </div>
                    <div id="profile-full-name-2" class="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" style="font-size: 1em;"> <strong>Email</strong></h6>
                    </div>
                    <div id="profile-email" class="col-sm-9 text-secondary">
                      fip@jukmuh.al
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" style="font-size: 1em;"> <strong>Phone</strong></h6>
                    </div>
                    <div id="profile-phone" class="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" style="font-size: 1em;"> <strong>Bio</strong></h6>
                    </div>
                    <div id="profile-bio" class="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0" style="font-size: 1em;"> <strong> Organization </strong></h6>
                  </div>
                  <div id="profile-organization"  class="col-sm-9 text-secondary">
                    Bay Area, San Francisco, CA
                  </div>
                </div>
                <hr>
                
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" style="font-size: 1em;"> <strong> Address </strong></h6>
                    </div>
                    <div id="profile-address"  class="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-12">
                      <a id="edit-profile-btn" class="btn btn-info " target="__blank" style="background-color: #000000; border-color: #ffffff;">Edit Profile</a>
                      <a id="delete-account-btn" class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills" style="background-color: 	#DC143C; border-color: #ffffff; margin-left: 16px">Delete Account</a>
                      <a id="regenerate-avatar-btn" class="btn btn-info " target="__blank" style="background-color: #000000; border-color: #ffffff; margin-left: 16px">Regenerate Avatar</a>
                    </div>
                  </div>
                </div>
              </div>
              <br>

            </div>
          </div>

        </div>
    </div>
`
if (localStorage.token === undefined){
  loginFormSetup()
} else {
  user_id =localStorage.id
  fetch(`https://kuankua-api.herokuapp.com/users/${user_id}`, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
    }
  })
  .then(r=> r.json())
  .then(user => {
    console.log(user)
    resetMainContent()
    renderUserProfile(user)
    renderLoggedInNavBar(user)
    navbarLogin.textContent = "Log Out"
    navbarSignup.remove()
  })

}

aboutNav.addEventListener('click', ()=>{
    mainContent.innerHTML =  `<h1 style='color:black; font-weight:bold'>ABOUT</h1><hr color="#000000"><br><h2 style='color:black; font-weight:bold'>KuanKua</h2> <p><strong>KuanKua</strong> a platform dedicated to creating digital directories for undigitized and undocumented languages, particularly African languages. The word "kuankua" is the Amharic (Ethiopian language) translation of the word "language".</p>
    <hr color="#000000"><h2 style="font-weight:bold;color:black; text-align: center;"> Vision </h2> <h3 style="text-align: center">Creating a technologically self-sustainable Africa that is up to date with the technological advancements of the rest of the world.</h3>
    <hr color="#000000"><br> <h2 style="font-weight:bold;color:black"> Goal </h2> <p style='color:black;'> Addressing the lack of digital information on the languages of African countries by serving as a platform that is easily accessible for the people of the region to keep digital records of their languages so that their proximity to technological advancements is not hindered merely by the deficiency of sufficient data and documentation of what they speak. KuanKua aims to empower the people of Africa to contribute to the preservation of their own languages, as well as their access to technology. KuanKua is a project that is not fully complete on its own. Rather, it is created to be the foundation for larger and much more practical projects to come in the future, which will be based on the dataset this website creates, organizes, updates, stores and makes accessible to the public. The ultimate goal of KuanKua is bringing the world, the developed and the developing, closer, by overcoming the obstacles in accessing as well as benefiting from technology that are currently common in developing nations.</p>
    <hr color="#000000"><br> <h2 style="font-weight:bold;color:black"> How to Use KuanKua </h2> <p style='color:black;'> You can use KuanKua either to create a directory of a language of your choice or to use the data from other directories created by other users for your research purposes. You can create a directory or add an entry to an existing directory either as a logged in user or without logging in by clicking on the directories navigation bar and then clicking on the "+ New Directory" button. To add entries to directories, you can click on the directories name and once their table view opens up, you will see the option to add a new entry. Clicking on that option takes you to the corresponding forms for each directory's entries. If you want to use the data from the directories, you can simply export or copy the link of each directory. The data is organized as JSON objects/Ruby hashes (i.e. key-value pairs). Creating an account and logging in would provide you with some tools for a more collaborative and interactive environment.</p>
    <br> <p>For more information about the purpose behind the creation of KuanKua, read here: <strong><a href="http://andykeidelfund.com/blog" target="_blank">http://andykeidelfund.com/blog</a></strong> </p>
    `

})

function createProgressBar(directory){

  const append = profilePage.querySelector("div#here")

  const temp = document.createElement("div")

  temp.innerHTML = `<small>${directory.directory_name}</small>
  <div class="progress mb-3" style="height: 5px">
    <div class="progress-bar bg-primary" role="progressbar" style="width: ${(directory.directory_size/directory.goal)*100}%" aria-valuenow="${(directory.directory_size/directory.goal)*100}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>`

  append.append(temp)
}

function renderUserProfile(user){

  if (user.id == localStorage.id){
    console.log("HERE AGAIN DOMBI")

    fetch(`https://kuankua-api.herokuapp.com/users/${localStorage.id}/directories`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then(directories => {
      console.log(directories)
      
      const temp = document.createElement("div")
      temp.classList.add("row")
      temp.classList.add("gutters-sm")

      temp.innerHTML = `
      <div class="col-sm-6 mb-3" style="margin-left: 200px; margin-top:10px; padding: 20px" id="delete-here">
        <div class="card h-100">
          <div class="card-body" id="append-progress-2">
            <h4 class="d-flex align-items-center mb-3"><strong>My Directories</strong></h4> <hr color="white">
            <div id="here"></div>
          </div>
        </div>
      </div>`

      const here = document.querySelector("div#here")

      const where = profilePage.querySelector("div#append-progress")
      where.append(temp)

      directories.forEach(directory => {
        createProgressBar(directory)
      })
    })
  } else {
    const where = profilePage.querySelector("div#delete-here")
    where.innerHTML = ""
  }

    const profilePic = profilePage.querySelector("#profile-pic")
    profilePic.src = user.avatar_address

    const profileUsername = profilePage.querySelector("#profile-username")
    profileUsername.textContent = "@" + user.username

    const profileFollowBtn = profilePage.querySelector("#profile-follow-button")

    if(localStorage.id != user.id){
      profileFollowBtn.style.display = "inline"

      fetch(`https://kuankua-api.herokuapp.com/users/${localStorage.id}/following`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(users => {
        console.log(users)
        let findUser = users.find((userB) => {
          return userB.id == user.id
        })

        console.log(findUser)

        if (findUser != undefined){
          profileFollowBtn.textContent = "Following"
          profileFollowBtn.style.color = "white"
          profileFollowBtn.style.backgroundColor = "black"
          profileFollowBtn.style.borderColor = "white"

          profileFollowBtn.addEventListener('click', ()=>{
          fetch(`https://kuankua-api.herokuapp.com/users/${localStorage.id}/unfollow/${user.id}`, 
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.token}`
              }
            }
          ).then(_ => renderUserProfile(user))
          })

        } else {
          fetch(`https://kuankua-api.herokuapp.com/users/${localStorage.id}/follow/${user.id}`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
            }
          }).then(_ => renderUserProfile(user))
        }
      })
    
      } else {
            profileFollowBtn.style.display = "none"
      }

    const editProfileBtn = profilePage.querySelector("#edit-profile-btn")
    
    if(localStorage.id != user.id){
      editProfileBtn.style.display = "none"
    } else {
      editProfileBtn.style.display = "inline"
      editProfileBtn.addEventListener('click', ()=>{
        renderEditProfile(user)
      })
    }
    
    const regenerateAvatarBtn = profilePage.querySelector("#regenerate-avatar-btn")
    if(localStorage.id != user.id){
      regenerateAvatarBtn.style.display = "none"
    } else {
      regenerateAvatarBtn.style.display = "inline"
      regenerateAvatarBtn.addEventListener('click', ()=>{
        fetch(`https://kuankua-api.herokuapp.com/users/${localStorage.id}/regenerate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
          }
        }).then(_ => {
          //location.reload()
        })
      })
    }

    const deleteAccountBtn = profilePage.querySelector("#delete-account-btn")

    if(localStorage.id != user.id){
      deleteAccountBtn.style.display = "none"
    } else {
      deleteAccountBtn.style.display = "inline"
      deleteAccountBtn.addEventListener('click', ()=> {

        fetch(`https://kuankua-api.herokuapp.com/users/${user.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(_ => logOut())
  
      })
    }
    
    const fullName = profilePage.querySelector("#profile-full-name")
    fullName.textContent = user.first_name + " " + user.last_name

    const education_status = profilePage.querySelector("#education_status")
    education_status.textContent = user.education_status

    const nationality = profilePage.querySelector("#profile-nationality")
    nationality.textContent = user.nationality

    const fullName2 = profilePage.querySelector("#profile-full-name-2")
    fullName2.textContent = user.first_name + " " + user.last_name

    const email = profilePage.querySelector("#profile-email")
    email.textContent = user.email

    const phone = profilePage.querySelector("#profile-phone")
    phone.textContent = user.phone_number

    const bio = profilePage.querySelector("#profile-bio")
    bio.textContent = user.bio

    const address = profilePage.querySelector("#profile-address")
    address.textContent = user.address

    const organization = profilePage.querySelector("#profile-organization")
    organization.textContent = user.organization

    const github = profilePage.querySelector("#profile-github")
    github.textContent = user.github

    const website = profilePage.querySelector("#profile-website")
    website.textContent = user.website

    const instagram = profilePage.querySelector("#profile-instagram")
    instagram.textContent = "@" + user.instagram

    const facebook = profilePage.querySelector("#profile-facebook")
    facebook.textContent = user.facebook

    const twitter = profilePage.querySelector("span#profile-twitter")
    twitter.textContent = "@" + user.twitter

    mainContent.append(profilePage)
}


function loginFormSetup(){

const loginForm = document.createElement("form")
loginForm.style.paddingTop = "60px"

loginForm.innerHTML = `<img style="display: block;width:130px; margin-left: auto; margin-right: auto;height:auto" src="kkfinal.PNG"> <h1 style="text-align: center"> <strong>KuanKua</strong> </h1><br> <div class="form-group">
<label class="control-label col-sm-2" for="username">Username:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" name="username" placeholder="Enter username">
</div>
</div>
<br><br>
<div class="form-group">
<label class="control-label col-sm-2" for="pwd">Password:</label>
<div class="col-sm-10">
  <input type="password" class="form-control" name="password" placeholder="Enter password">
</div>
</div>
<div class="form-group">
<div class="col-sm-offset-2 col-sm-10">
</div>
</div>
<br><br>
<div class="form-group">
<div class="col-sm-offset-2 col-sm-10">
  <button type="submit" class="btn btn-default" style="background-color: #000000; color: #ffffff;">Log In</button>
  <button type="button" id="sign-up" class= "btn btn-default" style="background-color: #000000; color: #ffffff;"> Sign Up </button>
</div>
</div>`

loginForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    fetch(`https://kuankua-api.herokuapp.com/login`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        },
    body: JSON.stringify(
        {
            username: event.target.username.value,
            password: event.target.password.value
        }
    )})
    .then(r => r.json())
    .then(user => {
        resetMainContent()
        console.log("USER LOG!!")
        console.log(user)
        localStorage.token = user.token
        localStorage.id = user.user.id
        console.log(user.user.id)
        //window.localStorage.setItem('user', JSON.stringify(user))
        renderLoggedInNavBar(user.user)
        //newDirectoryFormSetup(data.id)
        renderUserProfile(user.user)
        navbarLogin.textContent = "Log Out"
    navbarSignup.remove()
    })

    

    loginForm.reset()
})


const signupBtn = loginForm.querySelector("#sign-up")

signupBtn.addEventListener('click', () => {
    resetMainContent()
    mainContent.append(signupForm)
})

mainContent.append(loginForm)

}

function logOut(){
  /* const container = document.getElementsByClassName("container-fluid")[0]
  container.innerHTML = ""
  container.innerHTML = `
  <div class="navbar-header">
              <a class="navbar-brand" href="#">KuanKua</a>
            </div>
            <ul class="nav navbar-nav">
              <li><a id="directories" href="#">Directories</a></li>
              <li><a id="feed" href="#">Feed</a></li>
              <li><a id="features" href="#">Features</a></li>
              <li><a id="about" href= "#" id="about">About</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a id = "nav-signup" href="#"> Sign Up</a></li>
              <li><a id = "nav-login" href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
            </ul>
  `

  navbarLogin = container.querySelector("#nav-login")

  navbarLogin.addEventListener('click', () => {
    if (logStatus === true){
      logOut()
      logStatus = false
    } else {
      resetMainContent()
      loginFormSetup()
      logStatus = true
    }
})

  navbarSignup = container.querySelector("#nav-signup")

  navbarSignup.addEventListener('click', ()=>{
    resetMainContent()
    mainContent.append(signupForm)
  })

 */
  //localStorage.clear()
  //location.reload()

}

function addStyleSheet(fileName) {

  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

function resetMainContent(){
    mainContent.innerHTML = ""
}



navbarLogin.addEventListener('click', () => {
    if (localStorage.token === undefined){
      resetMainContent()
      loginFormSetup()
    } else {
      logOut()
    }
})

navbarSignup.addEventListener('click', ()=>{
  resetMainContent()
  mainContent.append(signupForm)
})



function renderLoggedInNavBar(user){
    resetNavBar()
    
    const profile = document.createElement("li")
    profile.innerHTML = `<a id="profile" href="#">Profile</a>`

    profile.addEventListener('click', ()=> {

            /* fetch(`http://127.0.0.1:3000/users/${localStorage.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                }
            })
            .then(r=> r.json())
            .then(user => {
                resetMainContent()
                renderUserProfile(user)
                console.log(user)
            }) */
            //location.reload()

        })
    
    const directories = document.createElement("li")
    directories.innerHTML = `<a id="directories" href="#">Directories</a>`

    directories.addEventListener('click', ()=> {
      resetMainContent()
      
      fetch("https://kuankua-api.herokuapp.com/directories")
      .then(r => r.json())
      .then(directories => {
        renderDirectories(directories)
      })

    })
    
    const feed = document.createElement("li")
    feed.innerHTML = `<a id="feed" href="#">Feed</a>`

    feed.addEventListener('click', ()=> {
      resetMainContent()

      console.log(user)
      
      fetch(`https://kuankua-api.herokuapp.com/users/${user.id}/activities`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.token}`
      }
      })
      .then(r => r.json())
      .then(activities => {
        renderFeed(activities)
      })

      //mainContent.append(feedPage)
    })

    const contributors = document.createElement("li")
    contributors.innerHTML = `<a id="contributors" href="#">Contributors</a>`
    contributors.addEventListener('click', ()=>{
      resetMainContent()
      // contributors.querySelector("#contributors").backgroundColor = "white"
      // contributors.querySelector("#contributors").color = "black"

      renderContributorsPage(user)
    })
    
    const about = document.createElement("li")
    about.innerHTML = `<a id="about" href= "#" id="about">About</a>`
    about.addEventListener('click', ()=>{
      resetMainContent()
      mainContent.innerHTML =  `<h1 style='color:black; font-weight:bold'>ABOUT</h1><hr color="#000000"><br><h2 style='color:black; font-weight:bold'>KuanKua</h2> <p><strong>KuanKua</strong> a platform dedicated to creating digital directories for undigitized and undocumented languages, particularly African languages. The word "kuankua" is the Amharic (Ethiopian language) translation of the word "language".</p>
      <hr color="#000000"><br><h2 style="font-weight:bold;color:black; text-align: center;"> Vision </h2> <h3 style="text-align: center">Creating a technologically self-sustainable Africa that is up to date with the technological advancements of the rest of the world.</h3>
      <hr color="#000000"><br> <h2 style="font-weight:bold;color:black"> Goal </h2> <p style='color:black;'> Addressing the lack of digital information on the languages of African countries by serving as a platform that is easily accessible for the people of the region to keep digital records of their languages so that their proximity to technological advancements is not hindered merely by the deficiency of sufficient data and documentation of what they speak. KuanKua aims to empower the people of Africa to contribute to the preservation of their own languages, as well as their access to technology. KuanKua is a project that is not fully complete on its own. Rather, it is created to be the foundation for larger and much more practical projects to come in the future, which will be based on the dataset this website creates, organizes, updates, stores and makes accessible to the public. The ultimate goal of KuanKua is bringing the world, the developed and the developing, closer, by overcoming the obstacles in accessing as well as benefiting from technology that are currently common in developing nations.</p>
      <hr color="#000000"><br> <h2 style="font-weight:bold;color:black"> How to Use KuanKua </h2> <p style='color:black;'> You can use KuanKua either to create a directory of a language of your choice or to use the data from other directories created by other users for your research purposes. You can create a directory or add an entry to an existing directory either as a logged in user or without logging in by clicking on the directories navigation bar and then clicking on the "+ New Directory" button. To add entries to directories, you can click on the directories name and once their table view opens up, you will see the option to add a new entry. Clicking on that option takes you to the corresponding forms for each directory's entries. If you want to use the data from the directories, you can simply export or copy the link of each directory. The data is organized as JSON objects/Ruby hashes (i.e. key-value pairs). Creating an account and logging in would provide you with some tools for a more collaborative and interactive environment.</p>
      <br> <p>For more information about the purpose behind the creation of KuanKua, read here: <strong><a href="http://andykeidelfund.com/blog" target="_blank">http://andykeidelfund.com/blog</a></strong> </p>
      `
  })

    navbar.append(profile, contributors, feed, directories, about)
}

function resetNavBar(){
    navbar.innerHTML = ""
}

function renderLoggedOutNavBar(){
    resetNavBar()
    
    const directories = document.createElement("li")
    directories.innerHTML = `<a id="directories" href="#">Directories</a>`
    
    const feed = document.createElement("li")
    feed.innerHTML = `<a id="feed" href="#">Feed</a>`
    
    const features = document.createElement("li")
    features.innerHTML = `<a id="features" href="#">Features</a>`
    
    const about = document.createElement("li")
    about.innerHTML = `<a id="about" href= "#" id="about">About</a>`

    navbar.append(directories, feed, features, about)
}


const signupForm = document.createElement("form")
signupForm.innerHTML = `  <h2 style="text-align: center"> Welcome to KuanKua!</h2> <hr color="black"><br> <div class="form-group-2">
<label class="control-label col-sm-2" for="first_name">First Name:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="first_name" name="first_name" placeholder="Enter first name" style="width: 300px">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="last_name">Last Name:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Enter last name" style="width: 300px">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="username">Username:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="username" name="username" placeholder="Enter username" style="width: 300px">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="pwd">Password:</label>
<div class="col-sm-10">
  <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" style="width: 300px">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="bio">Bio:</label>
<div class="col-sm-10">
  <textarea name="bio" type="text" class="form-control" id="bio" name="bio" placeholder="Enter bio" style="width: 600px"></textarea>
</div>
</div>
<br><br><br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="email">Email:</label>
<div class="col-sm-10">
  <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" style="width: 300px">
</div>
</div>
<br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="phone_number">Phone Number:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="phone_number" name="phone_number" placeholder="Enter your phone number" style="width: 300px">
</div>
</div>
<br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="address">Address:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="address" name="address" placeholder="Enter your address" style="width: 300px">
</div>
</div>
<br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="date_of_birth">Date of Birth:</label>
<div class="col-sm-10">
  <input type="date" class="form-control" id="date_of_birth" name="date_of_birth" placeholder="${Date.now()}" style="width: 220px">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="nationality">Nationality:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="nationality" name="nationality" placeholder="Enter nationality" style="width: 300px">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="education_status">Education Status:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="education_status" name="education_status" placeholder="Enter education status" style="width: 300px">
</div>
</div>
<br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="organization">Organization:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="organization" name="organization" placeholder="Enter organization" style="width: 300px">
</div>
</div>
<br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="website"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Website:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="website" name="website" placeholder="Enter your website" style="width: 400px">
</div>
</div>
<br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="github"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Github:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="github" name="github" placeholder="Enter your github username" style="width: 400px">
</div>
</div>
<br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="instagram" name="instagram" placeholder="Enter your instagram username" style="width: 400px">
</div>
</div>
<br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> Twitter:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="twitter" name="twitter" placeholder="Enter your twitter username" style="width: 400px">
</div>
</div>
<br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="facebook" name="facebook" placeholder="Enter your facebook" style="width: 400px">
</div>
</div>
<br><br>

<div class="form-group-2" id="linguistic_experience"  style="display: none;" >
<label class="control-label col-sm-2" for="linguistic_experience">Linguistic Experience:</label>
<div class="col-sm-10">
  <textarea type="text" class="form-control" id="linguistic_experience" name="linguistic_experience" placeholder="Describe your linguistic experience" style="width: 700px"></textarea>
</div>
<br><br>

</div>
<br>

<div class="form-group-2">
<div class="col-sm-offset-2 col-sm-10">
  <input type="submit" value="Sign Up" class="btn btn-default" style="color: #ffffff; background-color: #000000;"></input>
</div>
</div>

`

// const signupExpert = signupForm.querySelector("#signup-expert")
// signupExpert.addEventListener('click', ()=>{
//   console.log("Sign up as an expert!")
  
//   const moreInfo = signupForm.querySelector("#linguistic_experience")
//   moreInfo.style.display = "block"

// })


signupForm.addEventListener('submit', (event) => {
  event.preventDefault()

  let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
  let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  let randomColor3 = Math.floor(Math.random()*16777215).toString(16);
  let randomColor4 = Math.floor(Math.random()*16777215).toString(16);
  let randomColor5 = Math.floor(Math.random()*16777215).toString(16);

  let newUser = {
    first_name: event.target.first_name.value,
    last_name: event.target.last_name.value,
    username: event.target.username.value,
    password: event.target.password.value,
    bio: event.target.bio.value,
    date_of_birth: event.target.date_of_birth.value,
    nationality: event.target.nationality.value,
    education_status: event.target.education_status.value,
    address: event.target.address.value,
    email: event.target.email.value,
    phone_number: event.target.phone_number.value,
    organization: event.target.organization.value,
    website: event.target.website.value,
    github: event.target.github.value,
    instagram: event.target.instagram.value,
    twitter: event.target.twitter.value,
    facebook: event.target.facebook.value,
    avatar_address: String(`https://source.boringavatars.com/marble/120/${event.target.username.value}?colors=${randomColor1},${randomColor2},${randomColor3},${randomColor4},${randomColor5}`)
  }

  console.log("AVATAR")
  console.log(newUser.avatar_address)

  fetch(`https://kuankua-api.herokuapp.com/register`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        },
    body: JSON.stringify(
          newUser
    )})
    .then(r => r.json())
    .then(user => {
        localStorage.token = user.token
        localStorage.id = user.user.id
        resetMainContent()
        //location.reload()
    })

    signupForm.reset()

})




function renderContributorsPage(loggedUser){
  resetMainContent()

  const following = document.createElement("div")
  following.innerHTML = `<div class="container" style="width: 1000px; margin-bottom:50px">
  <h1 style="color: black"> <strong> Following </strong> </h1><hr color="black">
  <div class="row"></div></div>`
  const fwRow = following.querySelector("div.row")

  fetch(`https://kuankua-api.herokuapp.com/users/${loggedUser.id}/following`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`
    }
  }).then(r => r.json())
  .then(users => {
    users.forEach(user => {
      let contrCard = createContributorCard(user)

      let contrUsername = contrCard.querySelector("#contributors-username")

      contrUsername.addEventListener('click', ()=> {
        resetMainContent()
        renderUserProfile(user)
      })


      let followBtn = contrCard.querySelector(`#follow-btn-${user.id}`)
      followBtn.style.backgroundColor = "black"
      followBtn.style.color = "white"
      followBtn.textContent = "Following"

      followBtn.addEventListener('click', ()=> {
        followBtn.style.backgroundColor = "white"
        followBtn.style.color = "black"
        followBtn.textContent = "Follow"

        console.log("Unfollow")

        fetch(`https://kuankua-api.herokuapp.com/users/${loggedUser.id}/unfollow/${user.id}`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
            }
          }
        ).then(_ => renderContributorsPage(loggedUser))

      })

      fwRow.append(contrCard)
    })
  })

  mainContent.append(following)

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  const notFollowing = document.createElement("div")
  notFollowing.innerHTML = `<div class="container" style="width: 1000px">
  <h1 style="color: black"> <strong> Others </strong> </h1><hr color="black">
  <div class="row"></div></div>`
  const nfRow = notFollowing.querySelector("div.row")

  fetch(`https://kuankua-api.herokuapp.com/users/${loggedUser.id}/notFollowing`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`
    }
  }).then(r => r.json())
  .then(users => {
    users.forEach(user => {
      let contrCard = createContributorCard(user)
      let followBtn = contrCard.querySelector(`#follow-btn-${user.id}`)

      followBtn.addEventListener('click', ()=> {
        followBtn.style.backgroundColor = "black"
        followBtn.style.color = "white"
        followBtn.textContent = "Following"

        fetch(`https://kuankua-api.herokuapp.com/users/${loggedUser.id}/follow/${user.id}`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
            }
          }
        ).then(_ => renderContributorsPage(loggedUser))


      })

      nfRow.append(contrCard)
    })
  })

  mainContent.append(notFollowing)
  
}

function createContributorCard(user){
  const contributorCard = document.createElement("div")
  contributorCard.classList.add("col-md-6")
  contributorCard.classList.add("col-xl-4")

  contributorCard.innerHTML = `                   
          <div class="card">
            <div class="card-body">
              <div class="media align-items-center"><span style="background-image: url(${user.avatar_address})" class="avatar avatar-xl mr-3"></span> 
              <span><button class="btn btn-default" id= "follow-btn-${user.id}" style="background-color: white; color: black; margin-left: 300px; margin-bottom: 6px; font-weight: bold;"> Follow </button> </span>
  
                <div class="media-body overflow-hidden">
                  <h5 class="card-text mb-0"><button id="contributors-username" style="background:none;border:none;"><a style="color:white">@${user.username}</a></button></h5>
                  <p class="card-text text-muted">${user.first_name + " " + user.last_name}</p>
                  <small class="card-text">Nationality: ${user.nationality}</small>
                  <div>
                  <small class="card-text">
                   Bio: ${user.bio}
                  </small> </div>
                  <div>
                  <small class="card-text text-muted">Education: ${user.education_status}</small> </div>
                  <div>
                  <small class="card-text">
                   Organization: ${user.organization}
                  </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `
  return contributorCard
}


function renderFeed(activities){
  resetMainContent()

  let feedPageHeader = document.createElement('div')
  feedPageHeader.classList.add("container")

  feedPageHeader.innerHTML = `
  <div class="row bootstrap snippets bootdey">
  <div class="col-md-7 col-xs-12 col-md-offset-3">
    <div class="panel" id="daily-feed">
      <div class="panel-heading">
        <h1> <strong> Feed </strong> </h1> <hr color="black">
        <h3 class="panel-title"><span class="pull-right label label-round label-warning" style="color:#ffffff; background-color: #000000;">Recent Activities</span>
        </h3>
      </div>
      <div class="panel-body">
        <ul class="list-group list-group-dividered list-group-full"></ul>
      </div>
    </div>
  </div>
  </div>
  `
  const feedPage = feedPageHeader.querySelector('div.panel-body').getElementsByTagName('ul')[0]

  activities.forEach(activity => {

    fetch(`https://kuankua-api.herokuapp.com/users/${localStorage.id}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(r=> r.json())
    .then(user => {

    let item = document.createElement('li')
    item.classList.add("list-group-item")
    item.innerHTML = `
                  <div class="media">
                    <div class="media-left">   
                    <img src=${user.avatar_address} alt="" style="width: 50px; height: auto"><i></i>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">
                        <small id="date-ago" class="pull-right" style="color:white"></small>
                        ${activity.activity_log}
                      </h4>
                      <small>${activity.updated_at}</small>
                    </div>
                  </div>`
    item.style.marginLeft = "80px"

    let time = item.querySelector("#date-ago")

    // if (day.daysPassed === 0){
    time.textContent = `Today`
    // } else if (day.daysPassed === 1) {
    //   time.textContent = 'Yesterday'
    // } else {
    //   time.textContent = `${day.daysPassed} days ago`
    // }

    feedPage.prepend(item)

    })

    // fetch(`http://127.0.0.1:3000/activities/${activity.id}/daysPassed`)
    // .then(r => r.json())
    // .then(day => {
     
    // })

    feedPageHeader.append(feedPage)  

  })
  mainContent.append(feedPageHeader)
}

/* const navFeed = document.querySelector("#feed")
navFeed.addEventListener('click', ()=> {
  resetMainContent()
  mainContent.append(feedPage)
}) */



const navDirectories = document.querySelector("#directories")

navDirectories.addEventListener('click', ()=> {
  resetMainContent()
  
  fetch("https://kuankua-api.herokuapp.com/directories")
  .then(r => r.json())
  .then(directories => {
    renderDirectories(directories)
  })

})

function renderDirectories(directories){

  let total_entries = 0
  let created_by = ""

  fetch("https://kuankua-api.herokuapp.com/contributions")
  .then(r => r.json())
  .then(contributions => {
    total_entries = contributions.length

    let index = 0

  directories.forEach(directory => {

    const directoriesPage = document.createElement("div")
    directoriesPage.innerHTML = `
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="container" style="width: 1000px;">
    <div class="row">
        <div class="col-lg-12">
            <div class="wrapper wrapper-content animated fadeInRight">
    
                <div class="ibox-content forum-container" style="background-color: black; color:white;">
    
                    <div class="forum-title">
                        <div class="pull-right forum-desc">
                            <p style="color: white">Total Entries: ${total_entries}</p>
                        </div>
                        <h3><strong>Directories</strong></h3>
                        <br>
                        <button class="btn btn-default" id="new_directory_btn" style="float: right;"> <strong> + New Directory </strong> </button>
                        <br><br>
                        <hr color="white">
                        <br>
                    </div>
                      
                    <div class="forum-item">
                        <div class="row">
                            <div class="col-md-9">
                                <button style="background:none;border:none;"><a class="forum-item-title" id="directory_name">${directory.directory_name}</a></button>
                                <div class="forum-sub-title"><strong>Language: </strong>${directory.language_name}</div>
                                <div class="forum-sub-title"><strong>Language Description: </strong>${directory.language_description}</div>
                                <div class="forum-sub-title"><strong>Primarily spoken in: </strong>${directory.primarily_spoken_at}</div>
                                <div class="forum-sub-title"><strong>Purpose of Directory: </strong>${directory.database_description}</div>
                                <div class="forum-sub-title"><strong>Goal: </strong>${directory.goal} Entries</div>
                
                            </div>
                            <div class="col-md-1 forum-info">
                                <span class="views-number">
                                    ${directory.views}
                                </span>
                                <div>
                                    <small>Views</small>
                                </div>
                            </div>
                            <div class="col-md-1 forum-info">
                                <span class="views-number">
                                    ${directory.contr_num}
                                </span>
                                <div>
                                    <small>Contributors</small>
                                </div>
                            </div>
                            <div class="col-md-1 forum-info">
                                <span class="views-number">
                                    ${directory.directory_size}
                                </span>
                                <div>
                                    <small>Entries</small>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <button id="export-btn" class="btn btn-default" style="margin-right: 10px"> <strong> Export <strong> </button> <h5> Or Copy Link: </h5> 
                    <textarea id="link-area" rows="1" cols="70" style="color:black; width: 500px;" readonly>Link</textarea>
                    <br>
                    <button id="copy-link" class="btn btn-default" style="margin-right: 10px"> <strong> &#x2398 Copy <strong> </button>
                </div>
            </div>
        </div>
    </div>
    </div>
    `
    const exportBtn = directoriesPage.querySelector("button#export-btn")
    exportBtn.addEventListener('click', () => {
      window.open(`https://kuankua-api.herokuapp.com/directories/${directory.id}/export`, '_blank');
    })

    const link = directoriesPage.querySelector("#link-area")
    link.textContent = `https://kuankua-api.herokuapp.com/directories/${directory.id}/export`

    const copyLink = directoriesPage.querySelector("button#copy-link")
    copyLink.addEventListener('click', () => {
      link.select();
      document.execCommand("copy");
    })

    const newDirectoryBtn = directoriesPage.querySelector("#new_directory_btn")
    newDirectoryBtn.addEventListener('click', () => {
      resetMainContent()
      mainContent.append(newDirectoryForm)
    })

    if (index != 0){
      directoriesPage.querySelector("div.forum-title").remove()
    }
    index++

    let directoryName = directoriesPage.querySelector("#directory_name")

    directoryName.addEventListener('click', ()=> {

      resetMainContent()

      fetch(`https://kuankua-api.herokuapp.com/directories/${directory.id}/increaseview`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        }
      })
      

  if(directory.directory_type === "Word"){

      fetch(`https://kuankua-api.herokuapp.com/directories/${directory.id}/words`)
      .then(r=> r.json())
      .then(words => {

      const directoryElement = document.createElement("div")

      directoryElement.innerHTML =  ` <h3> <strong> ${directory.directory_name} </strong></h3>
      <h5> <strong> Total Entries: </strong> ${words.length} </h5>
      <h5> <strong> Language: </strong> ${directory.language_name} </h5>
      <h5> <strong> Primarily Spoken in: </strong> ${directory.primarily_spoken_at} </h5>
      <h5> <strong> Directory Type: </strong> ${directory.directory_type} Directory </h5>
      <h5> <strong> Language Description: </strong> ${directory.language_description} </h5>
      <h5> <strong> Purpose of Directory: </strong> ${directory.database_description} </h5>
      <h5> <strong> Goal: </strong> ${directory.goal} Entries </h5>
      <h5> <strong> Last Updated: </strong>${directory.updated_at} </h5>
      <button class="btn btn-default" id="new_entry_btn" style="float: right; color: white; background-color: black;"> <strong> + Add a new entry </strong> </button>
      <br><br>
      <div class="table-responsive" style="color:white; background-color:black; width: 1000px; font-size: 13px; text-align: center; border-radius: 16px; margin-top: 30px;">
      <table class="table" id="directory_table" >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Words</th>
            <th scope="col">Definitions</th>
            <th scope="col">Pronunciations</th>
            <th scope="col">Images</th>
            <th scope="col">Audios</th>
            <th scope="col">English Translations of Words</th>
            <th scope="col">Part of Speech</th>
            <th scope="col">Sentence Examples</th>
            <th scope="col">English Translations of Sentence Examples</th>
            <th scope="col">Additional Remarks</th>
            <th scope="col">Total Number of Approvals</th>
            <th scope="col"><div style='width: 70px;'></div></th>
          </tr>
        </thead>
      </table>
    </div>
      `

      let newEntryBtn = directoryElement.querySelector("#new_entry_btn")
      newEntryBtn.addEventListener('click', ()=> {
          resetMainContent()
          newWordEntryForm.addEventListener('submit', (event) => {
            event.preventDefault()

            fetch("https://api.imgur.com/3/image", {
                method: "POST",
                headers: {
                  Authorization: "Client-ID e6dc2c4f6e19f23"
                },
                body: event.target.word_image.files[0]
              }).then(data => data.json()).then(data=>{
                console.log(data)

                fetch("https://www.filestackapi.com/api/store/S3?key=ABUrt6Q66TMqkXNZXRktqz", {
                  method: "POST",
                  headers: {
                    "Content-Type": "audio/mp3" 
                  },
                  body: event.target.word_audio.files[0]
                })
                .then(r => r.json()).then(data2 => {

                  let newWord
                  if (localStorage.id != undefined){
                    newWord = {
                      word_input: event.target.word_input.value,
                      definition: event.target.definition.value,
                      pronunciation: event.target.pronunciation.value,
                      word_image: data.data.link,
                      word_audio: data2.url,
                      word_english_translation: event.target.word_english_translation.value,
                      part_of_speech: event.target.part_of_speech.value,
                      sentence_example: event.target.sentence_example.value,
                      sentence_example_english_translation: event.target.sentence_example_english_translation.value,
                      additional_remark: event.target.additional_remark.value,
                      directory_id: directory.id,
                      user_id: localStorage.id
                    }
                  }else {
                    newWord = {
                      word_input: event.target.word_input.value,
                      definition: event.target.definition.value,
                      pronunciation: event.target.pronunciation.value,
                      word_image: data.data.link,
                      word_audio: data2.url,
                      word_english_translation: event.target.word_english_translation.value,
                      part_of_speech: event.target.part_of_speech.value,
                      sentence_example: event.target.sentence_example.value,
                      sentence_example_english_translation: event.target.sentence_example_english_translation.value,
                      additional_remark: event.target.additional_remark.value,
                      directory_id: directory.id,
                      user_id: 1
                    }
                  }
                  
               
                  fetch(`https://kuankua-api.herokuapp.com/words`, 
                  {
                    method: "POST",
                    headers: 
                    {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newWord)
                  }).then(alert("Successfully created a new word entry!"))
                  newWordEntryForm.reset() 
                })
                
          })

          
    })

        mainContent.append(newWordEntryForm)
    })

      let tableIndex = 1
        words.forEach(word => {

          let table = directoryElement.querySelector("#directory_table")
          let row = table.insertRow(tableIndex)
          tableIndex++

          let cell0 = row.insertCell(0)
          cell0.innerHTML =  `${word.id}`

          let cell1 = row.insertCell(1)
          cell1.innerHTML = `${word.word_input}`

          let cell2 = row.insertCell(2)
          cell2.innerHTML = `${word.definition}`

          let cell3 = row.insertCell(3)
          cell3.innerHTML = `${word.pronunciation}`

          let cell4 = row.insertCell(4)
          cell4.innerHTML = `<a href=${word.word_image} style="color:white" target="_blank"><button style="background:none;border:none;"><h4>&#128444;</h4></button><a>`

          let cell5 = row.insertCell(5)
          cell5.innerHTML = `<a href=${word.word_audio} style="color:white" target="_blank"><button style="background:none;border:none;"><h4>&#128264;</h4></button><a>`

          let cell6 = row.insertCell(6)
          cell6.innerHTML = `${word.word_english_translation}`

          let cell7 = row.insertCell(7)
          cell7.innerHTML = `${word.part_of_speech}`

          let cell8 = row.insertCell(8)
          cell8.innerHTML = `${word.sentence_example}`

          let cell9 = row.insertCell(9)
          cell9.innerHTML = `${word.sentence_example_english_translation}`

          let cell10 = row.insertCell(10)
          cell10.innerHTML = `${word.additional_remark}`

          let cell11 = row.insertCell(11)

          let cell12 = row.insertCell(12)
          
          cell12.innerHTML = `<button style="padding: 2px; font-size: 10px; color: black; border-radius: 6px; border-color: black; font-weight: bold;" id="approveBtn">Approve</button>`

          //let lastValue
          fetch(`https://kuankua-api.herokuapp.com/words/${word.id}/votes/${localStorage.id}`)
          .then(r => r.json())
          .then(data => {
            cell11.innerHTML = `${data.votes}`
            let approveButton = cell12.querySelector("#approveBtn")
            approveButton.addEventListener('click', ()=>{
              fetch(`https://kuankua-api.herokuapp.com/words/${word.id}/approve/${localStorage.id}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              )
  
              cell11.textContent = parseInt(cell11.textContent) + 1
            })
          })
            
            //let lastValue = data.last_value
            //console.log(lastValue)
            

            // if (lastValue === "Approved"){
            //   approveButton.textContent = "Disapprove" 
            //     approveButton.style.fontSize = "10px"
            //     approveButton.style.padding = "2px"
            //     approveButton.style.borderRadius = "6px"
            //     approveButton.style.color = "black"
            //     approveButton.style.borderColor = "black"
            //     approveButton.style.fontWeight = "bold"
            // } else if (lastValue === "Disapproved"){
            //   approveButton.textContent = "Approve"
            //     approveButton.style.borderRadius = "6px"
            //     approveButton.style.fontSize = "10px"
            //     approveButton.style.padding = "2px"
            //     approveButton.style.color = "black"
            //     approveButton.style.borderColor = "black"
            //     approveButton.style.fontWeight = "bold"
            // }

            
              // console.log("At least here")
              // if (lastValue == "Approved"){
              //   approveButton.textContent = "Approve" 
              //   approveButton.style.fontSize = "10px"
              //   approveButton.style.padding = "2px"
              //   approveButton.style.borderRadius = "6px"
              //   approveButton.style.color = "black"
              //   approveButton.style.borderColor = "black"
              //   approveButton.style.fontWeight = "bold"
              //   console.log("HERE")
              //   fetch(`http://127.0.0.1:3000/words/${word.id}/disapprove/${localStorage.id}`,
              //     {
              //       method: "POST",
              //       headers: {
              //         "Content-Type": "application/json"
              //       }
              //     }
              //   )
  
              // cell11.textContent = parseInt(cell11.textContent) - 1
              // } else {
                // approveButton.textContent = "Disapprove"
                // approveButton.style.borderRadius = "6px"
                // approveButton.style.fontSize = "10px"
                // approveButton.style.padding = "2px"
                // approveButton.style.color = "black"
                // approveButton.style.borderColor = "black"
                // approveButton.style.fontWeight = "bold"
  
                
              //}

          
        
          ///
        })

        mainContent.append(directoryElement)

    })} else if (directory.directory_type === "Phrase"){

      fetch(`https://kuankua-api.herokuapp.com/directories/${directory.id}/phrases`)
      .then(r=> r.json())
      .then(phrases => {

      const directoryElement = document.createElement("div")

      directoryElement.innerHTML =  ` <h3> <strong> ${directory.directory_name} </strong></h3>
      <h5> <strong> Total Entries: </strong> ${phrases.length} </h5>
      <h5> <strong> Language: </strong> ${directory.language_name} </h5>
      <h5> <strong> Primarily Spoken in: </strong> ${directory.primarily_spoken_at} </h5>
      <h5> <strong> Directory Type: </strong> ${directory.directory_type} Directory </h5>
      <h5> <strong> Language Description: </strong> ${directory.language_description} </h5>
      <h5> <strong> Purpose of Directory: </strong> ${directory.database_description} </h5>
      <h5> <strong> Last Updated: </strong>${directory.updated_at} </h5>
      <button class="btn btn-default" id="new_entry_btn" style="float: right; color: white; background-color: black;"> <strong> + Add a new entry </strong> </button>
      <br><br>
      <div class="table-responsive" style="color:white; background-color:black; width: 1000px; font-size: 13px; text-align: center; border-radius: 16px; margin-top: 30px;">
      <table class="table" id="directory_table" >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Phrases</th>
            <th scope="col">Meanings</th>
            <th scope="col">Pronunciations</th>
            <th scope="col">Images</th>
            <th scope="col">Audios</th>
            <th scope="col">English Translations of Phrases</th>
            <th scope="col">Part of Speech</th>
            <th scope="col">Sentence Examples</th>
            <th scope="col">English Translations of Sentence Examples</th>
            <th scope="col">Additional Remarks</th>
            <th scope="col">Total Number of Approvals</th>
            <th scope="col"></th>
          </tr>
        </thead>
      </table>
    </div>
      `

      let newEntryBtn = directoryElement.querySelector("#new_entry_btn")
      newEntryBtn.addEventListener('click', ()=> {

        resetMainContent()
        newPhraseEntryForm.addEventListener('submit', (event) => {
            event.preventDefault()

            fetch("https://api.imgur.com/3/image", {
                method: "POST",
                headers: {
                  Authorization: "Client-ID e6dc2c4f6e19f23"
                },
                body: event.target.phrase_image.files[0]
              }).then(data => data.json()).then(data=>{
                console.log(data)

                fetch("https://www.filestackapi.com/api/store/S3?key=ABUrt6Q66TMqkXNZXRktqz", {
                  method: "POST",
                  headers: {
                    "Content-Type": "audio/mp3" 
                  },
                  body: event.target.phrase_audio.files[0]
                })
                .then(r => r.json()).then(data2 => {

                  let newPhrase
                  if (localStorage.id != undefined){
                    newPhrase = {
                      phrase_input: event.target.phrase_input.value,
                      meaning: event.target.meaning.value,
                      pronunciation: event.target.pronunciation.value,
                      phrase_image: data.data.link,
                      phrase_audio: data2.url,
                      phrase_english_translation: event.target.phrase_english_translation.value,
                      part_of_speech: event.target.part_of_speech.value,
                      sentence_example: event.target.sentence_example.value,
                      sentence_example_english_translation: event.target.sentence_example_english_translation.value,
                      additional_remark: event.target.additional_remark.value,
                      directory_id: directory.id,
                      user_id: localStorage.id            
                    }
                  
                  } else {
                    newPhrase = {
                      phrase_input: event.target.phrase_input.value,
                      meaning: event.target.meaning.value,
                      pronunciation: event.target.pronunciation.value,
                      phrase_image: data.data.link,
                      phrase_audio: data2.url,
                      phrase_english_translation: event.target.phrase_english_translation.value,
                      part_of_speech: event.target.part_of_speech.value,
                      sentence_example: event.target.sentence_example.value,
                      sentence_example_english_translation: event.target.sentence_example_english_translation.value,
                      additional_remark: event.target.additional_remark.value,
                      directory_id: directory.id,
                      user_id: 1
                    }
                  }
           

            fetch(`https://kuankua-api.herokuapp.com/phrases`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newPhrase)
            }).then(alert("Successfully created a new phrase entry!"))

            newPhraseEntryForm.reset() 
          })})
            
          })

          mainContent.append(newPhraseEntryForm)
        })

        let tableIndex = 1
        phrases.forEach(phrase => {

          let table = directoryElement.querySelector("#directory_table")
          let row = table.insertRow(tableIndex)
          tableIndex++

          let cell0 = row.insertCell(0)
          cell0.innerHTML =  `${phrase.id}`

          let cell1 = row.insertCell(1)
          cell1.innerHTML = `${phrase.phrase_input}`

          let cell2 = row.insertCell(2)
          cell2.innerHTML = `${phrase.meaning}`

          let cell3 = row.insertCell(3)
          cell3.innerHTML = `${phrase.pronunciation}`

          let cell4 = row.insertCell(4)
          console.log(phrase.phrase_image)
          cell4.innerHTML = `<a href=${phrase.phrase_image} style="color:white" target="_blank"><button style="background:none;border:none;"><h4>&#128444;</h4></button><a>`

          let cell5 = row.insertCell(5)
          cell5.innerHTML = `<a href=${phrase.phrase_audio} style="color:white" target="_blank"><button style="background:none;border:none;"><h4>&#128264;</h4></button><a>`

          let cell6 = row.insertCell(6)
          cell6.innerHTML = `${phrase.phrase_english_translation}`

          let cell7 = row.insertCell(7)
          cell7.innerHTML = `${phrase.part_of_speech}`

          let cell8 = row.insertCell(8)
          cell8.innerHTML = `${phrase.sentence_example}`

          let cell9 = row.insertCell(9)
          cell9.innerHTML = `${phrase.sentence_example_english_translation}`

          let cell10 = row.insertCell(10)
          cell10.innerHTML = `${phrase.additional_remark}`

          let cell11 = row.insertCell(11)
          cell11.innerHTML = `${phrase.votes}`

          let cell12 = row.insertCell(12)
          cell12.innerHTML = `<button style="padding: 2px; font-size: 10px; color: black; border-radius: 6px; border-color: black; font-weight: bold;" id="approveBtn">Approve</button>`
          
          //let approveButton = cell12.querySelector("#approveBtn")

          fetch(`https://kuankua-api.herokuapp.com/phrases/${phrase.id}/votes/${localStorage.id}`)
          .then(r => r.json())
          .then(data => {
            cell11.innerHTML = `0`
            let approveButton = cell12.querySelector("#approveBtn")
            approveButton.addEventListener('click', ()=>{
              fetch(`https://kuankua-api.herokuapp.com/phrases/${phrase.id}/approve/${localStorage.id}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              )
  
              cell11.textContent = parseInt(cell11.textContent) + 1
            })
          })
        })

        mainContent.append(directoryElement)
      })
    } else if (directory.directory_type === "Character"){

      fetch(`https://kuankua-api.herokuapp.com/directories/${directory.id}/characters`)
      .then(r=> r.json())
      .then(characters => {

      const directoryElement = document.createElement("div")

      directoryElement.innerHTML =  ` <h3> <strong> ${directory.directory_name} </strong></h3>
      <h5> <strong> Total Entries: </strong> ${characters.length} </h5>
      <h5> <strong> Language: </strong> ${directory.language_name} </h5>
      <h5> <strong> Primarily Spoken in: </strong> ${directory.primarily_spoken_at} </h5>
      <h5> <strong> Directory Type: </strong> ${directory.directory_type} Directory </h5>
      <h5> <strong> Language Description: </strong> ${directory.language_description} </h5>
      <h5> <strong> Purpose of Directory: </strong> ${directory.database_description} </h5>
      <h5> <strong> Last Updated: </strong>${directory.updated_at} </h5>
      <button class="btn btn-default" id="new_entry_btn" style="float: right; color: white; background-color: black;"> <strong> + Add a new entry </strong> </button>
      <br><br>
      <div class="table-responsive" style="color:white; background-color:black; width: 1000px; font-size: 13px; text-align: center; border-radius: 16px; margin-top: 30px;">
      <table class="table" id="directory_table" >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Characters</th>
            <th scope="col">Pronunciations</th>
            <th scope="col">Images</th>
            <th scope="col">Audios</th>
            <th scope="col">Word Examples</th>
            <th scope="col">Example Words' Definitions</th>
            <th scope="col">Example Words' Pronunciations</th>
            <th scope="col">Example Words' Parts of Speech</th>
            <th scope="col">Additional Remarks</th>
            <th scope="col">Total Number of Approvals</th>
            <th scope="col"></th>
          </tr>
        </thead>
      </table>
    </div>
      `

      let newEntryBtn = directoryElement.querySelector("#new_entry_btn")
      newEntryBtn.addEventListener('click', ()=> {

        resetMainContent()

        newCharacterEntryForm.addEventListener('submit', (event) => {
            event.preventDefault()

            fetch("https://api.imgur.com/3/image", {
                method: "POST",
                headers: {
                  Authorization: "Client-ID e6dc2c4f6e19f23"
                },
                body: event.target.character_image.files[0]
              }).then(data => data.json()).then(data=>{
                console.log(data)

                fetch("https://www.filestackapi.com/api/store/S3?key=ABUrt6Q66TMqkXNZXRktqz", {
                  method: "POST",
                  headers: {
                    "Content-Type": "audio/mp3" 
                  },
                  body: event.target.character_audio.files[0]
                })
                .then(r => r.json()).then(data2 => {  
                  let newCharacter
                  if (localStorage.id != undefined){
                    newCharacter = {
                      character_input: event.target.character_input.value,
                      pronunciation: event.target.pronunciation.value,
                      character_image: data.data.link,
                      character_audio: data2.url,
                      word_example: event.target.word_example.value,
                      word_definition: event.target.word_definition.value,
                      word_pronunciation: event.target.word_pronunciation.value,
                      word_part_of_speech: event.target.word_part_of_speech.value,
                      additional_remark: event.target.additional_remark.value,
                      directory_id: directory.id,
                      user_id: localStorage.id
                    }

                  } else {
                    newCharacter = {
                      character_input: event.target.character_input.value,
                      pronunciation: event.target.pronunciation.value,
                      character_image: data.data.link,
                      character_audio: data2.url,
                      word_example: event.target.word_example.value,
                      word_definition: event.target.word_definition.value,
                      word_pronunciation: event.target.word_pronunciation.value,
                      word_part_of_speech: event.target.word_part_of_speech.value,
                      additional_remark: event.target.additional_remark.value,
                      directory_id: directory.id,
                      user_id: 1
                    }
                  }
            
            fetch(`https://kuankua-api.herokuapp.com/characters`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newCharacter)
            }).then(alert("Successfully created a new character entry!"))

            newCharacterEntryForm.reset()

          }) }) })

          mainContent.append(newCharacterEntryForm)

      })

        let tableIndex = 1
        characters.forEach(character => {

          let table = directoryElement.querySelector("#directory_table")
          let row = table.insertRow(tableIndex)
          tableIndex++

          let cell0 = row.insertCell(0)
          cell0.innerHTML =  `${character.id}`

          let cell1 = row.insertCell(1)
          cell1.innerHTML = `${character.character_input}`

          let cell2 = row.insertCell(2)
          cell2.innerHTML = `${character.pronunciation}`

          let cell3 = row.insertCell(3)
          cell3.innerHTML = `<a href=${character.character_image} style="color:white" target="_blank"><button style="background:none;border:none;"><h4>&#128444;</h4></button><a>`

          let cell4 = row.insertCell(4)
          cell4.innerHTML = `<a href=${character.character_audio} style="color:white" target="_blank"><button style="background:none;border:none;"><h4>&#128264;</h4></button><a>`

          let cell5 = row.insertCell(5)
          cell5.innerHTML = `${character.word_example}`

          let cell6 = row.insertCell(6)
          cell6.innerHTML = `${character.word_definition}`

          let cell7 = row.insertCell(7)
          cell7.innerHTML = `${character.word_pronunciation}`

          let cell8 = row.insertCell(8)
          cell8.innerHTML = `${character.word_part_of_speech}`

          let cell9 = row.insertCell(9)
          cell9.innerHTML = `${character.additional_remark}`

          let cell10 = row.insertCell(10)
          cell10.innerHTML = `${character.votes}`

          let cell11 = row.insertCell(11)
          cell11.innerHTML = `<button style="padding: 2px; font-size: 10px; color: black; border-radius: 6px; border-color: black; font-weight: bold;" id="approveBtn">Approve</button>`
          
          fetch(`https://kuankua-api.herokuapp.com/characters/${character.id}/votes/${localStorage.id}`)
          .then(r => r.json())
          .then(data => {
            cell10.innerHTML = `0`
            let approveButton = cell11.querySelector("#approveBtn")
            approveButton.addEventListener('click', ()=>{
              fetch(`https://kuankua-api.herokuapp.com/characters/${character.id}/approve/${localStorage.id}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              )
  
              cell10.textContent = parseInt(cell10.textContent) + 1
            })
          })
        })

        mainContent.append(directoryElement)
      })

    } else if (directory.directory_type === "Sentence"){

      fetch(`https://kuankua-api.herokuapp.com/directories/${directory.id}/sentences`)
      .then(r=> r.json())
      .then(sentences => {

      const directoryElement = document.createElement("div")

      directoryElement.innerHTML =  ` <h3> <strong> ${directory.directory_name} </strong></h3>
      <h5> <strong> Total Entries: </strong> ${sentences.length} </h5>
      <h5> <strong> Language: </strong> ${directory.language_name} </h5>
      <h5> <strong> Primarily Spoken in: </strong> ${directory.primarily_spoken_at} </h5>
      <h5> <strong> Directory Type: </strong> ${directory.directory_type} Directory </h5>
      <h5> <strong> Language Description: </strong> ${directory.language_description} </h5>
      <h5> <strong> Purpose of Directory: </strong> ${directory.database_description} </h5>
      <h5> <strong> Last Updated: </strong>${directory.updated_at} </h5>
      <button class="btn btn-default" id="new_entry_btn" style="float: right; color: white; background-color: black;"> <strong> + Add a new entry </strong> </button>
      <br><br>
      <div class="table-responsive" style="color:white; background-color:black; width: 1000px; font-size: 13px; text-align: center; border-radius: 16px; margin-top: 30px;">
      <table class="table" id="directory_table" >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Sentences</th>
            <th scope="col">English Translations of Sentences</th>
            <th scope="col">Images</th>
            <th scope="col">Audios</th>
            <th scope="col">Additional Remarks</th>
            <th scope="col">Total Number of Approvals</th>
            <th scope="col"></th>
          </tr>
        </thead>
      </table>
    </div>
      `

      let newEntryBtn = directoryElement.querySelector("#new_entry_btn")
      newEntryBtn.addEventListener('click', ()=> {

        resetMainContent()
        newSentenceEntryForm.addEventListener('submit', (event) => {

            event.preventDefault()

            fetch("https://api.imgur.com/3/image", {
                method: "POST",
                headers: {
                  Authorization: "Client-ID e6dc2c4f6e19f23"
                },
                body: event.target.sentence_image.files[0]
              }).then(data => data.json()).then(data=>{
                console.log(data)

                fetch("https://www.filestackapi.com/api/store/S3?key=ABUrt6Q66TMqkXNZXRktqz", {
                  method: "POST",
                  headers: {
                    "Content-Type": "audio/mp3" 
                  },
                  body: event.target.sentence_audio.files[0]
                })
                .then(r => r.json()).then(data2 => {
                  let newSentence
                  if (localStorage.id != undefined){
                    newSentence = {
                      sentence_input: event.target.sentence_input.value,
                      sentence_english_translation: event.target.sentence_english_translation.value,
                      sentence_image: data.data.link,
                      sentence_audio: data2.url,
                      additional_remark: event.target.additional_remark.value,
                      directory_id: directory.id,
                      user_id: localStorage.id
                    }
                  } else {
                    newSentence = {
                      sentence_input: event.target.sentence_input.value,
                      sentence_english_translation: event.target.sentence_english_translation.value,
                      sentence_image: data.data.link,
                      sentence_audio: data2.url,
                      additional_remark: event.target.additional_remark.value,
                      directory_id: directory.id,
                      user_id: 1
                    }

                  }

            fetch(`https://kuankua-api.herokuapp.com/sentences`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newSentence)
            }).then(alert("Successfully created a new sentence entry!"))

            newSentenceEntryForm.reset()

          }) }) })

          mainContent.append(newSentenceEntryForm)       

      })

        let tableIndex = 1
        sentences.forEach(sentence => {

          let table = directoryElement.querySelector("#directory_table")
          let row = table.insertRow(tableIndex)
          tableIndex++

          let cell0 = row.insertCell(0)
          cell0.innerHTML =  `${sentence.id}`

          let cell1 = row.insertCell(1)
          cell1.innerHTML = `${sentence.sentence_input}`

          let cell2 = row.insertCell(2)
          cell2.innerHTML = `${sentence.sentence_english_translation}`

          let cell3 = row.insertCell(3)
          cell3.innerHTML = `<a href=${sentence.sentence_image} style="color:white" target="_blank"><button style="background:none;border:none;"><h4>&#128444;</h4></button><a>`
          

          let cell4 = row.insertCell(4)
          cell4.innerHTML = `<a href=${sentence.sentence_audio} style="color:white" target="_blank"><button style="background:none;border:none;"><h4>&#128264;</h4></button><a>`

          let cell5 = row.insertCell(5)
          cell5.innerHTML = `${sentence.additional_remark}`

          let cell6 = row.insertCell(6)
          cell6.innerHTML = `${sentence.votes}`

          let cell7 = row.insertCell(7)
          cell7.innerHTML = `<button style="padding: 2px; font-size: 10px; color: black; border-radius: 6px; border-color: black; font-weight: bold;" id="approveBtn">Approve</button>`
          
          fetch(`https://kuankua-api.herokuapp.com/sentences/${sentence.id}/votes/${localStorage.id}`)
          .then(r => r.json())
          .then(data => {
            cell6.innerHTML = `0`
            let approveButton = cell7.querySelector("#approveBtn")
            approveButton.addEventListener('click', ()=>{
              fetch(`https://kuankua-api.herokuapp.com/sentences/${sentence.id}/approve/${localStorage.id}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              )
  
              cell6.textContent = parseInt(cell6.textContent) + 1
            })
          })
        })

        mainContent.append(directoryElement)
      })

    } else if (directory.directory_type === "Long Text") {

      fetch(`https://kuankua-api.herokuapp.com/directories/${directory.id}/longtexts`)
      .then(r=> r.json())
      .then(longtexts => {

      const directoryElement = document.createElement("div")

      directoryElement.innerHTML =  ` <h3> <strong> ${directory.directory_name} </strong></h3>
      <h5> <strong> Total Entries: </strong> ${longtexts.length} </h5>
      <h5> <strong> Language: </strong> ${directory.language_name} </h5>
      <h5> <strong> Primarily Spoken in: </strong> ${directory.primarily_spoken_at} </h5>
      <h5> <strong> Directory Type: </strong> ${directory.directory_type} Directory </h5>
      <h5> <strong> Language Description: </strong> ${directory.language_description} </h5>
      <h5> <strong> Purpose of Directory: </strong> ${directory.database_description} </h5>
      <h5> <strong> Last Updated: </strong>${directory.updated_at} </h5>
      <button class="btn btn-default" id="new_entry_btn" style="float: right; color: white; background-color: black;"> <strong> + Add a new entry </strong> </button>
      <br><br>
      <div class="table-responsive" style="color:white; background-color:black; width: 1000px; font-size: 13px; text-align: center; border-radius: 16px; margin-top: 30px;">
      <table class="table" id="directory_table" >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Long Texts</th>
            <th scope="col">English Translations of Long Texts</th>
            <th scope="col">Images</th>
            <th scope="col">Audios</th>
            <th scope="col">Additional Remarks</th>
            <th scope="col">Total Number of Approvals</th>
            <th scope="col"></th>
          </tr>
        </thead>
      </table>
    </div>
      `

      let newEntryBtn = directoryElement.querySelector("#new_entry_btn")
      newEntryBtn.addEventListener('click', ()=> {

        resetMainContent()

        newLongTextEntryForm.addEventListener('submit', (event) => {

            event.preventDefault()

            fetch("https://api.imgur.com/3/image", {
                method: "POST",
                headers: {
                  Authorization: "Client-ID e6dc2c4f6e19f23"
                },
                body: event.target.long_text_image.files[0]
              }).then(data => data.json()).then(data=>{
                console.log(data)

                fetch("https://www.filestackapi.com/api/store/S3?key=ABUrt6Q66TMqkXNZXRktqz", {
                  method: "POST",
                  headers: {
                    "Content-Type": "audio/mp3" 
                  },
                  body: event.target.long_text_audio.files[0]
                })
                .then(r => r.json()).then(data2 => {

                  let newLongText

                  if (localStorage.id != undefined){
                    newLongText = {
                      long_text_input: event.target.long_text_input.value,
                      long_text_english_translation: event.target.long_text_english_translation.value,
                      long_text_image: data.data.link,
                      long_text_audio: data2.url,
                      additional_remark: event.target.additional_remark.value,
                      directory_id: directory.id,
                      user_id: localStorage.id
                    }
                  } else {
                    newLongText = {
                      long_text_input: event.target.long_text_input.value,
                      long_text_english_translation: event.target.long_text_english_translation.value,
                      long_text_image: data.data.link,
                      long_text_audio: data2.url,
                      additional_remark: event.target.additional_remark.value,
                      directory_id: directory.id,
                      user_id: 1
                    }
                  }

            fetch(`https://kuankua-api.herokuapp.com/longtexts`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newLongText)
            }).then(alert("Successfully created a new long text entry!"))

            newLongTextEntryForm.reset()
            
          }) }) })

          mainContent.append(newLongTextEntryForm)
        
      })

        let tableIndex = 1
        longtexts.forEach(longtext => {

          let table = directoryElement.querySelector("#directory_table")
          let row = table.insertRow(tableIndex)
          tableIndex++

          let cell0 = row.insertCell(0)
          cell0.innerHTML =  `${longtext.id}`

          let cell1 = row.insertCell(1)
          cell1.innerHTML = `${longtext.long_text_input}`

          let cell2 = row.insertCell(2)
          cell2.innerHTML = `${longtext.long_text_english_translation}`

          let cell3 = row.insertCell(3)
          cell3.innerHTML =  `<a href=${longtext.long_text_image} style="color:white" target="_blank"><button style="background:none;border:none;"><h4>&#128444;</h4></button><a>`

          let cell4 = row.insertCell(4)
          cell4.innerHTML = `<a href=${longtext.long_text_audio} style="color:white" target="_blank"><button style="background:none;border:none;"><h4>&#128264;</h4></button><a>`
 
          let cell5 = row.insertCell(5)
          cell5.innerHTML = `${longtext.additional_remark}`

          let cell6 = row.insertCell(6)
          cell6.innerHTML = `${longtext.votes}`

          let cell7 = row.insertCell(7)
          cell7.innerHTML = `<button style="padding: 2px; font-size: 10px; color: black; border-radius: 6px; border-color: black; font-weight: bold;" id="approveBtn">Approve</button>`
          
          fetch(`https://kuankua-api.herokuapp.com/longtexts/${longtext.id}/votes/${localStorage.id}`)
          .then(r => r.json())
          .then(data => {
            cell6.innerHTML = `0`
            let approveButton = cell7.querySelector("#approveBtn")
            approveButton.addEventListener('click', ()=>{
              fetch(`https://kuankua-api.herokuapp.com/longtexts/${longtext.id}/approve/${localStorage.id}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              )
  
              cell6.textContent = parseInt(cell6.textContent) + 1
            })
          })
        })

        mainContent.append(directoryElement)
      })
    }

    })

    mainContent.append(directoriesPage)
  })

  })

}


const newDirectoryForm = document.createElement("form")
newDirectoryForm.innerHTML = 
`<h2 style="text-align: center"> Create a New Directory </h2> <hr color="black"><br> 

<div class="form-group-2">
<label class="control-label col-sm-2" for="directory_name">Directory Name:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="directory_name" name="directory_name" placeholder="Enter the name of the directory" style="width: 300px" required>
</div>
</div>
<br><br>


<div class="form-group-2">
<label class="control-label col-sm-2" for="language_name">Language Name:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="language_name" name="language_name" placeholder="Enter the language's name" style="width: 300px" required>
</div>
</div>
<br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="language_description">Language Description: </label>
<div class="col-sm-10">
  <textarea type="text" class="form-control" id="language_description" name="language_description" placeholder="Enter a brief description of the language" style="width: 600px" required></textarea>
</div>
</div>
<br><br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="database_description">Purpose of this directory:</label>
<div class="col-sm-10">
  <textarea type="text" class="form-control" id="database_description" name="database_description" placeholder="Enter the purpose of this directory" style="width: 600px" required></textarea>
</div>
</div>
<br><br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="primarily_spoken_at">Primarily spoken in:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="primarily_spoken_at" name="primarily_spoken_at" placeholder="Enter where this language is primarily spoken" style="width: 500px" required>
</div>
</div>
<br><br><br>

<div class="form-group-2">
<label class="control-label col-sm-2" for="goal">Set a goal:</label>
<div class="col-sm-10">
  <input type="number" class="form-control" id="goal" name="goal" placeholder="Enter how many entries you hope to have" style="width: 500px" required>
</div>
</div>
<br><br><br>

<label style="margin-left: 14px;"> Select the type of the directory: </label>

<div class="form-group-2">
<br>
<div style="margin-left: 100px;">
<div class="form-check" >
  <input class="form-check-input" type="radio" name="directoryType" id="character_directory" value="Character" checked>
  <label class="form-check-label" for="character_directory" >Characters Directory</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="directoryType" id="word_directory" value="Word">
  <label class="form-check-label" for="word_directory">Words Directory</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="directoryType" id="phrase_directory" value="Phrase">
  <label class="form-check-label" for="phrase_directory">Phrases Directory</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="directoryType" id="sentence_directory" value="Sentence">
  <label class="form-check-label" for="sentence_directory">Sentences Directory</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="directoryType" id="long_text" value="Long Text">
  <label class="form-check-label" for="long_text">Long Text Directory</label>
</div>
</div>
</div>
<br>
<input type="submit" value="Create Directory" class="btn btn-default" style="color: #ffffff; background-color: #000000; float: right; margin-right: 38px;"></input>
`

  newDirectoryForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let newDirectory

    if (localStorage.id === undefined){

      newDirectory = {directories: 
        {
        views: 0,
        language_name: event.target.language_name.value,
        language_description: event.target.language_description.value,
        database_description: event.target.database_description.value,
        directory_name: event.target.directory_name.value,
        primarily_spoken_at: event.target.primarily_spoken_at.value,
        goal: event.target.goal.value,
        directory_type: event.target.directoryType.value,
        user_id: 1
        }
      }

    } else {
      newDirectory = {directories: 
        {
        views: 0,
        language_name: event.target.language_name.value,
        language_description: event.target.language_description.value,
        database_description: event.target.database_description.value,
        directory_name: event.target.directory_name.value,
        primarily_spoken_at: event.target.primarily_spoken_at.value,
        goal: event.target.goal.value,
        directory_type: event.target.directoryType.value,
        user_id: localStorage.id
        }
      }
    }

    console.log(newDirectory)
    console.log("NEW DIRECTORY FORM")

    fetch("https://kuankua-api.herokuapp.com/directories",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
      body: JSON.stringify(newDirectory)
    }).then(_=>{
      fetch("https://kuankua-api.herokuapp.com/directories")
      .then(r => r.json())
      .then(directories => {
        resetMainContent()
        renderDirectories(directories)
      }).then(alert("Successfully created a new directory!"))
    }
    )

    newDirectoryForm.reset()
  })


  const newWordEntryForm = document.createElement("form") //ADD LINK TO NEW ROUTE
  newWordEntryForm.innerHTML = 
  `<h2 style="text-align: center"> Add a New Word </h2> <hr color="black"><br> 
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="word_input">Word:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="word_input" name="word_input" placeholder="Enter a word" style="width: 300px">
  </div>
  </div>
  <br><br>  

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="definition">Definition: </label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="definition" name="definition" placeholder="Enter the definition of the word" style="width: 700px">
  </div>
  </div>
  <br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="pronunciation">Pronunciation:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="pronunciation" name="pronunciation" placeholder="Enter the pronunciation of the word" style="width: 300px">
  </div>
  </div>
  <br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="word_audio">Audio: </label>
  <div class="col-sm-10">
    <input type="file" class="form-control" id="word_audio" name="word_audio" placeholder="Upload" style="width: 300px">
  </div>
  </div>
  <br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="word_image">Image: </label>
  <div class="col-sm-10">
    <input type="file" class="form-control" id="word_image" name="word_image" placeholder="Upload" style="width: 300px">
  </div>
  </div>
  <br><br>

  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="word_english_translation">English Translation of Word:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="word_english_translation" name="word_english_translation" placeholder="Enter the English translation of the word" style="width: 300px">
  </div>
  </div>
  <br><br><br>

  <div class="form-group-2">
  <label style="margin-left: 14px"> Select the part of speech the word belongs to: </label>
  <br>
  <div style="margin-left: 100px;">
  <div class="form-check" >
    <input class="form-check-input" type="radio" name="part_of_speech" id="noun" value="Noun" checked>
    <label class="form-check-label" for="noun" >Noun</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="part_of_speech" id="pronoun" value="Pronoun">
    <label class="form-check-label" for="pronoun">Pronoun</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="part_of_speech" id="verb" value="Verb">
    <label class="form-check-label" for="verb">Verb</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="part_of_speech" id="adjective" value="Adjective">
    <label class="form-check-label" for="adjective">Adjective</label>
  </div>

  <div class="form-check">
  <input class="form-check-input" type="radio" name="part_of_speech" id="adverb" value="Adverb">
  <label class="form-check-label" for="adverb">Adverb</label>
</div>

<div class="form-check">
<input class="form-check-input" type="radio" name="part_of_speech" id="preposition" value="Preposition">
<label class="form-check-label" for="preposition">Preposition</label>
</div>

<div class="form-check">
<input class="form-check-input" type="radio" name="part_of_speech" id="conjunction" value="Conjunction">
<label class="form-check-label" for="conjunction">Conjunction</label>
</div>

<div class="form-check">
<input class="form-check-input" type="radio" name="part_of_speech" id="interjection" value="Interjection">
<label class="form-check-label" for="interjection">Interjection</label>
</div>

  </div>
  </div>
  <br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="sentence_example">Example of the word in use: </label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="sentence_example" name="sentence_example" placeholder="Enter an example sentence for the word" style="width: 700px">
  </div>
  </div>
  <br><br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="sentence_example_english_translation">English Translation of the Example: </label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="sentence_example_english_translation" name="sentence_example_english_translation" placeholder="Enter the English translation of the example" style="width: 700px">
  </div>
  </div>
  <br><br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="additional_remark">Any Additional Remarks: </label>
  <div class="col-sm-10">
    <textarea type="text" class="form-control" id="additional_remark" name="additional_remark" placeholder="Any additional remarks" style="width: 700px"></textarea>
  </div>
  </div>
  <br><br><br>

  <input type="submit" value="Add Entry" class="btn btn-default" style="color: #ffffff; background-color: #000000; float: right; margin-right: 38px;"></input>
  `


const newPhraseEntryForm = document.createElement("form")
newPhraseEntryForm.innerHTML = 
  `<h2 style="text-align: center"> Add a New Phrase </h2> <hr color="black"><br> 
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="phrase_input">Phrase:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="phrase_input" name="phrase_input" placeholder="Enter a phrase" style="width: 300px">
  </div>
  </div>
  <br><br>  

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="meaning">Meaning: </label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="meaning" name="meaning" placeholder="Enter the meaning of the phrase" style="width: 700px">
  </div>
  </div>
  <br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="pronunciation">Pronunciation:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="pronunciation" name="pronunciation" placeholder="Enter the pronunciation of the word" style="width: 300px">
  </div>
  </div>
  <br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="phrase_audio">Audio: </label>
  <div class="col-sm-10">
    <input type="file" class="form-control" id="phrase_audio" name="phrase_audio" placeholder="Upload" style="width: 300px">
  </div>
  </div>
  <br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="phrase_image">Image: </label>
  <div class="col-sm-10">
    <input type="file" class="form-control" id="phrase_image" name="phrase_image" placeholder="Upload" style="width: 300px">
  </div>
  </div>
  <br><br>

  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="phrase_english_translation">English Translation of the Phrase:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="phrase_english_translation" name="phrase_english_translation" placeholder="Enter the English translation of the phrase" style="width: 300px">
  </div>
  </div>
  <br><br><br>




  
  <div class="form-group-2">
  <label style="margin-left: 14px"> Select the part of speech the phrase belongs to: </label>
  <br>
  <div style="margin-left: 100px;">
  <div class="form-check" >
    <input class="form-check-input" type="radio" name="part_of_speech" id="noun" value="Noun" checked>
    <label class="form-check-label" for="noun" >Noun</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="part_of_speech" id="pronoun" value="Pronoun">
    <label class="form-check-label" for="pronoun">Pronoun</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="part_of_speech" id="verb" value="Verb">
    <label class="form-check-label" for="verb">Verb</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="part_of_speech" id="adjective" value="Adjective">
    <label class="form-check-label" for="adjective">Adjective</label>
  </div>

  <div class="form-check">
  <input class="form-check-input" type="radio" name="part_of_speech" id="adverb" value="Adverb">
  <label class="form-check-label" for="adverb">Adverb</label>
</div>

<div class="form-check">
<input class="form-check-input" type="radio" name="part_of_speech" id="preposition" value="Preposition">
<label class="form-check-label" for="preposition">Preposition</label>
</div>

<div class="form-check">
<input class="form-check-input" type="radio" name="part_of_speech" id="conjunction" value="Conjunction">
<label class="form-check-label" for="conjunction">Conjunction</label>
</div>

<div class="form-check">
<input class="form-check-input" type="radio" name="part_of_speech" id="interjection" value="Interjection">
<label class="form-check-label" for="interjection">Interjection</label>
</div>

  </div>
  </div>
  <br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="sentence_example">Example of the phrase in use: </label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="sentence_example" name="sentence_example" placeholder="Enter an example sentence for the phrase" style="width: 700px">
  </div>
  </div>
  <br><br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="sentence_example_english_translation">English Translation of the Example: </label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="sentence_example_english_translation" name="sentence_example_english_translation" placeholder="Enter the English translation of the example" style="width: 700px">
  </div>
  </div>
  <br><br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="additional_remark">Any Additional Remarks: </label>
  <div class="col-sm-10">
    <textarea type="text" class="form-control" id="additional_remark" name="additional_remark" placeholder="Any additional remarks" style="width: 700px"></textarea>
  </div>
  </div>
  <br><br><br>


  <input type="submit" value="Add Entry" class="btn btn-default" style="color: #ffffff; background-color: #000000; float: right; margin-right: 38px;"></input>
  `

  const newSentenceEntryForm = document.createElement("form")
  newSentenceEntryForm.innerHTML = 
    `<h2 style="text-align: center"> Add a New Sentence </h2> <hr color="black"><br> 
    
    <div class="form-group-2">
    <label class="control-label col-sm-2" for="sentence_input">Sentence:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="sentence_input" name="sentence_input" placeholder="Enter a sentence" style="width: 700px">
    </div>
    </div>
    <br><br>  

    <div class="form-group-2">
    <label class="control-label col-sm-2" for="sentence_english_translation">English Translation of the Sentence:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="sentence_english_translation" name="sentence_english_translation" placeholder="Enter the English translation of the sentence" style="width: 700px">
    </div>
    </div>
    <br><br><br>
  
    <div class="form-group-2">
    <label class="control-label col-sm-2" for="sentence_audio">Audio: </label>
    <div class="col-sm-10">
      <input type="file" class="form-control" id="sentence_audio" name="sentence_audio" placeholder="Upload" style="width: 300px">
    </div>
    </div>
    <br><br>
  
    <div class="form-group-2">
    <label class="control-label col-sm-2" for="sentence_image">Image: </label>
    <div class="col-sm-10">
      <input type="file" class="form-control" id="sentence_image" name="sentence_image" placeholder="Upload" style="width: 300px">
    </div>
    </div>
    <br><br>


    <div class="form-group-2">
    <label class="control-label col-sm-2" for="additional_remark">Any Additional Remarks: </label>
    <div class="col-sm-10">
      <textarea type="text" class="form-control" id="additional_remark" name="additional_remark" placeholder="Any additional remarks" style="width: 700px"></textarea>
    </div>
    </div>
    <br><br><br>
  
  
    <input type="submit" value="Add Entry" class="btn btn-default" style="color: #ffffff; background-color: #000000; float: right; margin-right: 38px;"></input>
    `

const newCharacterEntryForm = document.createElement("form")
newCharacterEntryForm.innerHTML = 
    `<h2 style="text-align: center"> Add a New Character </h2> <hr color="black"><br> 
    
    <div class="form-group-2">
    <label class="control-label col-sm-2" for="character_input">Character:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="character_input" name="character_input" placeholder="Enter a character (if it can be typed - if not, upload its image below)" style="width: 450px">
    </div>
    </div>
    <br><br>  

    <div class="form-group-2">
    <label class="control-label col-sm-2" for="pronunciation">Character Sound:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="pronunciation" name="pronunciation" placeholder="Enter the sound of the character" style="width: 300px">
    </div>
    </div>
    <br><br><br>
  
    <div class="form-group-2">
    <label class="control-label col-sm-2" for="character_audio">Audio: </label>
    <div class="col-sm-10">
      <input type="file" class="form-control" id="character_audio" name="character_audio" placeholder="Upload" style="width: 300px">
    </div>
    </div>
    <br><br>
  
    <div class="form-group-2">
    <label class="control-label col-sm-2" for="character_image">Character Image: </label>
    <div class="col-sm-10">
      <input type="file" class="form-control" id="character_image" name="character_image" placeholder="Upload" style="width: 300px">
    </div>
    </div>
    <br><br>

    <div class="form-group-2">
    <label class="control-label col-sm-2" for="word_example">A word containing the character: </label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="word_example" name="word_example" placeholder="Enter the word that includes the character" style="width: 300px">
    </div>
    </div>
    <br><br><br>
    
    <div class="form-group-2">
    <label class="control-label col-sm-2" for="word_definition">Definition: </label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="word_definition" name="word_definition" placeholder="Enter the definition of the example word" style="width: 500px">
    </div>
    </div>
    <br><br><br><br>

    <div class="form-group-2">
    <label class="control-label col-sm-2" for="word_pronunciation">Pronunciation: </label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="word_pronunciation" name="word_pronunciation" placeholder="Enter the pronunciation of the example word" style="width: 500px">
    </div>
    </div>
    <br><br><br>



    <div class="form-group-2">
    <label style="margin-left: 14px"> Select the part of speech the word belongs to: </label>
    <br>
    <div style="margin-left: 100px;">
    <div class="form-check" >
      <input class="form-check-input" type="radio" name="word_part_of_speech" id="noun" value="Noun" checked>
      <label class="form-check-label" for="noun" >Noun</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="word_part_of_speech" id="pronoun" value="Pronoun">
      <label class="form-check-label" for="pronoun">Pronoun</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="word_part_of_speech" id="verb" value="Verb">
      <label class="form-check-label" for="verb">Verb</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="word_part_of_speech" id="adjective" value="Adjective">
      <label class="form-check-label" for="adjective">Adjective</label>
    </div>
  
    <div class="form-check">
    <input class="form-check-input" type="radio" name="word_part_of_speech" id="adverb" value="Adverb">
    <label class="form-check-label" for="adverb">Adverb</label>
  </div>
  
  <div class="form-check">
  <input class="form-check-input" type="radio" name="word_part_of_speech" id="preposition" value="Preposition">
  <label class="form-check-label" for="preposition">Preposition</label>
  </div>
  
  <div class="form-check">
  <input class="form-check-input" type="radio" name="word_part_of_speech" id="conjunction" value="Conjunction">
  <label class="form-check-label" for="conjunction">Conjunction</label>
  </div>
  
  <div class="form-check">
  <input class="form-check-input" type="radio" name="word_part_of_speech" id="interjection" value="Interjection">
  <label class="form-check-label" for="interjection">Interjection</label>
  </div>
  
    </div>
    </div>
    <br>


    <div class="form-group-2">
    <label class="control-label col-sm-2" for="additional_remark">Any Additional Remarks: </label>
    <div class="col-sm-10">
      <textarea type="text" class="form-control" id="additional_remark" name="additional_remark" placeholder="Any additional remarks" style="width: 700px"></textarea>
    </div>
    </div>
    <br><br><br>
  
  
    <input type="submit" value="Add Entry" class="btn btn-default" style="color: #ffffff; background-color: #000000; float: right; margin-right: 38px;"></input>
    `
    
const newLongTextEntryForm = document.createElement("form")
newLongTextEntryForm.innerHTML = 
      `<h2 style="text-align: center"> Add a New Long Text </h2> <hr color="black"><br> 
      
      <div class="form-group-2">
      <label class="control-label col-sm-2" for="long_text_input">Long Text:</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="long_text_input" name="long_text_input" placeholder="Enter a Long Text" style="width: 800px; height: 100px"></textarea>
      </div>
      </div>
      <br><br><br><br><br>
  
      <div class="form-group-2">
      <label class="control-label col-sm-2" for="long_text_english_translation">English Translation of the Long Text:</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="long_text_english_translation" name="long_text_english_translation" placeholder="Enter the English translation of the long text" style="width: 800px; height: 100px;"></textarea>
      </div>
      </div>
      <br><br><br><br><br>
    
      <div class="form-group-2">
      <label class="control-label col-sm-2" for="long_text_audio">Audio: </label>
      <div class="col-sm-10">
        <input type="file" class="form-control" id="long_text_audio" name="long_text_audio" placeholder="Upload" style="width: 300px">
      </div>
      </div>
      <br><br><br>
    
      <div class="form-group-2">
      <label class="control-label col-sm-2" for="long_text_image">Image: </label>
      <div class="col-sm-10">
        <input type="file" class="form-control" id="long_text_image" name="long_text_image" placeholder="Upload" style="width: 300px">
      </div>
      </div>
      <br><br><br><br>
  
      <div class="form-group-2">
      <label class="control-label col-sm-2" for="additional_remark">Any Additional Remarks: </label>
      <div class="col-sm-10">
        <textarea class="form-control" id="additional_remark" name="additional_remark" placeholder="Any additional remarks" style="width: 700px"></textarea>
      </div>
      </div>
      <br><br><br><br>
    
    
      <input type="submit" value="Add Entry" class="btn btn-default" style="color: #ffffff; background-color: #000000; float: right; margin-right: 38px;">
      `


function renderEditProfile(user){

  resetMainContent()

  const editProfileForm = document.createElement("form")
  editProfileForm.id = "edit-profile-form"
    
  editProfileForm.innerHTML = `<h2 style="text-align: center"> Hi ${user.first_name}! Edit your profile below</h2> <hr><br> <div class="form-group-2">
  <label class="control-label col-sm-2" for="first_name_1">First Name:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="first_name_1" name="first_name" style="width: 300px" value="${user.first_name}" required>
  </div>
  </div>
  <br><br>
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="last_name_1">Last Name:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="last_name_1" name="last_name" value="${user.last_name}" style="width: 300px" required>
  </div>
  </div>
  <br><br>
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="username_1">Username:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="username_1" name="username" value="${user.username}" style="width: 300px" required>
  </div>
  </div>
  <br><br>

  <div class="form-group-2">
  <label class="control-label col-sm-2" for="bio_1">Bio:</label>
  <div class="col-sm-10">
    <textarea name="bio" value="${user.bio}" class="form-control" id="bio_1" style="width: 600px" required></textarea>
  </div>
  </div>
  <br><br><br><br>
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="email_1">Email:</label>
  <div class="col-sm-10">
    <input type="email" class="form-control" id="email_1" name="email" value="${user.email}" style="width: 300px" required>
  </div>
  </div>
  <br><br>
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="phone_number_1">Phone Number:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="phone_number_1" name="phone_number" value="${user.phone_number}" style="width: 300px">
  </div>
  </div>
  <br><br>
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="address_1">Address:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="address_1" name="address" value="${user.address}" style="width: 300px">
  </div>
  </div>
  <br><br>
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="nationality_1">Nationality:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="nationality_1" name="nationality" value="${user.nationality}" style="width: 300px" required>
  </div>
  </div>
  <br><br>
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="education_status_1">Education Status:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="education_status_1" name="education_status" value="${user.education_status}" style="width: 300px" required>
  </div>
  </div>
  <br><br>
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="organization_1">Organization:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="organization_1" name="organization" value="${user.organization}" style="width: 300px">
  </div>
  </div>
  <br><br>
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="website_1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Website:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="website_1" name="website" value="${user.website}" style="width: 400px">
  </div>
  </div>
  <br><br>
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="github_1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Github:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="github_1" name="github" value="${user.github}" style="width: 400px">
  </div>
  </div>
  <br><br>
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="instagram_1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="instagram_1" name="instagram" value="${user.instagram}"  style="width: 400px">
  </div>
  </div>
  <br><br>
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="twitter_1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> Twitter:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="twitter_1" name="twitter" value="${user.twitter}" style="width: 400px">
  </div>
  </div>
  <br><br>
  
  <div class="form-group-2">
  <label class="control-label col-sm-2" for="facebook_1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook:</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="facebook_1" name="facebook" value="${user.facebook}" style="width: 400px">
  </div>
  </div>
  <br><br>

  
  </div>
  <br>

  <div class="form-group-2">
  <div class="col-sm-offset-2 col-sm-10" id="for-submit">
  <input type="submit" value="Save Changes" class="btn btn-default" style="color: #ffffff; background-color: #000000;">
  </div>
  </div>
  `

  //

  editProfileForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("HAPPENING!!!!!!!!!!!!")

    let editedUser = {user: 
      {first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      username: event.target.username.value,
      bio: event.target.bio.value,
      nationality: event.target.nationality.value,
      education_status: event.target.education_status.value,
      address: event.target.address.value,
      email: event.target.email.value,
      phone_number: event.target.phone_number.value,
      organization: event.target.organization.value,
      website: event.target.website.value,
      github: event.target.github.value,
      instagram: event.target.instagram.value,
      twitter: event.target.twitter.value,
      facebook: event.target.facebook.value,
      avatar_address: user.avatar_address}
    }
  
    fetch(`https://kuankua-api.herokuapp.com/users/${user.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.token}`
          },
      body: JSON.stringify(
            editedUser
      )})
      .then(r => r.json())
      .then(user => {
          alert("Successfully edited profile!")
          resetMainContent()
          //location.reload()
      })
  }) 

  mainContent.append(editProfileForm)
}