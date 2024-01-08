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
    import { onDestroy, onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { blur } from '../actions/blur';

    export let title: string;
    export let cancelText = '';
    export let confirmText = '';
    export let onCancel: () => void;
    export let onConfirm: (() => void) | undefined = undefined;
    export let confirmClass = 'btn-primary';
    export let confirmDisabled = false;

    let node: HTMLElement;

    onMount(() => {
        document.body.classList.add('modal-open');
        node.focus();
    });

    onDestroy(() => {
        document.body.classList.remove('modal-open');
    });

    const handleKey = (event: KeyboardEvent) => {
        if (event.key == 'Escape') {
            onCancel();
        }
    };
</script>

<svelte:body on:keyup={handleKey} />

<div
    class="modal show"
    tabindex="-1"
    role="dialog"
    aria-label={title}
    aria-modal="true"
    bind:this={node}
    transition:fly|global={{ y: -100 }}
    use:blur={onCancel}
>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    {title}
                </h5>
                <button type="button" class="close" aria-label={cancelText} on:click={onCancel}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <slot />
            </div>
            {#if cancelText || (confirmText && onConfirm)}
                <div class="modal-footer">
                    {#if cancelText}
                        <button type="button" class="btn btn-secondary" on:click={onCancel}>
                            {cancelText}
                        </button>
                    {/if}
                    {#if confirmText && onConfirm}
                        <button
                            type="button"
                            class="btn {confirmClass}"
                            disabled={confirmDisabled}
                            on:click={onConfirm}
                        >
                            {confirmText}
                        </button>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
</div>

<div class="modal-backdrop show" transition:fade|global />
