
    const audioPlayer = document.getElementById('audioPlayer');
    const speedRange = document.getElementById('speedRange');
    const speedValue = document.getElementById('speedValue');
    const preservePitchCheckbox = document.getElementById('preservePitch');
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.querySelector('.file-info');
    const fileName = document.getElementById('fileName');
    const speedControl = document.querySelector('.speed-control');
    const pitchControl = document.querySelector('.pitch-control');
    speedRange.addEventListener('input', function() {
        const speed = this.value;
        audioPlayer.playbackRate = speed;
        speedValue.textContent = speed;
    });
    preservePitchCheckbox.addEventListener('change', function() {
        const preservePitch = this.checked;
        audioPlayer.preservesPitch = preservePitch;
        audioPlayer.mozPreservesPitch = preservePitch;
        audioPlayer.webkitPreservesPitch = preservePitch;
    });
    audioPlayer.preservesPitch = preservePitchCheckbox.checked;
    audioPlayer.mozPreservesPitch = preservePitchCheckbox.checked;
    audioPlayer.webkitPreservesPitch = preservePitchCheckbox.checked;
    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            audioPlayer.src = fileURL;
            audioPlayer.style.display = 'block';
            fileInfo.style.display = 'block';
            speedControl.style.display = 'block';
            pitchControl.style.display = 'block';

            fileName.textContent = `${file.name}`;
            speedRange.value = 1;
            speedValue.textContent = 1;

            audioPlayer.load();
        } else {
            audioPlayer.style.display = 'none';
            fileInfo.style.display = 'none';
            speedControl.style.display = 'none';
            pitchControl.style.display = 'none';
            fileName.textContent = 'File not selected!';
        }
    });
    function updateUI() {
        if (!fileInput.files.length) {
            audioPlayer.style.display = 'none';
            fileInfo.style.display = 'none';
            speedControl.style.display = 'none';
            pitchControl.style.display = 'none';
        }
    }
    updateUI();
