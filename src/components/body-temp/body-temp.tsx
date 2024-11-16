import "./body-temp.css";
// import { useState } from "react";

type Props = {
  tempModal: boolean;
  toggleTempModal: () => void;
};

export const BodyTemp = (props: Props) => {
  // const [tempModal, setTempModal] = useState(true);

  // const toggleTempModal = () => {
  //   setTempModal(!tempModal);
  // };

  return (
    <dialog id="bodyTempModal" className="dialog-modal" open={props.tempModal}>
      <div className="dialog-box-modal">
        <div className="dialog-box-title">
          <h1>Body Temperature</h1>
        </div>
        <div
          id="dialog-box-modal-content-tempetature"
          className="dialog-box-modal-content"
        >
          <input id="tempTime" type="datetime-local" required />
          <input
            id="tempValue"
            type="number"
            min="35"
            max="42"
            step="0.1"
            value="36.6"
            inputMode="numeric"
            placeholder="Temperature, C"
            required
          />
          <input
            id="tempSaturation"
            type="number"
            min="0"
            max="100"
            step="1"
            inputMode="numeric"
            placeholder="Saturation, %"
          />
          <input
            id="tempSymptoms"
            list="browser"
            name="symptoms"
            placeholder="Symptoms"
          />
          <input
            id="respFrequency"
            type="number"
            inputMode="numeric"
            placeholder="Respiratory frequency"
          />
          <div className="tempComment">
            <label style={{ fontSize: "small" }}>Comment</label>
            <input id="tempComment" type="text" placeholder="Text" />
          </div>
        </div>
        <div className="dialog-box-modal-btns">
          <button
            id="cancelTempButton"
            className="cancelButton"
            type="submit"
            onClick={props.toggleTempModal}
          >
            Cancel
          </button>
          <button
            id="submitTempButton"
            className="submitButton"
            type="submit"
            onClick={props.toggleTempModal}
          >
            Ok
          </button>
        </div>
      </div>
    </dialog>
  );
};
