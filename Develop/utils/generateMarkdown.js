// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Project Description
  ${data.description}

  ## Table of Contents
- [Installation instructions](#Installation-instructions)
- [Usage instructions](#Usage-instructions)
- [Contribution instrcutions](#Contirbution-instructions)
- [Test instructions](#Test-instructions)
- [Licenses](#Licenses)
- [Questions/Contact](#Questions/Contact)

  ## Installation instructions
  ${data.install}

  ## Usage instructions
  ${data.usage}

  ## Contribution instructions
  ${data.contribution}

  ## Test instructions
  ${data.test}

  ## Licenses
  ${data.license}

  ## Questions/Contact
  If you have any questions you can email me or visit my GitHub via the links below:
  Email: ${data.email}
  GitHub: ${data.github}





`;
}

module.exports = generateMarkdown