export function atividade (){
  
    const snapshotButton = document.querySelector<HTMLButtonElement>('button#snapshot');
    const filterSelect = document.querySelector<HTMLSelectElement>('select#filter');
    const video = document.querySelector<HTMLVideoElement>('video')!;
    const canvas = document.querySelector<HTMLCanvasElement>('canvas');
    let videoStream : MediaStream

    if(canvas && video && filterSelect && snapshotButton){
      console.log('entrou')
      canvas.width = 640;
      canvas.height = 480;  


        snapshotButton.onclick = function () {
          canvas.className = filterSelect.value;
          canvas.getContext('2d')!.drawImage(video, 0, 0, canvas.width, canvas.height);
        };    


      
        filterSelect.onchange = function () {
          video.className = filterSelect.value;
        };    

      
      const constraints = {
        audio: false,
        video: true,
        
      };
      console.log('entrou')
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        videoStream = stream; // make stream available to browser console
        video.srcObject = stream;

        video.play()
      }).catch((error) => {
        console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
      });
    }
}
    

    

    