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
    import { blur } from '../actions/blur';
    import type { SelectAllType } from '../lib/state';
    import type { Store } from '../lib/store';

    export let store: Store;

    let expanded = false;

    const closeMenu = () => {
        expanded = false;
    };

    const toggleMenu = () => {
        expanded = !expanded;
    };

    const selectAll = (type: SelectAllType) => {
        closeMenu();
        store.selectAll(type);
    };

    $: iconClass =
        $store.selectedMessages.size == 0
            ? 'fa-square-o'
            : $store.selectedMessages.size < $store.listMessages.length
              ? 'fa-minus-square-o'
              : 'fa-check-square-o';
</script>

<div class="btn-group" role="group" use:blur={closeMenu}>
    <button
        class="btn btn-secondary dropdown-toggle"
        aria-expanded={expanded}
        title={$store.strings.select}
        on:click={toggleMenu}
    >
        <i class="fa fa-fw {iconClass}" />
    </button>
    {#if expanded}
        <div class="dropdown-menu show">
            <button type="button" class="dropdown-item" on:click={() => selectAll('all')}>
                {$store.strings.all}
            </button>
            <button type="button" class="dropdown-item" on:click={() => selectAll('none')}>
                {$store.strings.none}
            </button>
            <button type="button" class="dropdown-item" on:click={() => selectAll('read')}>
                {$store.strings.read}
            </button>
            <button type="button" class="dropdown-item" on:click={() => selectAll('unread')}>
                {$store.strings.unread}
            </button>
            <button type="button" class="dropdown-item" on:click={() => selectAll('starred')}>
                {$store.strings.starred}
            </button>
            <button type="button" class="dropdown-item" on:click={() => selectAll('unstarred')}>
                {$store.strings.unstarred}
            </button>
        </div>
    {/if}
</div>
