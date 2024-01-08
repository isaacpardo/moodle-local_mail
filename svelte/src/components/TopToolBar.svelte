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
    import { ViewportSize } from '../lib/state';
    import type { Store } from '../lib/store';
    import BackButton from './BackButton.svelte';
    import CourseSelect from './CourseSelect.svelte';
    import DeleteButton from './DeleteButton.svelte';
    import DeleteForeverButton from './DeleteForeverButton.svelte';
    import LabelsButton from './LabelsButton.svelte';
    import MoreActionsButton from './MoreActionsButton.svelte';
    import PagingButtons from './PagingButtons.svelte';
    import RestoreButton from './RestoreButton.svelte';
    import SelectAllButton from './SelectAllButton.svelte';
    import SendButton from './SendButton.svelte';

    export let store: Store;
</script>

<div role="toolbar" class="local-mail-toolbar d-flex w-100">
    {#if $store.message}
        <BackButton {store} />
    {:else}
        <SelectAllButton {store} />
    {/if}

    {#if $store.viewportSize >= ViewportSize.MD}
        <div class="btn-group" role="group">
            {#if $store.params.tray == 'trash'}
                <RestoreButton {store} />
                <DeleteForeverButton {store} />
            {:else}
                <LabelsButton {store} />
                <DeleteButton {store} />
            {/if}
            <MoreActionsButton {store} />
        </div>
    {/if}
    {#if !$store.message?.draft && ['shortname', 'fullname'].includes($store.settings.filterbycourse) && $store.viewportSize < ViewportSize.LG}
        <div
            class="d-flex flex-grow-1 ml-auto mr-0 ml-md-0 mr-md-auto"
            style="max-width: 20rem; min-width: 0"
        >
            <CourseSelect
                settings={$store.settings}
                strings={$store.strings}
                courses={$store.courses}
                label={$store.strings.allcourses}
                selected={$store.params.courseid}
                readonly={$store.params.tray == 'course'}
                onChange={(id) => store.selectCourse(id)}
                primary={true}
                style={$store.viewportSize >= ViewportSize.MD ? 'filter-left' : 'filter-right'}
            />
        </div>
    {/if}

    {#if $store.viewportSize >= ViewportSize.MD}
        <PagingButtons {store} />
    {:else if $store.message?.draft}
        <SendButton {store} />
    {/if}
</div>

<style global>
    .local-mail-toolbar {
        column-gap: 1rem;
    }
</style>
