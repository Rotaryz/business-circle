import base from './base'

export default class Merchants extends base {
  /**
   * 获取广场商圈列表
   * @param longitude 经度
   * @param latitude  维度
   * @param businessCircleId  商圈id
   * @param industryId  行业类型id
   * @returns {Promise<*>}
   */
  static async getPlazaMerchants(longitude = 0, latitude = 0, industryId = 0, businessId) {
    const url = `${this.baseUrl}/api/circles/plaza-merchants?industry_id=${industryId}&longitude=${longitude}&latitude=${latitude}&current_business=${businessId}`
    return await this.get(url)
  }
  /**
   * 获取广场商圈列表
   * @param longitude 经度
   * @param latitude  维度
   * @param businessCircleId  商圈id
   * @param industryId  行业类型id
   * @returns {Promise<*>}
   */
  static async getPlazaMerchantsNew(businessCircleId = 0) {
    let data = {
      current_business: businessCircleId
    }
    const url = `${this.baseUrl}/api/circles/map-merchants`
    return await this.get(url, data)
  }

  /**
   * 获取商家详情
   * @param id  商家Id
   * @returns {Promise.<*>}
   */
  static async getMerchantsDetail(id) {
    const url = `${this.baseUrl}/api/merchants/plaza-merchants-show/${id}`
    return await this.get(url)
  }
  /**
   * 获取商家详情new
   * @param id  商家Id
   * @returns {Promise.<*>}
   */
  static async getMerchantsDetailNew(id) {
    const url = `${this.baseUrl}/api/merchants/plaza/merchants-show/${id}`
    return await this.get(url)
  }

  /**
   * 获取推荐商家详情
   * @param id  商家Id
   * @returns {Promise.<*>}
   */
  static async getMerchantsStatus(id, data, loading) {
    const url = `${this.baseUrl}/api/merchants/show-merchant/${id}`
    return await this.get(url, data, loading)
  }

  /**
   * 获取推荐商家礼包(全部)
   * @param id  商家Id
   * @returns {Promise.<*>}
   */
  static async getGiftBags(id, data, loading) {
    const url = `${this.baseUrl}/api/merchants/show-gift-bag/${id}`
    return await this.get(url, data, loading)
  }

  /**
   * 获取推荐商家优惠券列表(分页)
   * @param id  商家Id
   * @returns {Promise.<*>}
   */
  static async getCoupons(id, data, loading) {
    const url = `${this.baseUrl}/api/merchants/show-promotion/${id}`
    return await this.get(url, data, loading)
  }

  /**
   * 保存浏览记录
   * @param data
   * @returns {Promise.<*>}
   */
  static async saveLog(data, loading = true) {
    const url = `${this.baseUrl}/api/merchants/save-log`
    return await this.post(url, data, loading)
  }

  /**
   * 优惠券详情
   * @param data
   * @returns {Promise.<*>}
   */
  static async coupons(id, data) {
    const url = `${this.baseUrl}/api/merchants/coupons/${id}`
    return await this.get(url, data)
  }

  /**
   * 商圈行业列表
   * @returns {Promise.<*>}
   */
  static async getIndustry() {
    const url = `${this.baseUrl}/api/get-industry`
    return await this.get(url)
  }

  /**
   * 获取用户地址的经纬度
   * @param type 1:家 2:公司
   * @returns {Promise<*>}
   */
  static async getDimension(type) {
    const url = `${this.baseUrl}/api/circles/get-dimension?type=${type}`
    return await this.get(url)
  }

  /**
   * 用户增加播豆（分享）
   * @param source
   * @returns {Promise<void>}
   */
  static async userAddScore(source) {
    const url = `${this.baseUrl}/api/scores/add-score?source=${source}`
    return await this.get(url)
  }

  /**
   * 根据经纬度获取商圈ID
   * @returns {Promise<void>}
   */
  static async getBusinessCircleId(longitude, latitude) {
    const url = `${this.baseUrl}/api/circles/champions-circle?longitude=${longitude}&latitude=${latitude}`
    return await this.get(url)
  }
}
