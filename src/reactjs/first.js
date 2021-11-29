<html lang="en">
    <head>
        <title> Javascript and its Concepts </title>
        <meta charset="utf-8" />

        <meta name="keywords" content="" />
        <meta name="description" content="" />

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />

        <link href="stylesheets/styles.css" type="text/css" rel="stylesheet" />
        <style type="text/css"></style>

        <script type="text/javascript" src="javascripts/scripts.js"></script>
        <script type="text/javascript">
           class PersonDetails{
               constructor (id, username, email, mobile){
                   this.id = id;
                   this.username = username;
                   this.email = email;
                   this.mobile = mobile;
               }
           } 
           
        </script>
    </head>

    <body>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <script type="text/javascript">
                        let person1 = new PersonDetails(123, "nagendra", "nags.ap123@gmail.com", "+44 074 7125 1678")
                    </script>
                </div>
            </div>
        </div>
    </body>
</html>