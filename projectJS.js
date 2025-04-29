function generateMealPlan() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;
    var breakfast = document.getElementById("breakfast").value;
    var snack1 = document.getElementById("snack1").value;
    var lunch = document.getElementById("lunch").value;
    var snack2 = document.getElementById("snack2").value;
    var dinner = document.getElementById("dinner").value;

    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    
    var mealPlanHTML = `
        <html>
            <head>
                <title>Your Weekly Meal Plan</title>
                <style>
                    body { font-family: 'Courier New', monospace; }
                    h1 { text-align: center; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { padding: 8px; border: 1px solid #ddd; }
                    th { text-align: left; }
                </style>
            </head>
            <body>
                <h1>Weekly Meal Plan for ${name}</h1>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Goal for the Week:</strong> ${goal}</p>

                <table>
                    // Add table at a later time
                </table>

                <button onclick="window.print()">Print Meal Plan</button>
            </body>
        </html>
    `;

    
    var newWindow = window.open("", "Meal Plan", "width=600,height=800");
    newWindow.document.write(mealPlanHTML);
}


function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
