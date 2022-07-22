
import styles from '../styles/styles.module.css'

export default function Home() {
  var test = `
  <style>
    model-viewer {
      width: 100%;
      height: 100%;
      margin-top: -40%;
    }
    
    model-viewer#reveal {
      --poster-color: transparent;
    }
    
    model-viewer::part(default-progress-bar) {
      display: none;
    }
  </style>
  
  <!-- Import the component -->
  <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
  
  <!-- Use it like any other HTML element -->
  <model-viewer src="/logo.glb" ar ar-modes="webxr scene-viewer quick-look" environment-image="/music_hall_01_1k.hdr" seamless-poster shadow-intensity="1" camera-controls enable-pan camera-orbit="-1.758deg 92.23deg auto" auto-rotate min-camera-orbit="auto 92.23deg auto" max-camera-orbit="auto 92.23deg auto" disable-zoom auto-rotate-delay="0" rotation-per-second="-100%"></model-viewer>`
  
  return (
    <div className={styles.wrap}>
    <img src="gradient.png" className={styles.gradient} />
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.badge}>
          <img src="bag.svg" />
          <img src="rotating-text.svg" className={styles.rotating} />
        </div>
        <img src="ty.svg" className={styles.ty} />
      </div>
      
      <div className={styles.model} dangerouslySetInnerHTML={{ __html: test }} />
      <div className={styles.text}>
        <p className={styles.lead}>Thank you for making it possible for our merchants to build a home on the internet that they can be proud of.</p> 
        
        <p className={styles.keep}>Keep up the great work — Storefronts wouldn’t be the same without you!</p>
        
        <img src="/signatures.svg" className={styles.signature} />
      </div>
    </div>
    <div className={styles.pattern_container}>
      <img src="/pattern-full.svg" className={styles.pattern} />
    </div>
    </div>
  )
}
