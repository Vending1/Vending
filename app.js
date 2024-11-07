
document.getElementById('orderMicroMarketBtn').addEventListener('click', function() {
    document.getElementById('orderMicroMarketForm').style.display = 'block';
});

document.getElementById('microMarketOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
    // You can add further form submission logic here
});


 
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the sections and the "How We Stand Out" section
    const sections = document.querySelectorAll('#order-now, #micro-markets-content, #contact-us, #about-us, #customer-service');
    const howWeStandOutSection = document.querySelector('#how-we-stand-out');
    
    // Function to hide the "How We Stand Out" section
    function hideHowWeStandOut() {
        howWeStandOutSection.style.display = 'none';
    }
    
    // Add event listeners to the sections
    sections.forEach(section => {
        section.addEventListener('click', hideHowWeStandOut);
    });
});

script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script type="text/javascript">
  (function() {
    emailjs.init('lSg6dREqOQvfET9nF'); // Replace with your EmailJS user ID
  })();

  // Function to handle tab switching
function openTab(tabName) {
    var tabContent = document.getElementsByClassName("tab-content");
    var i;

    // Toggle the display of the selected tab content
    var tab = document.getElementById(tabName);
    if (tab.style.display === "block") {
        tab.style.display = "none"; // Close if already open
    } else {
        // First, close all other tab contents
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        // Then, open the selected tab content
        tab.style.display = "block";
    }

    // Toggle the "active" class for the clicked tab button
    var tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}



  // Function to send email based on form type
  function sendEmail(formId, templateId, formElement, emailType) {
    event.preventDefault();
    emailjs.sendForm('service_tgu3g4d', templateId, formElement)
      .then(function(response) {
        alert(`${emailType} sent successfully!`);
        document.getElementById(formId).reset();
      }, function(error) {
        alert(`Failed to send ${emailType}. Please try again.`);
      });
  }

  // Function to send report machine email
  function sendReportMachine(event) {
    sendEmail('reportMachineForm', 'template_ndlf7uc', '#reportMachineForm', 'Report a Machine');
  }

  // Function to send improve feedback email
  function sendImproveFeedback(event) {
    sendEmail('improveForm', 'template_ndlf7uc', '#improveForm', 'Improvement Feedback');
  }

  // Function to send report snack email
  function sendReportSnack(event) {
    sendEmail('reportSnackForm', 'template_ndlf7uc', '#reportSnackForm', 'Report Snack Quality');
  }

  // Attach event listeners to forms
  document.getElementById('reportMachineForm').addEventListener('submit', sendReportMachine);
  document.getElementById('improveForm').addEventListener('submit', sendImproveFeedback);
  document.getElementById('reportSnackForm').addEventListener('submit', sendReportSnack);
</script>


    <script>
       
    (function(){
        emailjs.init("lSg6dREqOQvfET9nF");
    })();

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const tabId = this.getAttribute('data-tab');
            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                if (section.id === tabId) {
                    section.style.display = 'block';
             } else {
                    section.style.display = 'none';
                }
            });
        });
    });

   // Handle form submission

document.getElementById('confirmBtn').addEventListener('click', function() {
    const snackQuantity = document.getElementById('snackQuantity').value.trim();
    const drinkQuantity = document.getElementById('drinkQuantity').value.trim();

    let selectedSnacks = [];
    document.querySelectorAll('.snackItem').forEach(snack => {
        if (snack.checked) {
            selectedSnacks.push(snack.id);
        }
    });

    let selectedDrinks = [];
    document.querySelectorAll('.drinkItem').forEach(drink => {
        if (drink.checked) {
            selectedDrinks.push(drink.id);
        }
    });

    const otherSnack = document.getElementById('otherSnack').value.trim();
    if (otherSnack) {
        selectedSnacks.push(otherSnack);
    }

    const otherDrink = document.getElementById('otherDrink').value.trim();
    if (otherDrink) {
        selectedDrinks.push(otherDrink);
    }

    const customerName = document.getElementById('customerName').value.trim();
    const address = document.getElementById('address').value.trim();
    const areaCode = document.getElementById('areaCode').value.trim();
    const phonePrefix = document.getElementById('phonePrefix').value.trim();
    const phoneSuffix = document.getElementById('phoneSuffix').value.trim();

    const phoneNumber = `${areaCode}-${phonePrefix}-${phoneSuffix}`;

    const templateParams = {
        customerName: customerName,
        snackQuantity: snackQuantity,
        drinkQuantity: drinkQuantity,
        selectedSnacks: selectedSnacks.join(', '),
        selectedDrinks: selectedDrinks.join(', '),
        address: address,
        phoneNumber: phoneNumber,
        to_email: 'vendingimperiumllc@gmail.com'
    };

    emailjs.send('service_tgu3g4d', 'template_m306l3h', templateParams)
    .then(function(response) {
        alert('Order submitted successfully!');
        modal.style.display = "none";
    }, function(error) {
        alert('Failed to submit order. Please try again.');
        console.error('Error:', error);
    });
});


