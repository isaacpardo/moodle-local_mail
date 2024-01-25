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
// Córdoba, Extremadura, Vigo, Las Palmas de Gran Canaria y Burgos.

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
    import type { Message } from '../lib/state';
    import type { Store } from '../lib/store';
    import LabelBadge from './LabelBadge.svelte';

    export let store: Store;
    export let message: Message;
</script>

<div class="d-sm-flex justify-content-between mb-2 mr-n3">
    <div class="d-flex flex-grow-1">
        <div class="align-self-center alert-info px-2 text-truncate" title={message.fulltime}>
            {#if $store.draftSaved}
                <i class="fa fa-check mr-1" aria-hidden="true" /> {$store.strings.draftsaved}
            {:else}
                <i class="fa fa-clock-o mr-1" aria-hidden="true" /> {message.shorttime}
            {/if}
        </div>
        <button
            type="button"
            class="btn border-0 py-2 ml-auto mr-3 mr-sm-2"
            role="checkbox"
            aria-checked={message.starred}
            disabled={message.deleted}
            title={message.starred ? $store.strings.markasunstarred : $store.strings.markasstarred}
            on:click={() => store.setStarred([message.id], !message.starred)}
        >
            <i class="fa {message.starred ? 'fa-star text-warning' : 'fa-star-o'}" />
        </button>
    </div>

    {#if message.labels}
        <div class="d-flex flex-wrap mt-2 mr-2" style="min-width: 0">
            {#each message.labels as label (label.id)}
                <LabelBadge {label} />
            {/each}
        </div>
    {/if}
</div>
