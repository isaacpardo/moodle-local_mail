<!--
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
-->
<svelte:options immutable={true} />

<script lang="ts">
    import { truncate } from '../actions/truncate';
    import type { Attachment, Reference, Strings } from '../lib/state';
    import { downloadAllUrl } from '../lib/url';
    import { formatSize } from '../lib/utils';

    export let strings: Strings;
    export let message: Reference;

    const fileName = (file: Attachment): string =>
        (file.filepath + file.filename).replace(/^\//, '');
</script>

<div class="local-mail-message-attachments d-sm-flex flex-wrap mr-n3 mt-3 mb-sm-n3">
    {#each message.attachments as file}
        <a
            href={file.fileurl}
            class="local-mail-message-attachments-file btn btn-light d-flex align-items-center px-2 py-1 mr-3 mb-3"
        >
            <img
                aria-hidden="true"
                alt={file.filename}
                src={file.iconurl}
                width="24"
                height="24"
                class="flex-shrink-0"
            />
            <i
                class="fa fa-download d-flex justify-content-center align-items-center flex-shrink-0"
                aria-hidden="true"
                style="width: 24px; height: 24px"
            />
            <div class="ml-2 mr-1" style="min-width: 0">
                <div use:truncate={fileName(file)}>{fileName(file)}</div>
                <div class="text-left text-muted">{formatSize(file.filesize)}</div>
            </div>
        </a>
    {/each}
    {#if message.attachments.length > 1}
        <a
            href={downloadAllUrl(message.id)}
            class="btn btn-light d-flex align-items-center p-2 mr-3 mb-3"
        >
            <i
                class="fa fa-download d-flex justify-content-center align-items-center flex-shrink-0"
                aria-hidden="true"
                style="width: 24px; height: 24px"
            />
            <div class="text-truncate ml-2">{strings.downloadall}</div>
        </a>
    {/if}
</div>

<style global>
    .local-mail-message-attachments a {
        min-width: 0;
        min-height: 3rem;
        line-height: 1.25;
    }

    .local-mail-message-attachments-file:not(:hover) .fa-download {
        display: none !important;
    }
    .local-mail-message-attachments-file:hover img {
        display: none !important;
    }
</style>
