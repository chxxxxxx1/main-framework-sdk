/*
 * @Author: chessman chenjiabao686@outlook.com
 * @Date: 2023-07-30 13:18:37
 * @LastEditors: chessman cjb15770595346@163.com
 * @LastEditTime: 2023-07-30 15:24:20
 */

import { FrameworkSdkConfig } from './interface';
import { logger } from './utils';

export class FrameworkSdk {
  private log: (...arg: any) => void;
  private error: (...arg: any) => void;
  private config: FrameworkSdkConfig;
  private currentUser: any;
  constructor(config: FrameworkSdkConfig) {
    this.log = logger('log');
    this.error = logger('error');
    this.config = config;
    this.currentUser = {};
    this.init();
  }

  private init() {
    try {
      // @ts-ignore
      window.frameworkSdk = this.config;
      this.log('framework 运行中~');
    } catch (err) {
      this.error('framework 运行失败!', err);
      this.destroy();
    }
  }
  // 获取用户信息
  public getCurrentUser() {
    return this.currentUser;
  }
  // 销毁实例
  public destroy() {}
}
