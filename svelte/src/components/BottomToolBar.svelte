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
    import { onMount } from 'svelte';
    import type { Store } from '../lib/store';
    import DeleteButton from './DeleteButton.svelte';
    import DeleteForeverButton from './DeleteForeverButton.svelte';
    import LabelsButton from './LabelsButton.svelte';
    import MoreActionsButton from './MoreActionsButton.svelte';
    import PagingButtons from './PagingButtons.svelte';
    import RestoreButton from './RestoreButton.svelte';

    export let store: Store;

    let height: number;
    let placeholderNode: HTMLElement;
    let fixed = false;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    fixed =
                        entry.intersectionRatio < 1 &&
                        entry.boundingClientRect.top >= entry.boundingClientRect.height;
                }
            },
            { threshold: 1 },
        );
        observer.observe(placeholderNode);

        return () => observer.disconnect();
    });
</script>

<div class="row position-relative" bind:this={placeholderNode} style="height: {height}px;">
    <div
        role="toolbar"
        class="local-mail-toolbar d-flex w-100 py-3 border-top"
        class:position-fixed={fixed}
        class:position-absolute={!fixed}
        class:fixed-bottom={fixed}
        class:border-bottom={!fixed}
        class:bg-white={!fixed}
        class:bg-light={fixed}
        bind:offsetHeight={height}
    >
        <div class=" w-100 d-flex justify-content-around" role="group">
            {#if $store.params.tray == 'trash'}
                <RestoreButton {store} transparent={true} />
                <DeleteForeverButton {store} transparent={true} />
            {:else}
                <LabelsButton {store} transparent={true} dropup={true} />
                <DeleteButton {store} transparent={true} />
            {/if}
            <MoreActionsButton {store} transparent={true} dropup={true} />
            <PagingButtons {store} transparent={true} compact={true} />
        </div>
    </div>
</div>

<style>
    .local-mail-toolbar.position-fixed {
        z-index: 1020;
    }
</style>
