export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '6129c6e05b7167985085d52f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-4xej5zxi',
                  apiId: '8267064a-986c-45c6-92fc-054736ec70b3'
                },
                {
                  buildHookId: '6129c6e0eb3f35b59b490355',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-jwge5cxz',
                  apiId: 'b28178d8-9e0e-4334-a390-c2b5d938e10a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Zhangjt9317/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-jwge5cxz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
