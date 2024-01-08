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
    import type { Store } from '../lib/store';
    import { dateFromTimestamp, timestampFromDate } from '../lib/utils';
    import HelpPopover from './HelpPopover.svelte';

    export let store: Store;
    export let sendername = '';
    export let recipientname = '';
    export let unread = false;
    export let withfilesonly = false;
    export let maxtime = 0;
    export let submit: () => void;
    export let submitEnabled: boolean;

    export function focus() {
        senderNode.focus();
    }

    let senderNode: HTMLElement;
    let today = dateFromTimestamp(Math.floor(new Date().getTime() / 1000));

    $: maxdate = dateFromTimestamp(maxtime);

    const updateMaxTime = (event: Event) => {
        maxtime = timestampFromDate((event.target as HTMLInputElement).value);
    };
</script>

<div class="dropdown-menu dropdown-menu-left show p-3 w-100" style="min-width: 18rem">
    <div class="form-group row">
        <label for="local-mail-search-input-sendername" class="col-4 col-form-label pr-0">
            {$store.strings.searchfrom}
        </label>
        <div class="col-8">
            <input
                type="text"
                class="form-control"
                id="local-mail-search-input-sendername"
                bind:value={sendername}
                bind:this={senderNode}
            />
        </div>
    </div>
    <div class="form-group row">
        <label for="local-mail-search-input-recipientname" class="col-4 col-form-label pr-0">
            {$store.strings.searchto}
        </label>
        <div class="col-8 p">
            <input
                type="text"
                class="form-control"
                id="local-mail-search-input-recipientname"
                bind:value={recipientname}
            />
        </div>
    </div>
    <div class="form-group row">
        <label for="local-mail-search-input-maxdate" class="col-4 col-form-label pr-0">
            {$store.strings.searchdate}
            <HelpPopover {store} message={$store.strings.searchdatehelp} />
        </label>
        <div class="col-8">
            <input
                type="date"
                class="form-control"
                id="local-mail-search-input-maxdate"
                max={today}
                value={maxdate}
                on:input={updateMaxTime}
            />
        </div>
    </div>

    <div class="d-flex flex-wrap align-items-center" style="column-gap: 2rem; row-gap: 1rem">
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                id="local-mail-search-input-unread"
                bind:checked={unread}
            />
            <label class="form-check-label" for="local-mail-search-input-unread">
                {$store.strings.searchunreadonly}
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                id="local-mail-search-input-withfilesonly"
                bind:checked={withfilesonly}
            />
            <label class="form-check-label" for="local-mail-search-input-withfilesonly">
                {$store.strings.searchhasattachments}
            </label>
        </div>
        <input
            type="submit"
            disabled={!submitEnabled}
            class="btn btn-primary px-3 ml-auto"
            on:click|preventDefault={submit}
            value={$store.strings.search}
        />
    </div>
</div>
