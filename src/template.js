const Engineer = require("../lib/Engineer")
const Manager = require("../lib/Manager")
const Intern = require("../lib/Intern")
const Employee = require("../lib/Employee")

const generateHTML = teamMembers => {
    const generateManager = manager => {
        return `

            <div class ="card m-4 column">
                <header class ="card-header has-background-info ">
                    <p class = "card-header-title has-text-white">
                        ${manager.getName()} (Manager)

                    </p>
                </header>

                <div class="card-content">
                    <div class="content">
                        <p>ID: ${manager.getId()}</p>
                        <p>
                            E-Mail: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()} </a>
                        </p>
                    
                        <p>Office Number: ${manager.getOfficeNumber()} </p>
                    </div>
                </div>
            
            </div>
        
      

        `
    }

    const generateEngineer = engineer => {
        return `
            <div class ="card m-4 column">
                <header class ="card-header has-background-info ">
                    <p class = "card-header-title has-text-white">
                        ${engineer.getName()} (Engineer)
                    </p>
                </header>

                <div class="card-content">
                    <div class="content">
                        <p>ID: ${engineer.getId()} </p>
                        <p>
                            E-Mail: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a>
                        </p>
                        
                        <p>
                            Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
                        </p>
                        

                    </div>
                </div>
            
            </div>

        `
    }

    const generateIntern = intern => {
        return `
            <div class ="card m-4 column">
                <header class ="card-header has-background-info ">
                    <p class = "card-header-title has-text-white">
                        ${intern.getName()} (Intern)

                    </p>
                </header>

                <div class="card-content">
                    <div class="content">
                        <p>ID: ${intern.getId()} </p>
                        <p>
                            E-Mail: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a>
                        </p>
                        
                        <p>School: ${intern.getSchool()} </p>
                    </div>
                </div>
            
            </div>

        `
    }

    const html = []

    for (i=0; i<teamMembers.length; i++) {
        if (teamMembers[i].getRole() === "Manager") {
            var elements = generateManager(teamMembers[i])
            html.push(elements)
        } else if (teamMembers[i].getRole() === "Engineer") {
            var elements = generateEngineer(teamMembers[i])
            html.push(elements)
        } else if (teamMembers[i].getRole() === "Intern") {
            var elements = generateIntern(teamMembers[i])
            html.push(elements)
        }
    }

    return html.join('')
}

module.exports = teamMembers => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <link rel="stylesheet" href="./assets/css/style.css" />
            <title> The Team</title>

        </head>
        <body>
            <header class = "has-background-primary pb-4" >
                <div>
                    <h1 class = "title has-text-centered p-3 mb-3"> My Team </title>
                </div>


            </header>

            <section class = columns>
                ${generateHTML(teamMembers)}
            </section>
            

        </body>
        </html>
    `
}