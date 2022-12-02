'use strict';

import fs from 'fs';
import { join, extname } from 'path';
import { ILogger, LoggerLevels, LogStream } from './logger.type';

// file => serializer => app => module => level => msg

// const logger = (file?: any) => {
//   file = file || process.stdout;
//   const { isTTY } = file;
//   const stream = isTTY ? file : fs.createWriteStream(join(__dirname, '../log', file));
//   const { defaultSerializer } = logger;
//   return (serializer = defaultSerializer) =>
//     (app: any) =>
//     (module: string) =>
//     (level: LoggerLevels) => {
//       const color = isTTY ? logger.colors[level] || logger.colors.info : '';
//       const debug = isTTY ? logger.colors.debug : '';
//       return (msg: any) => {
//         const date = new Date().toISOString();
//         const record = { date, level, app, module, msg };
//         const line = serializer(record);
//         stream.write(color + line + debug + '\n');
//       };
//     };
// };

// logger.defaultSerializer = (obj: { [key: string]: any }) => Object.values(obj).join('\t');

// logger.colors = {
//   warn: '\x1b[1;33m',
//   error: '\x1b[0;31m',
//   info: '\x1b[1;37m',
//   debug: '\x1b[0m',
// };

// export = logger;

export class Logger implements ILogger {
  private colors: {[key: string]: string} = {
    warn: '\x1b[1;33m',
    error: '\x1b[0;31m',
    info: '\x1b[1;37m',
  };
  private isFile: boolean = false;
  private stream: LogStream;

  constructor(fileName?: string) {
    this.stream = this.createStream(fileName);
  }

  private createStream(fileName?: string): LogStream {
    if (!fileName) return process.stdout;
    const extension = extname(fileName);
    this.isFile = true;
    if (!extension || extension !== 'log') fileName = fileName + '.log';
    const filePath = join(__dirname, '..', '..', '..', 'log', fileName);
    return fs.createWriteStream(filePath, { flags: 'a' });
  }

  private write(level: LoggerLevels, message: any): void {
    const color = this.isFile ? '' : this.colors[level];
    const date = new Date().toISOString();
    const line = `${color}${level.toUpperCase()} \t ${date} \t ${this.serialize(message)} \n`;
    // @ts-ignore
    this.stream.write(line);
  }

  private serialize(msg: any): string {
    if (typeof msg === 'string') return msg;
    return JSON.stringify(msg);
  }

  error(msg: any): void {
    this.write('error', msg);
  }
  info(msg: any): void {
    this.write('info', msg);
  }
  warn(msg: any): void {
    this.write('warn', msg);
  }
}
