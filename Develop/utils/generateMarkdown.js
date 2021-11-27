// function which finds the badge image of the license selected
function renderLicenseBadge(license) {
  let badgeString = "";
  if (license === "MIT") {
    badgeString = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
    return badgeString;
  } 
  if (license === "Apache") {
    badgeString = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
    return badgeString;
  }
  if (license === "GPL") {
    badgeString = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]"
    return badgeString;
  } else {
  return badgeString;
  }
}

// function which finds the link of the license selected
function renderLicenseLink(license) {
  let linkString = "";
  if (license === "MIT") {
    linkString = "https://opensource.org/licenses/MIT"
    return linkString;
  } 
  if (license === "Apache") {
    linkString = "https://opensource.org/licenses/Apache-2.0"
    return linkString;
  }
  if (license === "GPL") {
    linkString = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
    return linkString;
  } else {
  return linkString;
  }
}

// function which creates text for the license selected
function renderLicenseSection(license) {
  let sectionString = "";
  if (license === "MIT") {
    sectionString = "This project uses the MIT license."
    return sectionString;
  } 
  if (license === "Apache") {
    sectionString = "This project uses the Apache license."
    return sectionString;
  }
  if (license === "GPL") {
    sectionString = "This project uses the GPL license."
    return sectionString;
  } else {
  return sectionString;
  }
}

// function which generates the .md content using a template literal
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license[0]);
  const link = renderLicenseLink(data.license[0]);
  const section = renderLicenseSection(data.license[0]);
  
  return `
  # ${data.title}  

${badge}  
${link}  

  ## Project Description
  ${data.description}

  ## Table of Contents
  *[Installation instructions](#Installation-instructions)  
  *[Usage instructions](#Usage-instructions)  
  *[Contribution instructions](#Contribution-instructions)  
  *[Test instructions](#Test-instructions)  
  *[Licenses](#Licenses)  
  *[Questions](#Questions)

  ## Installation instructions
  ${data.install}

  ## Usage instructions
  ${data.usage}

  ## Contribution instructions
  ${data.contribution}

  ## Test instructions
  ${data.test}

  ## Licenses
  ${section}  

  ## Questions
  If you have any questions you can email me or visit my GitHub via the links below:  
  Email: ${data.email}  
  GitHub: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown