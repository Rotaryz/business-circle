import base from './base'

export default class Circles extends base {
  /**
   * 热销优惠
   * @returns {Promise.<void>}
   */
  static async getHotSales(loading = true) {
    const url = `${this.baseUrl}/api/circles/hot-sales`
    return await this.get(url, {}, loading)
  }

  /**
   * 商圈好店
   * @returns {Promise.<void>}
   */
  static async goodShops(data, loading = true) {
    const url = `${this.baseUrl}/api/circles/shop-lists`
    return await this.get(url, data, loading)
  }

  /**
   * 优质推荐
   * @returns {Promise.<void>}
   */
  static async highQuality(loading = true, page = 1, limit = 3) {
    let data = {
      page,
      limit
    }
    const url = `${this.baseUrl}/api/circles/content-lists`
    return await this.get(url, data, loading)
  }

  /**
   * 更多商圈
   * @returns {Promise.<void>}
   */
  static async moreCircles(loading = true, limit = 5) {
    let data = {
      limit
    }
    const url = `${this.baseUrl}/api/circles/circle-lists`
    return await this.get(url, data, loading)
  }

  /**
   * 商圈详情
   * @returns {Promise.<void>}
   */
  static async circleDetails(loading = true) {
    const url = `${this.baseUrl}/api/circles/detail`
    return await this.get(url, {}, loading)
  }

  /**
   * 行业列表
   * @returns {Promise.<void>}
   */
  static async getIndustrys(loading = true) {
    const url = `${this.baseUrl}/api/get-industry`
    return await this.get(url, {}, loading)
  }
}
