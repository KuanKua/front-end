const aboutNav = document.querySelector("#about")
const mainContent = document.querySelector("#main-content")

let logStatus = false

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
    phone.textContent = user.phone

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
    instagram.textContent = user.instagram

    const facebook = profilePage.querySelector("#profile-facebook")
    facebook.textContent = user.facebook

    const twitter = profilePage.querySelector("#profile-twitter")
    twitter.textContent = user.twitter
    console.log(twitter)

    mainContent.append(profilePage)
}

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
    .then(data => {
        resetMainContent()
        localStorage.token = data.token
    }).then(_=> {
        renderLoggedInNavBar()
        console.log(document)
        navbarLogin.textContent = "Log Out"
        logStatus = true
        navbarSignup.remove()

        let profileNav = document.querySelector("#profile")
        console.log(profileNav)

        profileNav.addEventListener('click', ()=> {

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

        const navContributors = document.querySelector("#contributors")
        navContributors.addEventListener('click', ()=>{
          resetMainContent()
          mainContent.append(contributorsPage)
        })
    })
})

function logOut(){
  const container = document.getElementsByClassName("container-fluid")[0]
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
  localStorage.clear()
  logStatus = false
  resetMainContent()
  mainContent.append(loginForm)

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

const signupBtn = loginForm.querySelector("#sign-up")

signupBtn.addEventListener('click', () => {
    resetMainContent()
    mainContent.append(signupForm)
})


const navbarLogin = document.querySelector("#nav-login")
const navbarSignup = document.querySelector("#nav-signup")

navbarLogin.addEventListener('click', () => {
      
    if (logStatus === true){
      logOut()
      logStatus = false
    } else {
      resetMainContent()
      mainContent.append(loginForm) 
    }
   
})

navbarSignup.addEventListener('click', ()=>{
  resetMainContent()
  mainContent.append(signupForm)
})

const navbar = document.querySelector("body > nav > div > ul:nth-child(2)")

function renderLoggedInNavBar(){
    resetNavBar()

    const dashboard = document.createElement("li")
    dashboard.innerHTML = `<a href="#" id="dashboard">Dashboard</a>`
    
    const profile = document.createElement("li")
    profile.innerHTML = `<a id="profile" href="#">Profile</a>`
    
    const settings =  document.createElement("li")
    settings.innerHTML = `<a id="settings" href="#">Settings</a>`
    
    const directories = document.createElement("li")
    directories.innerHTML = `<a id="directories" href="#">Directories</a>`
    
    const feed = document.createElement("li")
    feed.innerHTML = `<a id="feed" href="#">Feed</a>`

    const contributors = document.createElement("li")
    contributors.innerHTML = `<a id="contributors" href="#">Contributors</a>`
    
    const features = document.createElement("li")
    features.innerHTML = `<a id="features" href="#">Features</a>`
    
    const about = document.createElement("li")
    about.innerHTML = `<a id="about" href= "#" id="about">About</a>`

    navbar.append(dashboard, profile, contributors, feed, directories, features, about, settings)
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
  <textarea name="bio" type="text" class="form-control" id="bio" name="bio" placeholder="Enter bio" style="width: 600px"> </textarea>
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
  <textarea type="text" class="form-control" id="linguistic_experience" name="linguistic_experience" placeholder="Describe your linguistic experience" style="width: 700px"> </textarea>
</div>
<br><br>

</div>
<br>

<div class="form-group-2">
<div class="col-sm-offset-2 col-sm-10">
  <input type="submit" value="Sign Up" class="btn btn-default" style="color: #ffffff; background-color: #000000;"></input>
  <input type="button" id="signup-expert" value="Sign up as an expert" class="btn btn-default" style="color: #ffffff; background-color: #000000;"></input>
</div>
</div>`

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
        console.log(user)
        localStorage.token = user.token
        resetMainContent()
        renderLoggedInNavBar()
        renderUserProfile(user.user)
    })

    signupForm.reset()

})

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
                    <h6 class="mb-0" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Website</h6>
                    <span class="text-secondary" id="profile-website">https://bootdey.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Github</h6>
                    <span class="text-secondary" id="profile-github">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> Twitter</h6>
                    <span class="text-secondary" id="profile-twitter">@bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram</h6>
                    <span class="text-secondary" id="profile-instagram">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook</h6>
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
                    </div>
                  </div>
                </div>
              </div>
              <br>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
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
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
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

const contributorsPage = document.createElement("div")
contributorsPage.innerHTML = `
<div class="container" style="width: 1000px">
    <div class="row">
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar6.png)" class="avatar avatar-xl mr-3"></span> 
            <span><button type='button'class="btn btn-default" style="background-color: #000000; color: #ffffff; right:0em;"> Follow </button> </span>

              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Nielsen Cobb</h5>
                <p class="card-text text-uppercase text-muted">Memora</p>
                <p class="card-text">
                   
                  nielsencobb@memora.com<br><abbr title="Phone">P:  </abbr>+1 (851) 552-2735
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar7.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Margret Cote</h5>
                <p class="card-text text-uppercase text-muted">Zilidium</p>
                <p class="card-text">
                   
                  margretcote@zilidium.com<br><abbr title="Phone">P:  </abbr>+1 (893) 532-2218
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar8.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Rachel Vinson</h5>
                <p class="card-text text-uppercase text-muted">Chorizon</p>
                <p class="card-text">
                   
                  rachelvinson@chorizon.com<br><abbr title="Phone">P:  </abbr>+1 (891) 494-2060
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar1.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Gabrielle Aguirre</h5>
                <p class="card-text text-uppercase text-muted">Comverges</p>
                <p class="card-text">
                   
                  gabrielleaguirre@comverges.com<br><abbr title="Phone">P:  </abbr>+1 (805) 459-3869
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar2.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Spears Collier</h5>
                <p class="card-text text-uppercase text-muted">Remold</p>
                <p class="card-text">
                   
                  spearscollier@remold.com<br><abbr title="Phone">P:  </abbr>+1 (910) 555-2436
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar3.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Keisha Thomas</h5>
                <p class="card-text text-uppercase text-muted">Euron</p>
                <p class="card-text">
                   
                  keishathomas@euron.com<br><abbr title="Phone">P:  </abbr>+1 (958) 405-3392
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar4.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Elisabeth Key</h5>
                <p class="card-text text-uppercase text-muted">Netagy</p>
                <p class="card-text">
                   
                  elisabethkey@netagy.com<br><abbr title="Phone">P:  </abbr>+1 (900) 421-2096
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar6.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Patel Mack</h5>
                <p class="card-text text-uppercase text-muted">Zedalis</p>
                <p class="card-text">
                   
                  patelmack@zedalis.com<br><abbr title="Phone">P:  </abbr>+1 (800) 460-2720
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar5.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Erika Whitaker</h5>
                <p class="card-text text-uppercase text-muted">Uniworld</p>
                <p class="card-text">
                   
                  erikawhitaker@uniworld.com<br><abbr title="Phone">P:  </abbr>+1 (911) 484-3333
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar2.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Meyers Swanson</h5>
                <p class="card-text text-uppercase text-muted">Candecor</p>
                <p class="card-text">
                   
                  meyersswanson@candecor.com<br><abbr title="Phone">P:  </abbr>+1 (999) 404-3297
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar7.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Townsend Sloan</h5>
                <p class="card-text text-uppercase text-muted">Rameon</p>
                <p class="card-text">
                   
                  townsendsloan@rameon.com<br><abbr title="Phone">P:  </abbr>+1 (978) 563-2964
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">                       
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center"><span style="background-image: url(https://bootdey.com/img/Content/avatar/avatar1.png)" class="avatar avatar-xl mr-3"></span>
              <div class="media-body overflow-hidden">
                <h5 class="card-text mb-0">Millicent Henry</h5>
                <p class="card-text text-uppercase text-muted">Balooba</p>
                <p class="card-text">
                   
                  millicenthenry@balooba.com<br><abbr title="Phone">P:  </abbr>+1 (863) 585-3988
                </p>
              </div>
            </div><a href="#" class="tile-link"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
`

const feedPage = document.createElement('div')
feedPage.classList.add("container")
feedPage.innerHTML = `
<div class="row bootstrap snippets bootdey">
    <div class="col-md-7 col-xs-12 col-md-offset-3">
      <div class="panel" id="daily-feed">
        <div class="panel-heading">
          <h3 class="panel-title"> <strong> Feed </strong>
            <span class="pull-right label label-round label-warning" style="color:#ffffff; background-color: #000000;">10 New Activities</span>
          </h3>
        </div>
        <div class="panel-body">
          <ul class="list-group list-group-dividered list-group-full">
            <li class="list-group-item">
              <div class="media">
                <div class="media-left">
                  <a class="avatar avatar-online" href="javascript:void(0)">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""><i></i></a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">
                    <small class="pull-right">5m ago</small>
                    <a class="name">Edward Fletcher</a> posted a new blog.
                  </h4>
                  <small>Today 5:50 pm - 12.04.2015</small>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-left">
                  <a class="avatar avatar-online" href="javascript:void(0)">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""><i></i></a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">
                    <small class="pull-right">5m ago</small>
                    <a class="name">Edward Fletcher</a> posted a new blog.
                  </h4>
                  <small>Today 5:50 pm - 12.04.2015</small>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="media">
                <div class="media-left">
                  <a class="avatar avatar-online" href="javascript:void(0)">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""><i></i></a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">
                    <small class="pull-right">5m ago</small>
                    <a class="name">Edward Fletcher</a> posted a new blog.
                  </h4>
                  <small>Today 5:50 pm - 12.04.2015</small>
                </div>
              </div>
            </li>
            <li class="list-group-item">
            <div class="media">
              <div class="media-left">
                <a class="avatar avatar-online" href="javascript:void(0)">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""><i></i></a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">
                  <small class="pull-right">5m ago</small>
                  <a class="name">Edward Fletcher</a> posted a new blog.
                </h4>
                <small>Today 5:50 pm - 12.04.2015</small>
              </div>
            </div>
          </li>
          </ul>
          <button type="button" class="btn btn-block btn-primary waves-effect waves-light" style="color:white; border-color: white; background-color: black;"><i class="icon md-chevron-down margin-right-5" aria-hidden="true"></i>Show
            More</button>
        </div>
      </div>
    </div>
</div>
`

const navFeed = document.querySelector("#feed")
navFeed.addEventListener('click', ()=> {
  resetMainContent()
  mainContent.append(feedPage)
})



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
                            <samll>Total Entries: ${total_entries}</samll>
                        </div>
                        <h3><strong>Directories</strong></h3>
                        <hr color="white">
                        <br>
                    </div>
                      
                    <div class="forum-item">
                        <div class="row">
                            <div class="col-md-9">
                                <a href="forum_post.html" class="forum-item-title">${directory.directory_name}</a>
                                <div class="forum-sub-title"><strong>Language: </strong>${directory.language_name}</div>
                                <div class="forum-sub-title"><strong>Directory Description: </strong>${directory.database_description}</div>
                                <div class="forum-sub-title"><strong>Database Description: </strong>${directory.language_description}</div>
                                <div class="forum-sub-title">Primarily spoken in ${directory.primarily_spoken_at}.</div>
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

    if (index != 0){
      directoriesPage.querySelector("div.forum-title").remove()
    }
    index++
    mainContent.append(directoriesPage)
  })

  })

  
}