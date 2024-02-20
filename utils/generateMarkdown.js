// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.Description}
  ## Table of Contents
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage 
  To use this app you will have to, ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  This Project is protected under this project - ${data.license}
  ## Tests
  ${data.tests}
  ## Questions
  * Email - ${data.email}
  * Github Profile - [${data.github}](https://github.com/${data.github})
  `;
}

export default generateMarkdown;