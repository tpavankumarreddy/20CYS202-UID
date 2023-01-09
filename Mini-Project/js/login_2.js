function auth() {

    const username = login.id.value;
    const password = login.pass.value;

    if (username === "admin" && password ==="root") {
      alert("You have successfully logged in.");           
      window.open("html/admin.html");
    }

    else if (username === "student" && password ==="password") {
      alert("You have successfully logged in."); 
      window.open("html/studash.html");
      return false;
    }

    else if (username === "faculty" && password ==="123abc") {
      alert("You have successfully logged in."); 
      window.open("html/facdash.html");
      return false;
    }

    else if (username === "hod" && password ==="123456789") {
      alert("You have successfully logged in."); 
      window.open("html/hod.html");
      return false;
    }

    else {
      alert("Enter correct credentials");
      return true;
    }
  
  }
