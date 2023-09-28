/*
 * SPDX-FileCopyrightText: 2023 SEIDOR <https://www.seidor.com>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type * as TinyMCE from '../../../../../lib/editor/tiny/js/tinymce/tinymce.d.ts';

/** Module "core/ajax" */
export interface CoreAjax {
    /**
     * Make a series of ajax requests and return all the responses.
     *
     * @param requests Array of requests with each containing methodname and args properties.
     * @return The promises for each of the supplied requests.
     */
    call: (requests: CoreAjaxRequest[]) => Promise<unknown>[];
}

export interface CoreAjaxRequest {
    methodname: string;
    args: Record<string, unknown>;
}

/** Module "core/fragment" */
export interface CoreFragment {
    /**
     * Converts the JS that was received from collecting JS requirements on the $PAGE
     * so it can be added to the existing page.
     *
     * @param html HTML with script tags.
     * @return Contents of the script tag to be added to head.
     */
    processCollectedJavascript: (html: string) => string;
}

/** Module "core/pubsub" */
export interface CorePubSub {
    subscribe: (eventName: string, callback: () => void) => void;
    unsubscribe: (eventName: string, callback: () => void) => void;
}

/** Module "editor_tiny/loader" */
export interface EditorTinyLoader {
    getTinyMCE: () => Promise<TinyMCE.TinyMCE>;
}

export type { TinyMCE };

const modules: Record<string, unknown> = {};

/**
 * Loads an AMD modules with require().
 *
 * @param name Name of the module, e.g. "core/ajax".
 * @returns The module.
 */
export async function require(name: string): Promise<unknown> {
    if (modules[name] == null) {
        modules[name] = await new Promise((resolve) => {
            window.require([name], resolve);
        });
    }
    return modules[name];
}
