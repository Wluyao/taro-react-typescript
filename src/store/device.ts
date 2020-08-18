import { observable, action } from 'mobx'

class DeviceStore {
  // 设备状态栏高度
  @observable statusBarHeight: number = 0

  // 设备窗口高度
  @observable windowHeight: number = 0

  // 顶部菜单高度
  @observable menuBarHeight: number = 0

  @action
  public setStatusBarHeight(value: number) {
    this.statusBarHeight = value
  }

  @action
  public setWindowHeight(value: number) {
    this.windowHeight = value
  }

  @action
  public setMenuBarHeight(value: number) {
    console.log(value)
    this.menuBarHeight = value
  }
}

export default new DeviceStore()
