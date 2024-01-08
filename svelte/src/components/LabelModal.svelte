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
    import type { Label } from '../lib/state';
    import type { Store } from '../lib/store';
    import { colors, normalizeLabelName } from '../lib/utils';
    import ModalDialog from './ModalDialog.svelte';

    export let store: Store;
    export let label: Label | undefined = undefined;
    export let onCancel: () => void;
    export let onSubmit: (name: string, color: string) => void;

    let nameEl: HTMLElement;

    $: id = `local-mail-label-modal-${label?.id || 'new'}`;
    $: name = label?.name || '';
    $: selectedColor = label?.color || colors[0];
    $: emptyName = normalizeLabelName(name) == '';
    $: repeatedName = $store.labels.some(
        (l) => l.id != label?.id && l.name == normalizeLabelName(name),
    );
    $: validName = !emptyName && !repeatedName;

    const submit = async () => {
        onSubmit(name, selectedColor);
    };

    onMount(() => nameEl.focus());
</script>

<ModalDialog
    title={$store.strings[label ? 'editlabel' : 'newlabel']}
    cancelText={$store.strings.cancel}
    {onCancel}
    confirmText={$store.strings[label ? 'save' : 'create']}
    confirmDisabled={!validName}
    onConfirm={submit}
>
    <form on:submit|preventDefault={submit}>
        <div class="form-group mb-0">
            <label for="local-mail-label-modal-name">{$store.strings.name}</label>
            <input
                type="text"
                required
                class="form-control is-invalid"
                class:is-valid={validName}
                class:is-invalid={!validName}
                id="{id}-name"
                bind:this={nameEl}
                bind:value={name}
            />
            <div class="invalid-feedback">
                {#if repeatedName}
                    {$store.strings.errorrepeatedlabelname}
                {:else}
                    &nbsp;
                {/if}
            </div>
            <div class="valid-feedback">&nbsp;</div>
        </div>
        <div class="form-group">
            <label for="{id}-color">
                {$store.strings.color}
            </label>
            <div role="radiogroup" class="local-mail-label-modal-color" id="{id}-color">
                {#each colors as color (color)}
                    <button
                        role="radio"
                        aria-checked={color == selectedColor}
                        tabindex="0"
                        title={$store.strings[`color${color}`]}
                        class="local-mail-label-modal-color-option btn"
                        style={`color: var(--local-mail-color-${color}-fg, var(--local-mail-color-gray-fg));` +
                            `background-color: var(--local-mail-color-${color}-bg, var(--local-mail-color-gray-bg))`}
                        on:click|preventDefault={() => {
                            selectedColor = color;
                        }}
                    >
                        {#if color == selectedColor}
                            <i class="fa fa-check local-mail-label-modal-color-option-check" />
                        {:else}
                            <span aria-hidden="true">a</span>
                        {/if}
                    </button>
                {/each}
            </div>
        </div>
    </form>
</ModalDialog>

<style global>
    .local-mail-label-modal-color {
        display: flex;
        flex-wrap: wrap;
    }
    .local-mail-label-modal-color-option {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--local-mail-color-gray-fg);
        background-color: var(--local-mail-color-gray-bg);
    }

    .local-mail-label-modal-color-option:last-child {
        margin-right: 0;
    }
</style>
