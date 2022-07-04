// var srcData;
        // function encodeImageFileAsURL() {

        //     var filesSelected = document.getElementById("profile_pic").files;
        //     if (filesSelected.length > 0) {
        //         var fileToLoad = filesSelected[0];

        //         var fileReader = new FileReader();

        //         fileReader.onload = function (fileLoadedEvent) {
        //             srcData = fileLoadedEvent.target.result; // <--- data: base64
        //         }
        //         fileReader.readAsDataURL(fileToLoad);
        //     }
        // }

        const picture = document.querySelector("#profile_pic");
        var img = "";
        picture.addEventListener("change", function () {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                img = reader.result;
            })
            reader.readAsDataURL(this.files[0]);
        })

        $(document).ready(function () {


            $('input[name="role"]').click(function () {
                var test = $(this).val();
                if (test === "Artist") {
                    $(".profession").css("display", "none");
                    $(".art").css("display", "block");
                }
                if (test === "User") {
                    $(".art").css("display", "none");
                    $(".profession").css("display", "block");
                }

            })

            $("#submit").click(function () {

                $.post("http://localhost:3000/Artist", {
                    Role: $('input[name="role"]:checked').val(),
                    Name: $("#name").val(),
                    Art_Form: $("#art").val(),
                    Gender: $('input[name="gender"]:checked').val(),
                    Email: $("#email").val(),
                    Contact_No: $("#tel").val(),
                    Address: $("#address").val(),
                    Password: $("#password").val(),
                    C_Password: $("#Cpassword").val(),
                    Profile_Pic: img,

                })

            });

            // $("#b2").click(function() {
            //     location.href =  "index.html";
            // });
            // , "http://localhost:3000/User", {
            //         Profile_Pic: img,
            //     }
        }
        )
