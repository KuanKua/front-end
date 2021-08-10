const aboutNav = document.querySelector("#about")
const mainContent = document.querySelector("#main-content")

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
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <strong><h4 id="profile-full-name">John Doe</h4></strong>
                      <p id="education_status" class="text-secondary mb-1">Full Stack Developer</p><br>
                      <p id="profile-nationality" class="text-muted font-size-sm" style="color: #ffffff;">Bay Area, San Francisco, CA</p>
                      <br>
                      <button class="btn btn-primary" style="background-color: #000000; border-color: #ffffff;">Follow</button>
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
            <div class="col-md-8">
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
                      <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills" style="background-color: #000000; border-color: #ffffff;">Edit Profile</a>
                      <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills" style="background-color: 	#DC143C; border-color: #ffffff; margin-left: 16px">Delete Account</a>
                    </div>
                  </div>
                </div>
              </div>
              <br>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h4 class="d-flex align-items-center mb-3"><strong>My Directories</strong></h4> <hr color="white">
                      <small>Web Design</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h4 class="d-flex align-items-center mb-3"><strong>Directories you follow</strong></h4> <hr color="white">
                      <small>Web Design</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>
`
if (localStorage.token === undefined){
  loginFormSetup()
} else {
  user = window.localStorage.getItem('user')
  renderLoggedInNavBar(user)
  navbarLogin.textContent = "Log Out"
  navbarSignup.remove()
  console.log(localStorage)
  renderUserProfile(user)
}

aboutNav.addEventListener('click', ()=>{
    mainContent.textContent = "This is KuanKua, a platform dedicated to creating digital directories of undigitized and undocumented languages, particularly from the horn of africa."
})

function renderUserProfile(user){
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
loginForm.style.paddingTop = "75px"
loginForm.innerHTML = `  <h1 style="text-align: center"> <strong>KuanKua</strong> </h1><br> <div class="form-group">
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
  <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
</div>
</div>
<div class="form-group">
<div class="col-sm-offset-2 col-sm-10">
  <button type="submit" class="btn btn-default" style="background-color: #000000; color: #ffffff;">Log In</button>
  <button type="button" id="sign-up" class= "btn btn-default" style="background-color: #000000; color: #ffffff;"> Sign Up </button>
  <button type="button" id="login-expert" class= "btn btn-default" style="background-color: #000000; color: #ffffff;"> Log in as an expert </button>
</div>
</div>`

loginForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    fetch(`http://127.0.0.1:3000/login`, {
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
        window.localStorage.setItem('user', user.user)
        renderLoggedInNavBar(user.user)
        //newDirectoryFormSetup(data.id)
        renderUserProfile(user.user)
    })

    navbarLogin.textContent = "Log Out"
    navbarSignup.remove()

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
  localStorage.clear()
  location.reload()

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

