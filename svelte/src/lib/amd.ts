// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
// Project implemented by the "Recovery, Transformation and Resilience Plan.
// Funded by the European Union - Next GenerationEU".
//
// Produced by the UNIMOODLE University Group: Universities of
// Valladolid, Complutense de Madrid, UPV/EHU, León, Salamanca,
// Illes Balears, Valencia, Rey Juan Carlos, La Laguna, Zaragoza, Málaga,
// Córdoba, Extremadura, Vigo, Las Palmas de Gran Canaria y Burgos

/**
 * Version details
 *
 * @package    local_mail
 * @copyright  2023 Proyecto UNIMOODLE
 * @author     UNIMOODLE Group (Coordinator) <direccion.area.estrategia.digital@uva.es>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
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

/** Module "core_filters/events" */
export interface CoreFiltersEvents {
    /**
     * Trigger an event to indicate that the specified nodes were updated and
     * should be processed by the filter system.
     *
     * @param nodes Nodes with updated content.
     */
    notifyFilterContentUpdated: (nodes: Element[]) => void;
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
 * Loads an AMD module with require().
 *
 * @param name Name of the module, e.g. "core/ajax".
 * @returns The module.
 */
export async function loadModule<T>(name: string): Promise<T> {
    if (modules[name] == null) {
        modules[name] = await new Promise((resolve) => {
            window.require([name], resolve);
        });
    }
    return modules[name] as T;
}
