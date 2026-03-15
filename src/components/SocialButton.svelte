<script lang="ts">
  interface Props {
    href: string;
    label: string;
    icon: string;
  }
  
  let { href, label, icon }: Props = $props();
</script>

<a href={href} target="_blank" rel="noopener noreferrer" class="social-btn" aria-label={label}>
  <span class="icon">{icon}</span>
  <span class="label">{label}</span>
</a>

<style>
  .social-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: rgba(0, 240, 255, 0.05);
    border: 1px solid rgba(0, 240, 255, 0.3);
    border-radius: 8px;
    color: #e0e0e0;
    text-decoration: none;
    font-family: 'Courier New', monospace;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .social-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  .social-btn:hover::before {
    left: 100%;
  }
  
  .social-btn:hover {
    background: rgba(0, 240, 255, 0.1);
    border-color: #00f0ff;
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
    transform: translateY(-2px);
  }
  
  .icon {
    font-size: 1.5rem;
  }
  
  .label {
    font-size: 1rem;
    letter-spacing: 0.05em;
  }
</style>
