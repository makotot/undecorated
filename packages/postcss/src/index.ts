import * as postcss from 'postcss'

const PostCssUndecorated = postcss.plugin('undecorated', (options = {}) => {
  return (css, result) => {
    css.walkAtRules('undecorated', rule => {
      rule.walkRules((decl) => {
        console.log(decl)
      })
    })
  }
})

export {
  PostCssUndecorated,
}

export default PostCssUndecorated
