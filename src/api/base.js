import URIS from 'common/js/config'
import http from 'common/js/http'

export default class base {
  static baseUrl = URIS.api
  static get = http.get.bind(http)
  static put = http.put.bind(http)
  static post = http.post.bind(http)
  static delete = http.delete.bind(http)
  static updateImg = http.updateImg.bind(http)
}

export const ERR_OK = 0
