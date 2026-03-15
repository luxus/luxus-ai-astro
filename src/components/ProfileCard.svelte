<script lang="ts">
  import GlitchText from './GlitchText.svelte';
  import SocialButton from './SocialButton.svelte';
  
  interface Social {
    href: string;
    label: string;
    icon: string;
  }
  
  const socials: Social[] = $state([
    { href: 'https://github.com/luxus', label: 'GitHub', icon: '⚡' },
    { href: 'https://linkedin.com/in/luxus', label: 'LinkedIn', icon: '💼' },
    { href: 'https://twitter.com/luxus', label: 'Twitter', icon: '🐦' },
    { href: 'https://instagram.com/luxus', label: 'Instagram', icon: '📸' },
  ]);
</script>

<div class="profile-card">
  <div class="avatar-container">
    <div class="avatar-glow"></div>
    <img src="/profile.jpg" alt="Kai Löhnert" class="avatar" />
  </div>
  
  <h1 class="name">
    <GlitchText text="KAI LÖHNERT" size="2.5rem" />
  </h1>
  
  <p class="handle">@luxus</p>
  
  <p class="bio">
    Cybersecurity Sales 🇨🇭 Switzerland<br />
    Half German 🇩🇪 Half Thai 🇹🇭<br />
    Building the future, one secure connection at a time
  </p>
  
  <div class="social-links">
    {#each socials as social}
      <SocialButton href={social.href} label={social.label} icon={social.icon} />
    {/each}
  </div>
</div>

<style>
  .profile-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3rem 2rem;
    max-width: 500px;
    width: 100%;
  }
  
  .avatar-container {
    position: relative;
    margin-bottom: 2rem;
  }
  
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #00f0ff;
    position: relative;
    z-index: 2;
  }
  
  .avatar-glow {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: linear-gradient(45deg, #00f0ff, #ff00ff);
    opacity: 0.5;
    filter: blur(20px);
    animation: pulse 3s ease-in-out infinite;
    z-index: 1;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.7; }
  }
  
  .name {
    margin: 0 0 0.5rem 0;
  }
  
  .handle {
    color: #ff00ff;
    font-family: 'Courier New', monospace;
    font-size: 1.2rem;
    margin: 0 0 1.5rem 0;
    letter-spacing: 0.1em;
  }
  
  .bio {
    color: #a0a0a0;
    font-size: 1rem;
    line-height: 1.8;
    margin: 0 0 2.5rem 0;
  }
  
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
</style>