/*     const dashboard = document.createElement("li")
    dashboard.innerHTML = `<a href="#" id="dashboard">Dashboard</a>` */
    
    const profile = document.createElement("li")
    profile.innerHTML = `<a id="profile" href="#">Profile</a>`

    profile.addEventListener('click', ()=> {

            fetch(`http://127.0.0.1:3000/users`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                }
            })
            .then(r=> r.json())
            .then(user => {
                resetMainContent()
                renderUserProfile(user[0])
                console.log(user[0])
            })

        })
  
    
    const directories = document.createElement("li")
    directories.innerHTML = `<a id="directories" href="#">Directories</a>`

    directories.addEventListener('click', ()=> {
      resetMainContent()
      
      fetch("http://127.0.0.1:3000/directories")
      .then(r => r.json())
      .then(directories => {
        renderDirectories(directories)
      })

    })
    
    const feed = document.createElement("li")
    feed.innerHTML = `<a id="feed" href="#">Feed</a>`

    feed.addEventListener('click', ()=> {
      resetMainContent()
      
      fetch(`http://127.0.0.1:3000/users/${user.user.id}/activities`, {
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
  <input type="button" id="signup-expert" value="Sign up as an expert" class="btn btn-default" style="color: #ffffff; background-color: #000000;"></input>
</div>
</div>

`

const signupExpert = signupForm.querySelector("#signup-expert")
signupExpert.addEventListener('click', ()=>{
  console.log("Sign up as an expert!")
  
  const moreInfo = signupForm.querySelector("#linguistic_experience")
  moreInfo.style.display = "block"

})


signupForm.addEventListener('submit', (event) => {
  event.preventDefault()

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
    facebook: event.target.facebook.value
  }

  fetch(`http://127.0.0.1:3000/register`, {
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
        resetMainContent()
        renderLoggedInNavBar(user.user)
        renderUserProfile(user.user)
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

  fetch(`http://127.0.0.1:3000/users/${loggedUser.user.id}/following`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`
    }
  }).then(r => r.json())
  .then(users => {
    users.forEach(user => {
      let contrCard = createContributorCard(user)
      let followBtn = contrCard.querySelector(`#follow-btn-${user.id}`)
      followBtn.style.backgroundColor = "black"
      followBtn.style.color = "white"
      followBtn.textContent = "Following"

      followBtn.addEventListener('click', ()=> {
        followBtn.style.backgroundColor = "white"
        followBtn.style.color = "black"
        followBtn.textContent = "Follow"

        console.log("Unfollow")

        fetch(`http://127.0.0.1:3000/users/${loggedUser.user.id}/unfollow/${user.id}`, 
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

  fetch(`http://127.0.0.1:3000/users/${loggedUser.user.id}/notFollowing`, {
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

        fetch(`http://127.0.0.1:3000/users/${loggedUser.user.id}/follow/${user.id}`, 
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
              <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar6.png)" class="avatar avatar-xl mr-3"></span> 
              <span><button class="btn btn-default" id= "follow-btn-${user.id}" style="background-color: white; color: black; margin-left: 300px; margin-bottom: 6px; font-weight: bold;"> Follow </button> </span>
  
                <div class="media-body overflow-hidden">
                  <h5 class="card-text mb-0">@${user.username}</h5>
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

  let feedPageHeader = document.createElement('div')
  feedPageHeader.classList.add("container")

  feedPageHeader.innerHTML = `
  <div class="row bootstrap snippets bootdey">
  <div class="col-md-7 col-xs-12 col-md-offset-3">
    <div class="panel" id="daily-feed">
      <div class="panel-heading">
        <h1> <strong> Feed </strong> </h1> <hr color="black">
        <h3 class="panel-title"><span class="pull-right label label-round label-warning" style="color:#ffffff; background-color: #000000;">10 New Activities</span>
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

    fetch(`http://127.0.0.1:3000/activities/${activity.id}/daysPassed`)
    .then(r => r.json())
    .then(day => {

      let item = document.createElement('li')
      item.classList.add("list-group-item")
      item.innerHTML = `
                    <div class="media">
                      <div class="media-left">
                        <a class="avatar avatar-online" href="javascript:void(0)">
                          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""><i></i></a>
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

      if (day.daysPassed === 0){
        time.textContent = `Today`
      } else if (day.daysPassed === 1) {
        time.textContent = 'Yesterday'
      } else {
        time.textContent = `${day.daysPassed} days ago`
      }

      feedPage.prepend(item)
      
    })

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
  
  fetch("http://127.0.0.1:3000/directories")
  .then(r => r.json())
  .then(directories => {
    renderDirectories(directories)
  })

})

function renderDirectories(directories){

  let total_entries = 0
  let created_by = ""

  fetch("http://127.0.0.1:3000/contributions")
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
                            <p>Total Entries: ${total_entries}</p>
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
                                <a class="forum-item-title" id="directory_name">${directory.directory_name}</a>
                                <div class="forum-sub-title"><strong>Language: </strong>${directory.language_name}</div>
                                <div class="forum-sub-title"><strong>Language Description: </strong>${directory.language_description}</div>
                                <div class="forum-sub-title"><strong>Primarily spoken in: </strong>${directory.primarily_spoken_at}</div>
                                <div class="forum-sub-title"><strong>Purpose of Directory: </strong>${directory.database_description}</div>
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
                                    368
                                </span>
                                <div>
                                    <small>Contributors</small>
                                </div>
                            </div>
                            <div class="col-md-1 forum-info">
                                <span class="views-number">
                                    140
                                </span>
                                <div>
                                    <small>Entries</small>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <button class="btn btn-default"> <strong> Export <strong> </button>
                </div>
            </div>
        </div>
    </div>
    </div>
    `

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

  if(directory.directory_type === "Word"){

      fetch(`http://127.0.0.1:3000/directories/${directory.id}/words`)
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
            <th scope="col"></th>
          </tr>
        </thead>
      </table>
    </div>
      `

      let newEntryBtn = directoryElement.querySelector("#new_entry_btn")
      newEntryBtn.addEventListener('click', ()=> {

          newWordEntryForm.addEventListener('submit', (event) => {
            event.preventDefault()
            let newWord = {
              word_input: event.target.word_input.value,
              definition: event.target.definition.value,
              pronunciation: event.target.pronunciation.value,
              word_image: event.target.word_image.value,
              word_audio: event.target.word_audio.value,
              word_english_translation: event.target.word_english_translation.value,
              part_of_speech: event.target.part_of_speech.value,
              sentence_example: event.target.sentence_example.value,
              sentence_example_english_translation: event.target.sentence_example_english_translation.value,
              additional_remark: event.target.additional_remark.value,
              directory_id: directory.id
            }

            fetch(`http://127.0.0.1:3000/words`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newWord)
            })

            newWordEntryForm.reset()
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
          cell4.innerHTML = `${word.word_image}`

          let cell5 = row.insertCell(5)
          cell5.innerHTML = `${word.word_audio}`

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
          cell11.innerHTML = `${word.votes}`

          let cell12 = row.insertCell(12)
          cell12.innerHTML = `<button style="padding: 2px; font-size: 10px; color: black; border-radius: 6px; border-color: black; font-weight: bold;" id="approveBtn">Approve</button>`
          
          let approveButton = cell11.querySelector("#approveBtn")
          approveButton.addEventListener('click', ()=>{

            if (approveButton.textContent === "Approve"){
              approveButton.textContent = "Disapprove" 
              approveButton.style.fontSize = "10px"
              approveButton.style.padding = "2px"
              approveButton.style.borderRadius = "6px"
              approveButton.style.color = "black"
              approveButton.style.borderColor = "black"
              approveButton.style.fontWeight = "bold"

            cell10.textContent = parseInt(cell10.textContent) + 1
            } else {
              approveButton.textContent = "Approve"
              approveButton.style.borderRadius = "6px"
              approveButton.style.fontSize = "10px"
              approveButton.style.padding = "2px"
              approveButton.style.color = "black"
              approveButton.style.borderColor = "black"
              approveButton.style.fontWeight = "bold"

            cell10.textContent = parseInt(cell10.textContent) - 1
            }
          })
        })

        mainContent.append(directoryElement)

    })} else if (directory.directory_type === "Phrase"){

      fetch(`http://127.0.0.1:3000/directories/${directory.id}/phrases`)
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

            let newPhrase = {
              phrase_input: event.target.phrase_input.value,
              meaning: event.target.meaning.value,
              pronunciation: event.target.pronunciation.value,
              phrase_image: event.target.phrase_image.value,
              phrase_audio: event.target.phrase_audio.value,
              phrase_english_translation: event.target.phrase_english_translation.value,
              part_of_speech: event.target.part_of_speech.value,
              sentence_example: event.target.sentence_example.value,
              sentence_example_english_translation: event.target.sentence_example_english_translation.value,
              additional_remark: event.target.additional_remark.value,
              directory_id: directory.id
            }

            fetch(`http://127.0.0.1:3000/phrases`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newPhrase)
            })

            newPhraseEntryForm.reset()
            
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
          cell2.innerHTML = `${phrase.definition}`

          let cell3 = row.insertCell(3)
          cell3.innerHTML = `${phrase.pronunciation}`

          let cell4 = row.insertCell(4)
          cell4.innerHTML = `${phrase.phrase_image}`

          let cell5 = row.insertCell(5)
          cell5.innerHTML = `${phrase.phrase_audio}`

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
          
          let approveButton = cell11.querySelector("#approveBtn")
          approveButton.addEventListener('click', ()=>{

            if (approveButton.textContent === "Approve"){
              approveButton.textContent = "Disapprove" 
              approveButton.style.fontSize = "10px"
              approveButton.style.padding = "2px"
              approveButton.style.borderRadius = "6px"
              approveButton.style.color = "black"
              approveButton.style.borderColor = "black"
              approveButton.style.fontWeight = "bold"

            cell10.textContent = parseInt(cell10.textContent) + 1
            } else {
              approveButton.textContent = "Approve"
              approveButton.style.borderRadius = "6px"
              approveButton.style.fontSize = "10px"
              approveButton.style.padding = "2px"
              approveButton.style.color = "black"
              approveButton.style.borderColor = "black"
              approveButton.style.fontWeight = "bold"

            cell10.textContent = parseInt(cell10.textContent) - 1
            }
          })

        })

        mainContent.append(directoryElement)
      })
    } else if (directory.directory_type === "Character"){

      fetch(`http://127.0.0.1:3000/directories/${directory.id}/characters`)
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

            let newCharacter = {
              character_input: event.target.character_input.value,
              pronunciation: event.target.pronunciation.value,
              character_image: event.target.character_image.value,
              character_audio: event.target.character_audio.value,
              word_example: event.target.word_example.value,
              word_definition: event.target.word_definition.value,
              word_pronunciation: event.target.word_pronunciation.value,
              word_part_of_speech: event.target.word_part_of_speech.value,
              additional_remark: event.target.additional_remark.value,
              directory_id: directory.id
            }

            fetch(`http://127.0.0.1:3000/characters`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newCharacter)
            })

            newCharacterEntryForm.reset()

          })

          mainContent.append(newCharacterEntryForm)

      })

        let tableIndex = 1
        words.forEach(word => {

          let table = directoryElement.querySelector("#directory_table")
          let row = table.insertRow(tableIndex)
          tableIndex++

          let cell0 = row.insertCell(0)
          cell0.innerHTML =  `${character.id}`

          let cell1 = row.insertCell(1)
          cell1.innerHTML = `${character.character_input}`

          let cell2 = row.insertCell(2)
          cell2.innerHTML = `${word.definition}`

          let cell3 = row.insertCell(3)
          cell3.innerHTML = `${word.pronunciation}`

          let cell4 = row.insertCell(4)
          cell4.innerHTML = `${word.word_image}`

          let cell5 = row.insertCell(5)
          cell5.innerHTML = `${word.word_audio}`

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

          // let cell11 = row.insertCell(11)
          // cell11.innerHTML = `${word.votes}`

          let cell11 = row.insertCell(11)
          cell11.innerHTML = `<button style="padding: 2px; font-size: 10px; color: black; border-radius: 6px; border-color: black; font-weight: bold;" id="approveBtn">Approve</button>`
          
          let approveButton = cell11.querySelector("#approveBtn")
          approveButton.addEventListener('click', ()=>{

            if (approveButton.textContent === "Approve"){
              approveButton.textContent = "Disapprove" 
              approveButton.style.fontSize = "10px"
              approveButton.style.padding = "2px"
              approveButton.style.borderRadius = "6px"
              approveButton.style.color = "black"
              approveButton.style.borderColor = "black"
              approveButton.style.fontWeight = "bold"

            cell10.textContent = parseInt(cell10.textContent) + 1
            } else {
              approveButton.textContent = "Approve"
              approveButton.style.borderRadius = "6px"
              approveButton.style.fontSize = "10px"
              approveButton.style.padding = "2px"
              approveButton.style.color = "black"
              approveButton.style.borderColor = "black"
              approveButton.style.fontWeight = "bold"

            cell10.textContent = parseInt(cell10.textContent) - 1
            }
          })
        })

        mainContent.append(directoryElement)
      })


    }
      
      fetch(`http://127.0.0.1:3000/directories/${directory.id}/contributions`)
      .then(r=> r.json())
      .then(contributions => {

      const directoryElement = document.createElement("div")

      directoryElement.innerHTML =  ` <h3> <strong> ${directory.directory_name} </strong></h3>
      <h5> <strong> Total Entries: </strong> ${contributions.length} </h5>
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
            <th scope="col"></th>
          </tr>
        </thead>
      </table>
    </div>
      `

      let newEntryBtn = directoryElement.querySelector("#new_entry_btn")
      newEntryBtn.addEventListener('click', ()=> {

        resetMainContent()

        if (directory.directory_type === "Word"){

          newWordEntryForm.addEventListener('submit', (event) => {
            event.preventDefault()
            let newWord = {
              word_input: event.target.word_input.value,
              definition: event.target.definition.value,
              pronunciation: event.target.pronunciation.value,
              word_image: event.target.word_image.value,
              word_audio: event.target.word_audio.value,
              word_english_translation: event.target.word_english_translation.value,
              part_of_speech: event.target.part_of_speech.value,
              sentence_example: event.target.sentence_example.value,
              sentence_example_english_translation: event.target.sentence_example_english_translation.value,
              additional_remark: event.target.additional_remark.value,
              directory_id: directory.id
            }

            fetch(`http://127.0.0.1:3000/words`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newWord)
            })

            newWordEntryForm.reset()

          })
          mainContent.append(newWordEntryForm)
        } else if (directory.directory_type === "Phrase"){

          newPhraseEntryForm.addEventListener('submit', (event) => {

            event.preventDefault()
            let newPhrase = {
              phrase_input: event.target.phrase_input.value,
              meaning: event.target.meaning.value,
              pronunciation: event.target.pronunciation.value,
              phrase_image: event.target.phrase_image.value,
              phrase_audio: event.target.phrase_audio.value,
              phrase_english_translation: event.target.phrase_english_translation.value,
              part_of_speech: event.target.part_of_speech.value,
              sentence_example: event.target.sentence_example.value,
              sentence_example_english_translation: event.target.sentence_example_english_translation.value,
              additional_remark: event.target.additional_remark.value,
              directory_id: directory.id
            }

            fetch(`http://127.0.0.1:3000/phrases`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newPhrase)
            })

            newPhraseEntryForm.reset()
            
          })

          mainContent.append(newPhraseEntryForm)
        } else if (directory.directory_type === "Sentence"){

          newSentenceEntryForm.addEventListener('submit', (event) => {

            event.preventDefault()
            let newSentence = {
              sentence_input: event.target.sentence_input.value,
              sentence_english_translation: event.target.sentence_english_translation.value,
              sentence_image: event.target.sentence_image.value,
              sentence_audio: event.target.sentence_audio.value,
              additional_remark: event.target.additional_remark.value,
              directory_id: directory.id
            }

            fetch(`http://127.0.0.1:3000/sentences`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newSentence)
            })

            newSentenceEntryForm.reset()

          })

          mainContent.append(newSentenceEntryForm)

        } else if (directory.directory_type === "Character"){

          newCharacterEntryForm.addEventListener('submit', (event) => {

            event.preventDefault()
            let newCharacter = {
              character_input: event.target.character_input.value,
              pronunciation: event.target.pronunciation.value,
              character_image: event.target.character_image.value,
              character_audio: event.target.character_audio.value,
              word_example: event.target.word_example.value,
              word_definition: event.target.word_definition.value,
              word_pronunciation: event.target.word_pronunciation.value,
              word_part_of_speech: event.target.word_part_of_speech.value,
              additional_remark: event.target.additional_remark.value,
              directory_id: directory.id
            }

            fetch(`http://127.0.0.1:3000/characters`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newCharacter)
            })

            newCharacterEntryForm.reset()

          })

          mainContent.append(newCharacterEntryForm)
        } else if (directory.directory_type === "Long Text"){

          newLongTextEntryForm.addEventListener('submit', (event) => {

            event.preventDefault()
            let newLongText = {
              long_text_input: event.target.long_text_input.value,
              long_text_english_translation: event.target.long_text_english_translation.value,
              long_text_image: event.target.long_text_image.value,
              long_text_audio: event.target.long_text_audio.value,
              additional_remark: event.target.additional_remark.value,
              directory_id: directory.id
            }

            fetch(`http://127.0.0.1:3000/longtexts`, 
            {
              method: "POST",
              headers: 
              {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newLongText)
            })

            newLongTextEntryForm.reset()
            
          })

          mainContent.append(newLongTextEntryForm)
        }
        
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
          cell4.innerHTML = `${word.word_image}`

          let cell5 = row.insertCell(5)
          cell5.innerHTML = `${word.word_audio}`

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

          // let cell11 = row.insertCell(11)
          // cell11.innerHTML = `${word.votes}`

          let cell11 = row.insertCell(11)
          cell11.innerHTML = `<button style="padding: 2px; font-size: 10px; color: black; border-radius: 6px; border-color: black; font-weight: bold;" id="approveBtn">Approve</button>`
          
          let approveButton = cell11.querySelector("#approveBtn")
          approveButton.addEventListener('click', ()=>{

            if (approveButton.textContent === "Approve"){
              approveButton.textContent = "Disapprove" 
              approveButton.style.fontSize = "10px"
              approveButton.style.padding = "2px"
              approveButton.style.borderRadius = "6px"
              approveButton.style.color = "black"
              approveButton.style.borderColor = "black"
              approveButton.style.fontWeight = "bold"

            cell10.textContent = parseInt(cell10.textContent) + 1
            } else {
              approveButton.textContent = "Approve"
              approveButton.style.borderRadius = "6px"
              approveButton.style.fontSize = "10px"
              approveButton.style.padding = "2px"
              approveButton.style.color = "black"
              approveButton.style.borderColor = "black"
              approveButton.style.fontWeight = "bold"

            cell10.textContent = parseInt(cell10.textContent) - 1
            }
          })
        })

        mainContent.append(directoryElement)
      })

      //////////////////////////////////////////////////////////////////////////////
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

      let newDirectory = {directories: 
        {
        views: 0,
        language_name: event.target.language_name.value,
        language_description: event.target.language_description.value,
        database_description: event.target.database_description.value,
        directory_name: event.target.directory_name.value,
        primarily_spoken_at: event.target.primarily_spoken_at.value,
        directory_type: event.target.directoryType.value,
        user_id: 1
        }
      }

    //console.log(newDirectory)

    fetch("http://127.0.0.1:3000/directories",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
      body: JSON.stringify(newDirectory)
    }).then(_=>{
      fetch("http://127.0.0.1:3000/directories")
      .then(r => r.json())
      .then(directories => {
        resetMainContent()
        renderDirectories(directories)
      }).then(alert("Successfully created a new directory created!"))
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
  