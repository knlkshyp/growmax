const scanRegionCamera = document.getElementById('scanTypeCamera');
const scanRegionFile = document.getElementById('scanTypeFile');
const qrFileInput = document.getElementById('qrInputFile');
const feedbackContainer = document.getElementById('feedback');
// declaration of html5 qrcode
const html5QrCode = new Html5Qrcode("qr");
var codesFound = 0;
var lastMessageFound = null;
const setPlaceholder = () => {
    const placeholder = document.createElement("div");
    placeholder.innerHTML = "";
    placeholder.className = "placeholder";
    document.getElementById('qr').appendChild(placeholder);
}
const setFeedback = message => {
    feedbackContainer.innerHTML = message;
}
const qrCodeSuccessCallback = qrCodeMessage => {
    if (lastMessageFound === qrCodeMessage.toLocaleLowerCase()) {
        return;
    }
    ++codesFound;
    lastMessageFound = qrCodeMessage.toLocaleLowerCase();
    document.getElementById("outletCode").value = lastMessageFound;
    stopScan();
}
const videoErrorCallback = message => {
    setFeedback(`Video Error, error = ${message}`);
}
const classExists = (element, needle) => {
    const classList = element.classList;
    for (var i = 0; i < classList.length; i++) {
        if (classList[i] == needle) {
            return true;
        }
    }
    return false;
}
const addClass = (element, className) => {
    if (!element || !className) throw "Both element and className mandatory";
    if (classExists(element, className)) return;
    element.classList.add(className);
};
const removeClass = (element, className) => {
    if (!element || !className) throw "Both element and className mandatory";
    if (!classExists(element, className)) return;
    element.classList.remove(className);
}
const onScanTypeSelectionChange = event => {
    const setupCameraOption = () => {
        html5QrCode.clear();
        setPlaceholder();
        qrFileInput.value = "";
        qrFileInput.disabled = true;
        removeClass(scanRegionCamera, "disabled");
        addClass(scanRegionFile, "disabled");
    }
    setupCameraOption();
}
document.querySelectorAll("input[name='scan-type']").forEach(input => {
    input.addEventListener('change', onScanTypeSelectionChange);
});
openCamera = (element) => {
    requestPermission();
};
requestPermission = () => {
    Html5Qrcode.getCameras().then(cameras => {
        if (cameras.length == 0) {
            return setFeedback("Error: Zero cameras found in the device");
        }
        startScan(cameras);
    }).catch(err => {
        setFeedback(`Error: Unable to query any cameras. Reason: ${err}`);
    });
}

startScan = (cameras) => {
    const cameraId = cameras[0].id;
    html5QrCode.start(
        cameraId, {
        fps: 10,
        qrbox: 250
    },
        qrCodeSuccessCallback).catch(error => {
            videoErrorCallback(error);
        });
}

stopScan = () => {
    html5QrCode.stop().then(ignore => {
        setPlaceholder();
    }).catch(err => {
        setFeedback("");
    });
}