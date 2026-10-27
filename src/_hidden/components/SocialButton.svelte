<script lang="ts">
  interface Props {
    href: string;
    label: string;
    icon: string;
  }

  let { href, label, icon }: Props = $props();
</script>

<a href={href} target="_blank" rel="noopener noreferrer" class="cmd-btn" aria-label={label}>
  <span class="cmd-prompt" aria-hidden="true">$</span>
  <span class="cmd-open" aria-hidden="true">open</span>
  <span class="cmd-label">{label.toLowerCase()}</span>
  <span class="cmd-arrow" aria-hidden="true">↗</span>
</a>

<style>
  .cmd-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    background: var(--bg-raised);
    border: 1px solid var(--border);
    border-radius: 4px;
    color: var(--text);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    letter-spacing: 0.02em;
    border-bottom: 1px solid var(--border);
    transition:
      background 0.15s,
      border-color 0.15s,
      color 0.15s,
      box-shadow 0.15s,
      transform 0.1s;
    position: relative;
    overflow: hidden;
  }

  .cmd-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, var(--green-faint), transparent);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .cmd-btn:hover::before { opacity: 1; }

  .cmd-btn:hover {
    border-color: var(--green-dim);
    color: var(--green);
    box-shadow: 0 0 0 1px var(--green-faint), inset 0 0 12px var(--green-faint);
    transform: translateX(3px);
    border-bottom: 1px solid var(--green-dim);
  }

  .cmd-btn:active {
    transform: translateX(1px);
  }

  .cmd-prompt {
    color: var(--green-dim);
    font-weight: 600;
    flex-shrink: 0;
    opacity: 0.7;
  }

  .cmd-open {
    color: var(--amber);
    font-size: 0.78rem;
    opacity: 0.75;
    flex-shrink: 0;
  }

  .cmd-label {
    flex: 1;
    color: inherit;
  }

  .cmd-arrow {
    font-size: 0.75rem;
    opacity: 0.4;
    transition: opacity 0.15s, transform 0.15s;
    flex-shrink: 0;
  }

  .cmd-btn:hover .cmd-arrow {
    opacity: 1;
    transform: translate(2px, -2px);
  }
</style>
