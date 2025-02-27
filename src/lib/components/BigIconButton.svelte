<script lang="ts">
  import FaIcon from "./FaIcon.svelte";

  export let icon: string;
  export let text: string;
  export let color: string;
  export let onClick: () => void;

  export let active: boolean = false;
</script>

<button style={`color: ${color};`} class:active on:click={onClick}>
  <FaIcon {icon} size="4em" />
  <div class="btn-text">
    {text}
  </div>
</button>

<style>
  button {
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
    border-radius: 12px;
    padding: 4px;
  }

  button.active {
    background-color: var(--secondary-50);
    color: var(--highlight) !important;
  }

  .btn-text {
    color: var(--primary);
    font-size: 1.2rem;
    font-weight: 800;
    margin-top: 0.3em;
  }

  button.active .btn-text,
  button:hover:not(.active),
  button:hover .btn-text {
    color: var(--highlight) !important;
  }
</style>
