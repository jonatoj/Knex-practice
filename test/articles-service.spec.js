const ArticlesService = require('../src/articles-service')
const knex = require('knex')
const { expect } = require('chai')

describe(`Articles service object`, function() {
    let db
    let testArticles = [
        {
            id: 1,
            date_published: new Date('2029-01-22T16:28:32.615Z'),
            title: 'First test post!',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
        },
        {
            id: 2,
            date_published: new Date('2100-05-22T16:28:32.615Z'),
            title: 'Second test post!',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
        },
        {
            id: 3,
            date_published: new Date('1919-12-22T16:28:32.615Z'),
            title: 'Third test post!',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
        },
    ]

    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })
    before(() => db('blogful_articles').truncate())

    afterEach(() => db('blogful_articles').truncate())

    after(() => db.destroy())

  
    context(`Given 'blogful_articles' has data`, () => {
           before(() => {
            return db
               .into('blogful_articles')
               .insert(testArticles)
           })
         
            it(`getAllArticles() resolves all articles from 'blogful_articles' table`, () => {
           // test that ArticlesService.getAllArticles gets data from table
           return ArticlesService.getAllArticles(db)
           .then(actual => {
               expect(actual).to.eql(testArticles.map(article => ({
                   ...article,
                   date_published: new Date(article.date_published)
               })))
           })
         })

         context(`Given 'blogful_articles' has no data`, () => {
               it(`getAllArticles() resolves an empty array`, () => {
                 return ArticlesService.getAllArticles(db)
                   .then(actual => {
                     expect(actual).to.eql([])
                   })
               })
             })
       })
    })
