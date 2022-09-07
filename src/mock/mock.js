import Mock from 'mockjs'

// const data = {
//   'id|+1':1,
//   'city': '@province()',
//   'mtime': '@date()'
// }
const data = {
  id: '001',
  user: 'jack',
  code: 200
}

Mock.mock('api/data','post',(options) => {
  let item = options
  return {
    result: 200,
    data: {
      uid: '55',
      type: 1,
      userName: 'jack',
    }
  }
})
