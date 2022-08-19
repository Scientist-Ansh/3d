import { useState, useEffect, useRef } from 'react';
// model imports
import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';
import '@tensorflow/tfjs-backend-webgl';

const model = handPoseDetection.SupportedModels.MediaPipeHands;
const detectorConfig = {
  runtime: 'tfjs',
  maxHands: 1,
  modelType: 'full',
};

function getUserMediaSupported() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

const HandPoseDetection = ({ setPlanePosition }) => {
  const detector = useRef(null);
  const requestRef = useRef(null);
  const video = useRef(null);

  // Check if webcam access is supported

  useEffect(() => {
    async function loadDetector() {
      detector.current = await handPoseDetection.createDetector(
        model,
        detectorConfig
      );
      console.log('detector', detector.current);

      const constraints = {
        video: true,
      };

      if (getUserMediaSupported()) {
        // Activate the webcam stream.
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function (stream) {
            video.current.srcObject = stream;

            video.current.addEventListener('loadeddata', predictWebcam);
          });
      }
    }
    loadDetector();
  }, []);

  // Predict the pose of the hand in the webcam stream.
  async function predictWebcam() {
    console.log('predictWebcam', detector);

    if (detector.current) {
      const estimationConfig = { flipHorizontal: false };
      const hands = await detector.current.estimateHands(
        video.current,
        estimationConfig
      );

      console.log(hands, 'prediction');
      if (hands.length > 0) {
        if (hands[0].handedness === 'Right') {
          setPlanePosition((state) => {
            return [state[0], Math.max(-0.3, state[1] - 0.1), state[2]];
          });
        } else {
          setPlanePosition((state) => {
            return [state[0], Math.min(1.2, state[1] + 0.1), state[2]];
          });
        }
      }
    }
    requestRef.current = setTimeout(predictWebcam, 200);
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        opacity: 0,
      }}
    >
      <video
        ref={video}
        id="webcam"
        autoPlay
        muted
        width="640"
        height="480"
      ></video>
    </div>
  );
};

export default HandPoseDetection;
