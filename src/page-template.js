const generateEmployee = employeeArray => {
    return `
    ${employeeArray
    .filter(({ role }) => {
        if (role === 'Manager')
        return true;
    })
    .map(({ name, id, email, officeNumber }) => {
        return `
        <div class="card col s4">
        <span class="card-title">Manager</span>
        <h3>${name}</h3>
        <h4>ID: ${id}</h4>
        <h4>Email: ${email}</h4>
        <h4>Office: ${officeNumber}</h4>
        </div>
        `
    })
    .join('')}
    
    ${employeeArray
        .filter(({ role }) => {
            if (role === 'Engineer')
            return true;
        })
        .map(({ name, id, email, gitHub }) => {
            return `
            <div class="card col s4">
            <span class="card-title">Manager</span>
            <h3>${name}</h3>
            <h4>ID: ${id}</h4>
            <h4>Email: ${email}</h4>
            <h4>Office: ${gitHub}</h4>
            </div>
            `
        })
        .join('')}
        
        ${employeeArray
            .filter(({ role }) => {
                if (role === 'Intern')
                return true;
            })
            .map(({ name, id, email, school }) => {
                return `
                <div class="card col s4">
                <span class="card-title">Manager</span>
                <h3>${name}</h3>
                <h4>ID: ${id}</h4>
                <h4>Email: ${email}</h4>
                <h4>Office: ${school}</h4>
                </div>
                `
            })
            .join('')}`
}


module.exports = templateData => {
    const employeeArray = templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Generator</title>
            <link rel="stylesheet" href="https://cdnjs.cloudfare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
            </head>
            <body>
            <nav>
            <div class="nav-wrapper" id="navbar">
            <a class="brand-logo center">Your Team</a>
            </nav>
                <div class="container">
                    ${generateEmployee(employeeArray)}
                    </div>
                    
                    <script src="https://cdnjs.cloudfare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                    </body>
                </html>`
};