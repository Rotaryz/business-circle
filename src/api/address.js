import base from './base'

export default class Address extends base {
  /**
   * 场景地址列表
   * @returns {Promise<*>}
   */
  static async getAddressList() {
    const url = `${this.baseUrl}/api/circles/address`
    return await this.get(url)
  }

  /**
   * 场景地址详细信息
   * @param type 家1 公司2
   * @param id 查询项id
   * @returns {Promise<*>}
   */
  static async getAddressDetail(id, type) {
    const url = `${this.baseUrl}/api/circles/address/${id}?type=${type}`
    return await this.get(url)
  }

  /**
   * 添加场景地址
   * @param data 场景参数
   * @returns {Promise<*>}
   */
  static async postAddress(data) {
    const url = `${this.baseUrl}/api/circles/address`
    return await this.post(url, data)
  }

  /**
   * 修改场景地址
   * @param data
   * @param id 修改项的id
   * @returns {Promise<*>}
   */
  static async putAddress(data, id) {
    const url = `${this.baseUrl}/api/circles/address/${id}`
    return await this.put(url, data)
  }

  /**
   * 删除场景地址
   * @returns {Promise<*>}
   */
  static async deleteAddress(num) {
    const url = `${this.baseUrl}/api/circles/address/${num}`
    return await this.delete(url)
  }
}
