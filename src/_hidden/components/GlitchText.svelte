<script lang="ts">
  interface Props {
    text: string;
    size?: string;
  }

  let { text, size = '2rem' }: Props = $props();
</script>

<span class="phosphor-text" style="font-size: {size}">
  {text}
</span>

<style>
  .phosphor-text {
    font-family: var(--font-mono);
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--green);
    text-shadow:
      0 0 4px var(--green-glow),
      0 0 12px rgba(57, 255, 20, 0.25),
      0 0 30px rgba(57, 255, 20, 0.1);
    animation: flicker 8s step-start infinite;
  }

  @keyframes flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      text-shadow:
        0 0 4px var(--green-glow),
        0 0 12px rgba(57, 255, 20, 0.25),
        0 0 30px rgba(57, 255, 20, 0.1);
      opacity: 1;
    }
    20%, 24%, 55% {
      text-shadow: none;
      opacity: 0.85;
    }
  }
</style>
