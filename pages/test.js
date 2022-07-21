

export default function Home() {
  var test = `
  <style>
    model-viewer {
      width: 100%;
      height: 500px;  
    }
  </style>
  
  <!-- Import the component -->
  <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
  
  <!-- Use it like any other HTML element -->
  <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" src="/logo.glb" ar ar-modes="webxr scene-viewer quick-look" environment-image="/music_hall_01_1k.hdr" poster="https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp" seamless-poster shadow-intensity="1" camera-controls enable-pan camera-orbit="-1.758deg 92.23deg auto" auto-rotate></model-viewer>`
  
  return (
    <>
    <img src="ty.svg" />
    <h1>Thank you for being a part of the team</h1>
    <div dangerouslySetInnerHTML={{ __html: test }} />
    </>

  )
}
