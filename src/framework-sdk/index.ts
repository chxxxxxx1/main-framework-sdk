/*
 * @Author: chessman chenjiabao686@outlook.com
 * @Date: 2023-07-30 13:18:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-07-30 13:53:20
 */

import { FrameworkSdkConfig } from './interface';
import { logger } from './utils';

export class FrameworkSdk {
  private log: (type: 'log') => void;
  private config: FrameworkSdkConfig;
  currentUser: any;
  constructor(config: FrameworkSdkConfig) {
    this.log = logger('log');
    this.config = config;
    this.currentUser;
    this.init();
  }

  private init() {}

  getCurrentUser() {
    return this.currentUser;
  }
  // 销毁实例
  destroy() {}
}
