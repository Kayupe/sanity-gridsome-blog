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
                  buildHookId: '6181e0087946c3148c193681',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-8w99od92',
                  apiId: '309813fa-2a00-4407-8a39-2849c7ce6c75'
                },
                {
                  buildHookId: '6181e00964ff4616c0b15296',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-swwbprqy',
                  apiId: '422b44c0-32d3-40d9-899c-5a85d711fe70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kayupe/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-swwbprqy.netlify.app', category: 'apps'}
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
