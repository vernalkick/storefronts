
import styles from '../styles/styles.module.css'

export default function Home() {
  var test = `
  <style>
    model-viewer {
      width: calc(100vw - 2rem);
      height: 100vw;
      margin-top: -35vw;
    }
  </style>
  
  <!-- Import the component -->
  <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
  
  <!-- Use it like any other HTML element -->
  <model-viewer src="/logo.glb" ar ar-modes="webxr scene-viewer quick-look" environment-image="/music_hall_01_1k.hdr" seamless-poster shadow-intensity="1" camera-controls enable-pan camera-orbit="-1.758deg 92.23deg auto" auto-rotate></model-viewer>`
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Storefronts</h1>
      <img src="ty.svg" className={styles.ty} />
      
      <div dangerouslySetInnerHTML={{ __html: test }} />
      <div className={styles.text}>
        <p>Thank you for making it possible for our merchants to build a home on the internet that they can be proud of.</p> 
        
        <p>Keep up the great work — Storefronts wouldn’t be the same without you!</p>
        
        <p className={styles.signature}>– Vanessa, Rodney, Brad, Beth, Kevin, Phil</p>
      </div>
    </div>

  )
}
