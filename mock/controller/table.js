const { mock } = require('mockjs')
const List = []
const count = 50
for (let i = 0; i < count; i++) {
  List.push(
    mock({
      uuid: '@uuid',
      client_name: '@cname',
      contactName: '@cname',
      contactPhone: /^1[385][1-9]\d{8}/,
      province: '@city(true)',
      client_origin: '@city(true)',
      create_time: '@date(yyyy-MM-dd hh:mm)',
      submit_person: '@cname',
    })
  )
}

module.exports = [
  {
    url: '/table/getList',
    type: 'get',
    response(config) {
      const { title, current = 1, pageSize = 10 } = config.query
      let mockList = List.filter((item) => {
        return !(title && item.title.indexOf(title) < 0)
      })
      const pageList = mockList.filter(
        (item, index) =>
          index < pageSize * current && index >= pageSize * (current - 1)
      )
      return {
        code: 200,
        msg: 'success',
        total: mockList.length,
        data: pageList,
      }
    },
  },
  {
    url: '/table/doEdit',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟保存成功',
      }
    },
  },
  {
    url: '/table/doDelete',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟删除成功',
      }
    },
  },
]
