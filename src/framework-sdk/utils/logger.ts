/*
 * @Author: chessman chenjiabao686@outlook.com
 * @Date: 2023-07-30 13:18:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-07-30 13:48:17
 */

type LogType = 'log' | 'warn' | 'error';

export const logger =
  (type: LogType) =>
  (...arg: any) => {
    return console[type]('%c[main-framework]', 'color:#1898ff', ...arg);
  };
