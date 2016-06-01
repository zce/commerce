import path from 'path'

import hbs from 'hbs'

export default (app) => {
  app.set('views', path.resolve(__dirname, '../views'))
    // 使用的是hbs模版引擎
  app.set('view engine', 'hbs')

  app.locals.layout = 'shared/layout.hbs'

  hbs.localsAsTemplateData(app)

  hbs.registerPartials(path.resolve(__dirname, '../views/shared'))

  const blocks = {}

  hbs.registerHelper('block', function (name) {
    const result = (blocks[name] || []).join('\n')
    // clear the block
    blocks[name] = []
    return result
  })

  hbs.registerHelper('extend', function (name, context) {
    var block = blocks[name]
    if (!block) {
      block = blocks[name] = []
    }
    block.push(context.fn(this)) // for older versions of handlebars, use block.push(context(this))
  })
}
