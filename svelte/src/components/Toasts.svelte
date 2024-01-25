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
    import { flip } from 'svelte/animate';
    import { fly } from 'svelte/transition';
    import type { Store } from '../lib/store';

    export let store: Store;
</script>

<div
    aria-live="polite"
    aria-atomic="true"
    class="local-mail-toasts position-fixed d-flex flex-column-reverse p-3"
>
    {#each $store.toasts as toast (toast)}
        <div
            animate:flip
            in:fly|global={{ y: 50, delay: 200 }}
            out:fly|global={{ y: 50, duration: 400 }}
            class="toast mt-2 mb-0"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-autohide="false"
        >
            <div class="toast-body d-flex align-items-center p-2">
                <div class="px-1 mr-auto">{toast.text}</div>
                {#if toast.undo}
                    <button
                        type="button"
                        class="local-mail-toast-undo btn font-weight-bold px-2 py-0 ml-3"
                        on:click={() => store.undo(toast)}
                    >
                        {$store.strings.undo}
                    </button>
                {/if}

                <button
                    type="button"
                    class="btn px-2 py-0 ml-2 text-white-50"
                    title={$store.strings.close}
                    on:click={() => store.hideToast(toast)}
                >
                    <i class="fa fa-times" />
                </button>
            </div>
        </div>
    {/each}
</div>

<style global>
    .local-mail-toasts {
        left: 0;
        bottom: 0;
        z-index: 1100;
        pointer-events: none;
    }

    .local-mail-toasts .toast {
        opacity: 1;
        pointer-events: auto;
        flex-basis: 0;
        max-width: 400px;
    }

    .local-mail-toast-undo {
        color: var(--activitycontent);
    }
</style>
