const generateHTML = teamMembers => {
    const generateManager = manager => {
        return `
        <p>${manager.getName()} </p>

        `
    }

    const generateEngineer = engineer => {
        return `
        <p>${engineer.getName()} </p>

        `
    }

    const generateIntern = intern => {
        return `
        <p>${intern.getName()} </p>

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

        </head>
        <body>

        ${generateHTML(teamMembers)}

        </body>
        </html>
    `
}