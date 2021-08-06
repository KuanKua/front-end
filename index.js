const aboutNav = document.querySelector("#about")
const mainContent = document.querySelector("#main-content")

let logStatus = false

aboutNav.addEventListener('click', ()=>{
    mainContent.textContent = "This is KuanKua, a platform dedicated to creating digital directories of undigitized and undocumented languages, particularly from the horn of africa."
})

function renderUserProfile(user){
    const fullName = profilePage.querySelector("#profile-full-name")
    fullName.textContent = user.first_name + " " + user.last_name
    console.log(user.first_name)
    console.log(user.last_name)

    const education_status = profilePage.querySelector("#education-status")
    education_status.textContent = user.education_status

    const nationality = profilePage.querySelector("#profile-nationality")
    nationality.textContent = user.nationality

    const fullName2 = profilePage.querySelector("#profile-full-name-2")
    fullName2.textContent = user.first_name + " " + user.last_name

    const email = profilePage.querySelector("#profile-email")
    //email.textContent = user.email

    const phone = profilePage.querySelector("#profile-phone")
    //phone.textContent = user.phone

    const bio = profilePage.querySelector("#profile-bio")
    bio.textContent = user.bio

    const address = profilePage.querySelector("#profile-address")
    address.textContent = user.country_of_residence

    mainContent.append(profilePage)
}

const loginForm = document.createElement("form")
loginForm.innerHTML = `  <div class="form-group">
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
        navbarLogin.textContent = "Log Out"
        logStatus = true
        navbarSignup.remove()

        const profileNav = document.querySelector("#profile")

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
          //addStyleSheet("contributors-style.css")
        })
    })
})

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
  resetMainContent()
      mainContent.append(loginForm)
/*     if (logStatus === true){
      resetMainContent()
      mainContent.append(loginForm)

    } else {
      resetMainContent()
      
    } */
   
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

//renderLoggedOutNavBar()



const signupForm = document.createElement("form")
signupForm.innerHTML = `  <div class="form-group-2">
<label class="control-label col-sm-2" for="first_name">First Name:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="first_name" name="first_name" placeholder="Enter first name">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="last_name">Last Name:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Enter last name">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="username">Username:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="username" name="username" placeholder="Enter username">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="pwd">Password:</label>
<div class="col-sm-10">
  <input type="password" class="form-control" id="password" name="password" placeholder="Enter password">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="bio">Bio:</label>
<div class="col-sm-10">
  <textarea name="bio" type="text" class="form-control" id="bio" name="bio" placeholder="Enter bio"> </textarea>
</div>
</div>
<br><br><br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="date_of_birth">Date of Birth:</label>
<div class="col-sm-10">
  <input type="date" class="form-control" id="date_of_birth" name="date_of_birth" placeholder="${Date.now()}">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="nationality">Nationality:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="nationality" name="nationality" placeholder="Enter nationality">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="education_status">Education Status:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="education_status" name="education_status" placeholder="Enter education status">
</div>
</div>
<br><br>
<div class="form-group-2">
<label class="control-label col-sm-2" for="country_of_residence">Country of Residence:</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="country_of_residence" name="country_of_residence" placeholder="Enter your country of residence">
</div>
</div>
<br><br>

<div class="form-group-2" id="linguistic_experience"  style="display: none;" >
<label class="control-label col-sm-2" for="country_of_residence">Linguistic Experience:</label>
<div class="col-sm-10">
  <textarea type="text" class="form-control" id="linguistic_experience" name="linguistic_experience" placeholder="Describe your linguistic experience"> </textarea>
</div>
</div>
<br><br>

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

  console.log("HAPPENING!")

  let newUser = {
    first_name: event.target.first_name.value,
    last_name: event.target.last_name.value,
    username: event.target.username.value,
    password: event.target.password.value,
    bio: event.target.bio.value,
    date_of_birth: event.target.date_of_birth.value,
    nationality: event.target.nationality.value,
    education_status: event.target.education_status.value,
    country_of_residence: event.target.country_of_residence.value
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
                      <p id="education-status" class="text-secondary mb-1">Full Stack Developer</p>
                      <p id="profile-nationality" class="text-muted font-size-sm" style="color: #ffffff;">Bay Area, San Francisco, CA</p>
                      <button class="btn btn-primary" style="background-color: #000000; border-color: #ffffff;">Follow</button>
                    </div>
                    <br><br>
                  </div>
                </div>
              </div>
              
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span class="text-secondary">https://bootdey.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary">@bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span class="text-secondary">bootdey</span>
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