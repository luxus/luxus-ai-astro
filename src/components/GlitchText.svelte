<script lang="ts">
  interface Props {
    text: string;
    size?: string;
  }
  
  let { text, size = "2rem" }: Props = $props();
</script>

<span class="glitch" data-text={text} style="font-size: {size}">
  {text}
</span>

<style>
  .glitch {
    position: relative;
    color: #00f0ff;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  
  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .glitch::before {
    animation: glitch-1 0.3s infinite linear alternate-reverse;
    color: #ff00ff;
    z-index: -1;
  }
  
  .glitch::after {
    animation: glitch-2 0.3s infinite linear alternate-reverse;
    color: #00f0ff;
    z-index: -2;
  }
  
  @keyframes glitch-1 {
    0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
    20% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 2px); }
    40% { clip-path: inset(40% 0 40% 0); transform: translate(2px, -2px); }
    60% { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 0); }
    80% { clip-path: inset(80% 0 0% 0); transform: translate(2px, 2px); }
  }
  
  @keyframes glitch-2 {
    0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
    20% { clip-path: inset(60% 0 20% 0); transform: translate(2px, -2px); }
    40% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 2px); }
    60% { clip-path: inset(20% 0 60% 0); transform: translate(2px, 0); }
    80% { clip-path: inset(0% 0 80% 0); transform: translate(-2px, -2px); }
  }
</style>
