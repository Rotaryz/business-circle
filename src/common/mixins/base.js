import wepy from 'wepy'
import Tips from 'common/js/tips'
import Info from 'api/info'

const COLLECT_COUNT = 20

export default class base extends wepy.mixin {
  loaded() {
    this.init = true
    this.$apply()
    Tips.loaded()
  }

  data = {
    industry: 'ktv',
    industryColor: '#FF4E00'
  }

  // 卸载清理
  onUnload() {
    Object.assign(this, this.def)
  }

  showIndustry() {
    this.industry = 'ktv'
    this.industryColor = '#FF4E00'
  }

  async collectFormIds(formId) {
    const date = new Date()
    const now = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    const collectDate = wepy.getStorageSync('collectDate')
    const collectLength = wepy.getStorageSync('collectLength')
    if (now === collectDate && collectLength < COLLECT_COUNT) {
      await Info.collectFormIds({form_ids: [formId]})
      wepy.setStorageSync('collectLength', collectLength + 1)
    } else if (now !== collectDate) {
      wepy.setStorageSync('collectDate', now)
      await Info.collectFormIds({form_ids: [formId]})
      wepy.setStorageSync('collectLength', 0)
    }
  }
  async upLoadImage() {
    const user = wepy.getStorageSync('user') ? wepy.getStorageSync('user') : {}
//      分享背景
    if (!this.$parent.globalData.shareBgsshareBgs) {
      this.$parent.updateGlobalData('shareBgs', '../../common/image/pic-sharebg.png')
    }
//      分享券卷箭头
    if (!this.$parent.globalData.shareArrows) {
      this.$parent.updateGlobalData('shareArrows', '../../common/image/pic-share_arrow.png')
    }
//      头像
    if (!this.$parent.globalData.shareAvatars) {
      if (user.avatarUrl) {
        let shareAvatars = await wepy.downloadFile({url: user.avatarUrl})
        this.$parent.updateGlobalData('shareAvatars', shareAvatars)
      }
    }
    //
    if (!this.$parent.globalData.shareManys) {
      this.$parent.updateGlobalData('shareManys', '../../common/image/icon-many.png')
    }
    // 人物icon
    if (!this.$parent.globalData.shareActivityIcon) {
      this.$parent.updateGlobalData('shareActivityIcon', '../../common/image/pic-price@2x.png')
    }
    // 分享赚钱的礼物icon
    if (!this.$parent.globalData.shareGife) {
      this.$parent.updateGlobalData('shareGife', '../../common/image/icon-share_prize.png')
    }
  }

  methods = {
    nopen() {
      Tips.alert('尚未开放')
    }
  }
}
