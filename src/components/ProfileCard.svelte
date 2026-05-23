<script lang="ts">
  import SocialButton from './SocialButton.svelte';

  interface Social {
    href: string;
    label: string;
    icon: string;
  }

  const socials: Social[] = [
    { href: 'https://github.com/luxus',        label: 'GitHub',    icon: '' },
    { href: 'https://linkedin.com/in/luxus',   label: 'LinkedIn',  icon: '' },
    { href: 'https://twitter.com/luxus',       label: 'Twitter',   icon: '' },
    { href: 'https://instagram.com/luxus',     label: 'Instagram', icon: '' },
  ];

  /* Boot-sequence lines rendered progressively */
  const bootLines = [
    { prefix: 'user',   value: 'kai.loehnert' },
    { prefix: 'handle', value: '@luxus' },
    { prefix: 'role',   value: 'cybersecurity sales' },
    { prefix: 'loc',    value: 'zürich, switzerland 🇨🇭' },
    { prefix: 'origin', value: 'german 🇩🇪 × thai 🇹🇭' },
    { prefix: 'focus',  value: 'secure infrastructure & ai' },
  ];

  let visibleCount = $state(0);
  let showLinks = $state(false);
  let showCursor = $state(true);

  $effect(() => {
    let i = 0;
    const step = () => {
      if (i < bootLines.length) {
        visibleCount = ++i;
        setTimeout(step, 120 + Math.random() * 60);
      } else {
        setTimeout(() => { showLinks = true; }, 300);
      }
    };
    const delay = setTimeout(step, 400);
    return () => clearTimeout(delay);
  });
</script>

<div class="term-window profile-terminal">
  <!-- titlebar -->
  <div class="term-titlebar">
    <span class="term-dot close" aria-hidden="true"></span>
    <span class="term-dot min"   aria-hidden="true"></span>
    <span class="term-dot max"   aria-hidden="true"></span>
    <span class="term-title">kai@luxus: ~</span>
  </div>

  <div class="term-body">
    <!-- avatar row -->
    <div class="avatar-row">
      <div class="avatar-wrap">
        <img src="/profile.jpg" alt="Kai Löhnert" class="avatar" width="80" height="80" />
      </div>
      <div class="boot-output" aria-live="polite">
        {#each bootLines.slice(0, visibleCount) as line, i}
          <div class="boot-line">
            <span class="field-key">{line.prefix}</span>
            <span class="field-sep">:</span>
            <span class="field-val">{line.value}</span>
          </div>
        {/each}
        {#if visibleCount < bootLines.length}
          <span class="cursor" aria-hidden="true"></span>
        {/if}
      </div>
    </div>

    {#if showLinks}
      <div class="divider" aria-hidden="true">
        <span class="divider-line"></span>
        <span class="divider-label">$ open --links</span>
        <span class="divider-line"></span>
      </div>
      <nav class="social-grid" aria-label="Social links">
        {#each socials as social}
          <SocialButton href={social.href} label={social.label} icon={social.icon} />
        {/each}
      </nav>
    {/if}
  </div>
</div>

<style>
  .profile-terminal {
    width: 100%;
    max-width: 560px;
  }

  .term-body {
    padding: 1.25rem 1.5rem 1.5rem;
  }

  /* Avatar + boot output */
  .avatar-row {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }

  .avatar-wrap {
    flex-shrink: 0;
    position: relative;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    object-fit: cover;
    border: 1px solid var(--border);
    display: block;
    filter: saturate(0.85) contrast(1.05);
    box-shadow: 0 0 18px rgba(57, 255, 20, 0.1);
  }

  /* Boot output lines */
  .boot-output {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding-top: 0.1rem;
    min-height: 6.5rem;
  }

  .boot-line {
    display: flex;
    gap: 0;
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .field-key {
    color: var(--text-muted);
    min-width: 6.5ch;
    flex-shrink: 0;
    font-size: 0.75rem;
    letter-spacing: 0.04em;
  }

  .field-sep {
    color: var(--border);
    margin: 0 0.5rem;
  }

  .field-val {
    color: var(--text-bright);
    font-size: 0.8rem;
  }

  /* Inline blinking cursor */
  .cursor {
    display: inline-block;
    width: 0.55em;
    height: 0.85em;
    background: var(--green);
    vertical-align: text-bottom;
    border-radius: 1px;
    box-shadow: 0 0 6px var(--green-glow);
    animation: blink 1.1s step-start infinite;
    margin-top: 0.25rem;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  /* Divider */
  .divider {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1.25rem 0 1rem;
  }

  .divider-line {
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .divider-label {
    font-size: 0.7rem;
    color: var(--text-muted);
    white-space: nowrap;
    letter-spacing: 0.04em;
  }

  /* Social grid — 2 columns */
  .social-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  @media (max-width: 440px) {
    .avatar-row { flex-direction: column; align-items: center; }
    .boot-output { align-items: center; }
    .social-grid { grid-template-columns: 1fr; }
  }
</style>
