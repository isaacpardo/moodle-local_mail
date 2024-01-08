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
    import { fade } from 'svelte/transition';
    import type { Store } from '../lib/store';
    import { viewUrl } from '../lib/url';

    export let store: Store;

    $: recentParams = {
        tray: $store.params.tray,
        courseid: $store.params.courseid,
        labelid: $store.params.labelid,
    };
</script>

{#if !$store.listMessages.length}
    <div in:fade={{ delay: 400 }} class="alert alert-info">
        <div>
            {$store.strings.nomessagesfound}
        </div>
        {#if $store.totalCount > 0}
            <a
                class="btn btn-info text-white mt-3"
                href={viewUrl(recentParams)}
                on:click|preventDefault={() => store.navigate(recentParams)}
            >
                {$store.strings.showrecentmessages}
            </a>
        {/if}
    </div>
{/if}
