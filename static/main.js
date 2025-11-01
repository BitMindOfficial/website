document.addEventListener('DOMContentLoaded', ()=>{
    const navButton = document.getElementById('icon');
    const navBar = document.getElementById('nav');
    // let isClickable = true;

    navButton.addEventListener('click', () => {
        // if (!isClickable) return;
        // isClickable = false; // Disable further clicks temporarily


        if (navBar.style.display == 'none'){
            navButton.setAttribute('src', '/static/pane-close.svg')
            navBar.style.display = 'block'
        } else{
            navButton.setAttribute('src', '/static/pane-open.svg')
            navBar.style.display = 'none'
        }


        // // Re-enable clicks after 0.5 seconds
        // setTimeout(() => {
        //     isClickable = true;
        // }, 500);
    });


    function handleResize() {
        if (window.innerWidth <= 1000) {
            navButton.setAttribute('src', '/static/pane-open.svg')
            navBar.style.display = 'none'
        }
    }
    
    // Run on page load
    handleResize();
    // Run on window resize
    window.addEventListener('resize', handleResize);


    // const main = document.querySelector('main');
    // const footer = document.querySelector('footer');

    // let footerCopy = footer
    // footer.remove()

    // <div id="frame" style="width:100%; height:100%;"><iframe data-aa='2393439' src='//acceptable.a-ads.com/2393439' style='border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe><a style="display: block; text-align: right; font-size: 12px;" id="preview-link" href="https://aads.com/campaigns/new/?source_id=2393439&source_type=ad_unit&partner=2393439">Advertise here</a></div>
    // main.innerHTML += `<iframe data-aa='2393439' src='//acceptable.a-ads.com/2393439' style='border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe>`
    // main.append(footerCopy)
    
    

    document.getElementsByClassName('footerContent')[0].innerHTML += `
        <div class="content">
            <h4>Social</h4>
            <p>
                <a href="https://instagram.com/bitmindai" target="_blank">
                    <i class="fab fa-instagram"></i> @bitmindai
                </a>
            </p>
            <p>
                <a href="https://twitter.com/bitmindofficial" target="_blank">
                    <i class="fab fa-x-twitter"></i> @bitmindofficial
                </a>
            </p>
            <p>
                <a href="https://youtube.com/@bitmindai" target="_blank">
                    <i class="fab fa-youtube"></i> @bitmindai
                </a>
            </p>
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    `;
})




document.addEventListener("DOMContentLoaded", function () {
    const signUpButton = document.getElementById("signinBtn");

    // Helper to get cookie value
    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    // Check if email has been saved previously
    if (getCookie("email_saved") === "true") {
        if (signUpButton) {
            signUpButton.style.display = "none";
        }
        return;
    }

    if (signUpButton) {
        signUpButton.addEventListener("click", function (event) {
            event.preventDefault();

            // Create popup container
            const popup = document.createElement("div");
            popup.style.position = "fixed";
            popup.style.top = "50%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.padding = "20px";
            popup.style.background = "#000";
            popup.style.color = "#fff";
            popup.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.2)";
            popup.style.zIndex = "1000";
            popup.style.borderRadius = "8px";
            popup.style.textAlign = "center";
            popup.style.border = "1px solid #fff";

            // Create input field
            const emailInput = document.createElement("input");
            emailInput.type = "email";
            emailInput.placeholder = "Enter your email";
            emailInput.style.margin = "10px 0";
            emailInput.style.padding = "8px";
            emailInput.style.width = "100%";
            emailInput.style.boxSizing = "border-box";
            emailInput.style.background = "#222";
            emailInput.style.color = "#fff";
            emailInput.style.border = "1px solid #fff";

            // Create submit button
            const submitButton = document.createElement("button");
            submitButton.textContent = "Submit";
            submitButton.style.marginRight = "10px";
            submitButton.style.background = "#fff";
            submitButton.style.color = "#000";
            submitButton.style.border = "none";
            submitButton.style.padding = "8px 16px";
            submitButton.style.cursor = "pointer";

            submitButton.onclick = function () {
                const email = emailInput.value.trim();

                if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }

                fetch("https://deepspaceai.pythonanywhere.com/store_email/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email })
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            // Save cookie to indicate email was submitted
                            document.cookie = "email_saved=true; max-age=31536000; path=/";
                            alert("Email saved successfully!");
                            if (signUpButton) {
                                signUpButton.style.display = "none";
                            }
                        } else {
                            alert(data.error || "Something went wrong.");
                        }
                        document.body.removeChild(popup);
                    })
                    .catch(error => {
                        console.error(error);
                        alert("An error occurred while submitting your email.");
                    });
            };

            // Create close button
            const closeButton = document.createElement("button");
            closeButton.textContent = "Close";
            closeButton.style.background = "#fff";
            closeButton.style.color = "#000";
            closeButton.style.border = "none";
            closeButton.style.padding = "8px 16px";
            closeButton.style.cursor = "pointer";
            closeButton.onclick = function () {
                document.body.removeChild(popup);
            };

            // Append elements to popup
            popup.appendChild(emailInput);
            popup.appendChild(document.createElement("br"));
            popup.appendChild(submitButton);
            popup.appendChild(closeButton);

            // Append popup to body
            document.body.appendChild(popup);
        });
    }
});


