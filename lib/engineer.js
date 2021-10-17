const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return `Github: ${this.github}`;
    }
    getGithub() {
        return `Engineer`
    }
}
module.exports = Engineer;