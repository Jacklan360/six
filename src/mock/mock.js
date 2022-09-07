import Mock from 'mockjs'

const data = {
  'id|+1':1,
  'city': '@province()',
  'mtime': '@date()'
}

Mock.mock('api/data','get',data)
