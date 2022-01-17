export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e53faec5b5661eb47d3f7a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-sz7zjsbh',
                  apiId: '85a11384-126d-4d72-8d17-e43f6c30e706'
                },
                {
                  buildHookId: '61e53faf987abf66b775087e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ggorq9f9',
                  apiId: '99f47fe1-153c-43ee-b0ea-83696672b3cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisokwakol/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ggorq9f9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
