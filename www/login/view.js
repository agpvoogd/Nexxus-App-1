class View 
{
    constructor() 
    {

    }

    showLoginForm(div)
    {
        $(div).html("<div class='container'>"
            + "<br><br>"
            + "<img src='include/img/nexxuslogo.jpg'>"
            + "<br><br>"
        + "</div>"
        + "<div class='container'>"
            + "<h2>Welcome to Nexxus</h2>"
            + "<hr>"
            + "<form action='loginprocess.html' method='POST' name='login'>"
                + "<div class='form-group'>"
                    + "<label for='username'>Username</label>"
                    + "<input type='text' id='username' class='form-control' placeholder='Username'>"
                + "</div>"
                + "<div class='form-group'>"
                    + "<label for='pwd'>Password</label>"
                    + "<input type='text' id='pwd' class='form-control' placeholder='********'>"
                + "</div>"
                + "<div class='form-group'>"
                    + "<button type='submit' class='btn btn-primary'>Login</button>"
                + "</div>"
            + "</form>"
        + "</div>");
    }

    showTest()
    {
        console.log("test");
    }

}
