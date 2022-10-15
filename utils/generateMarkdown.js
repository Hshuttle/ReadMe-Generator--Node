// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-lightgreen)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPLv2") {
    return "[![GPLv2](https://img.shields.io/badge/License-GPLv2-red)](https://opensource.org/licenses/GPL-2.0)";
  } else if (license === "GPLv3") {
    return "[![GPLv3](https://img.shields.io/badge/License-GPLv3-orange)](https://opensource.org/licenses/GPL-3.0)";
  } else if (license === "BSD 3-clause") {
    return "[![BSD 3-clause](https://img.shields.io/badge/License-BSD%203--clause-yellowgreen)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Unlicensed" || license === "Other") {
    return "";
  } else {
    return "<li><a href='#license'>License</a></li>";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${answers.description}
  
  ## Table of Contents
  
  <ul>
  <li><a href="#install">Installation Instructions</a></li>
  <li><a href="#usage">Usage Information</a></li>
  <li><a href="#contribution">Contribution Guidelines</a></li>
  <li><a href="#test-instr">Test Instructions</a></li>
  ${renderLicenseSection(answers.license)}
  <li><a href="#contactme">Contact Me</a></li>
  </ul>
  <h2 id="#install">Installation Instructions</h2>
  ${answers.installation}
  <h2 id="usage">Usage Information</h2>
  ${answers.usage}
  <h2 id="contribution">Contribution Guidelines</h2>
  ${answers.contribution}
  <h2 id="test-instr">Test Instructions</h2>
  ${answers.testinstruction}
  <h2 id="license">License</h2>
  ${renderLicenseBadge(answers.license)}</br>
  ${answers.license}
  <h2 id="contactme">Contact Me</h2>
  For any additional questions please reach out to me by email at: ${
    answers.email
  }</br>
  Feel free to check out my other repositories on github! My username is ${
    answers.username
  }</br>
  // Click <a href="https://github.com/${
    answers.username
  }">HERE</a> to be routed to my github account
`;
}

module.exports = generateMarkdown;
