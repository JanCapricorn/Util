﻿//============== 消息操作=========================
//Copyright 2018 何镇汐
//Licensed under the MIT license
//================================================
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';
import { IocHelper as ioc } from '../angular/ioc-helper';

/**
 * 消息操作
 */
export class Message {
    /**
     * 成功消息
     * @param message 消息
     * @param title 标题
     */
    static success(message: string, title?: string): void {
        var service = ioc.get(MessageService);
        service.add({ severity: 'success', summary: title || "成功", detail: message });
    }

    /**
     * 信息消息
     * @param message 消息
     * @param title 标题
     */
    static info(message: string, title?: string): void {
        var service = ioc.get(MessageService);
        service.add({ severity: 'info', summary: title || "信息", detail: message });
    }

    /**
     * 警告消息
     * @param message 消息
     * @param title 标题
     */
    static warn(message: string, title?: string): void {
        var service = ioc.get(MessageService);
        service.add({ severity: 'warn', summary: title || "警告", detail: message });
    }

    /**
     * 错误消息
     * @param message 消息
     * @param title 标题
     */
    static error(message: string, title?: string): void {
        var service = ioc.get(MessageService);
        service.add({ severity: 'error', summary: title || "错误", detail: message });
    }

    /**
     * 确认
     * @param options 配置
     */
    static confirm(options: {
        /**
         * 消息
         */
        message: string,
        /**
         * 确认回调函数
         */
        accept: () => void,
        /**
         * 标题
         */
        header?: string;
    }): void;
    /**
     * 确认
     * @param message 消息
     * @param accept 确认回调函数
     */
    static confirm(message: string, accept?: () => void): void;
    static confirm(options, accept?): void {
        var service = ioc.get(ConfirmationService);
        let message = "";
        let header = "";
        if (typeof options === "object") {
            message = options["message"];
            header = options["header"];
            accept = options["accept"];
        }
        else if (typeof options === "string") {
            message = options;
        }
        service.confirm({
            message: message,
            accept: accept,
            header: header || "确认"
        });
    }
}