</script>


    <!-- JavaScript to toggle sections and add flashing animation -->
    <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script>
        (function(){
            emailjs.init("lSg6dREqOQvfET9nF");
        })();

        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function(event) {
                event.preventDefault();
                const tabId = this.getAttribute('data-tab');
                // Hide all sections
                document.querySelectorAll('section').forEach(section => {
                    if (section.id === tabId) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            });
        });

        document.getElementById('title').addEventListener('click', function() {
            // Toggle the flashing class
            this.parentNode.classList.toggle('flashing');
        });

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var tab = document.querySelector('.tab[data-tab="Machine-type"]');

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the tab, open the modal 
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            modal.style.display = "block";
        });

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Handle phone number input switching
        document.getElementById('areaCode').addEventListener('input', function() {
            if (this.value.length === 3) {
                document.getElementById('phonePrefix').focus();
            }
        });
        document.getElementById('phonePrefix').addEventListener('input', function() {
            if (this.value.length === 3) {
                document.getElementById('phoneSuffix').focus();
            }
        });


    // Function to open a specific tab
    function openTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    }

    // Initialize EmailJS
    (function(){
        emailjs.init("lSg6dREqOQvfET9nF");
    })();

    // Handle form submissions
    document.getElementById('reportMachineForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const templateParams = {
            machineLocation: document.getElementById('machineLocation').value,
            issueDescription: document.getElementById('issueDescription').value,
            reporterName: document.getElementById('reporterName').value,
            reporterEmail: document.getElementById('reporterEmail').value,
            to_email: 'vendingimperiumllc@gmail.com'
        };

        emailjs.send('service_tgu3g4d', 'template_m306l3h', templateParams)
        .then(function(response) {
            alert('Report submitted successfully!');
            document.getElementById('reportMachineForm').reset();
        }, function(error) {
            alert('Failed to submit report. Please try again.');
            console.error('Error:', error);
        });
    });

    document.getElementById('improveForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const templateParams = {
            suggestion: document.getElementById('suggestion').value,
            suggesterName: document.getElementById('suggesterName').value,
            suggesterEmail: document.getElementById('suggesterEmail').value,
            to_email: 'vendingimperiumllc@gmail.com'
        };

        emailjs.send('service_tgu3g4d', 'template_m306l3h', templateParams)
        .then(function(response) {
            alert('Suggestion submitted successfully!');
            document.getElementById('improveForm').reset();
        }, function(error) {
            alert('Failed to submit suggestion. Please try again.');
            console.error('Error:', error);
        });
    });

    document.getElementById('reportSnackForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const templateParams = {
            snackName: document.getElementById('snackName').value,
            snackIssue: document.getElementById('snackIssue').value,
            reporterNameSnack: document.getElementById('reporterNameSnack').value,
            reporterEmailSnack: document.getElementById('reporterEmailSnack').value,
            to_email: 'vendingimperiumllc@gmail.com'
        };

        emailjs.send('service_tgu3g4d', 'template_m306l3h', templateParams)
        .then(function(response) {
            alert('Report submitted successfully!');
            document.getElementById('reportSnackForm').reset();
        }, function(error) {
            alert('Failed to submit report. Please try again.');
            console.error('Error:', error);
        });
    });

    // Hide all tab contents initially
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
    // Hide all tab contents initially
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Add click event listeners to tab buttons
    var tabButtons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener("click", function() {
            // Remove active class from all buttons
            for (var j = 0; j < tabButtons.length; j++) {
                tabButtons[j].classList.remove("active");
            }

            // Hide all tab contents
            for (var k = 0; k < tabContents.length; k++) {
                tabContents[k].style.display = "none";
            }

            // Show the selected tab content
            var tabName = this.getAttribute("onclick").split("'")[1];
            document.getElementById(tabName).style.display = "block";
            this.classList.add("active");
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the micro markets button and content
    const microMarketsButton = document.getElementById('micro-markets-button');
    const microMarketsContent = document.getElementById('micro-markets-content');

    // Add click event listener to the micro markets button
    microMarketsButton.addEventListener('click', function() {
        // Show the micro markets content immediately when the button is clicked
        microMarketsContent.style.display = 'block';
    });
});

    document.getElementById('orderMicroMarketBtn').addEventListener('click', function() {
        document.getElementById('orderMicroMarketForm').style.display = 'block';
    });

    document.getElementById('microMarketOrderForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Collect form data
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;

        // Send form data using EmailJS
        emailjs.send("service_tgu3g4d", "template_m306l3h", {
            name: name,
            address: address,
            phone: phone
        })
        .then(function(response) {
            alert('Form submitted successfully!');
            document.getElementById('microMarketOrderForm').reset();
        }, function(error) {
            alert('Failed to send form. Please contact us or try again later.');
        });
    });

    