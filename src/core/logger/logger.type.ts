import fs from 'fs';

export type LoggerLevels = 'warn' | 'error' | 'info';

export type LogStream = fs.WriteStream | NodeJS.WriteStream & { fd: 1 } ;

export interface ILogger {
    error(msg: any): void;
    info(msg: any): void;
    warn(msg: any): void;
}