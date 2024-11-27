import { useForm } from "react-hook-form";
import "./body-temp.css";
import { Temperature, TemperatureSchema } from "@/models";
import { z, ZodError } from "zod";

type Props = {
  data?: Temperature;
  tempModal: boolean;
  closeTempModal: () => void;
};

const postTemperature = async (temperature: Temperature) => {
  const response = await fetch("http://localhost:3000/temperatures", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ temperature }),
  });
  return response.json();
};

export const BodyTemp = (props: Props) => {
  const submitTemp = async () => {
    try {
      const newTemperatureRecord: Temperature = {
        id: 0,
        temperature: 36.5,
        timestamp: new Date().toISOString(),
        // saturation: 98,
        // symptoms: "none",
        // respiratoryRate: 65,
        // comment: "none",
      };

      await postTemperature(newTemperatureRecord);
      props.closeTempModal();
      window.location.reload();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.errors);
      }
    }
  };

  const form = useForm();

  return (
    <dialog id="bodyTempModal" className="dialog-modal" open={props.tempModal}>
      <div className="dialog-box-modal">
        <div className="dialog-box-title">
          <h1>Body Temperature</h1>
        </div>
        <form onSubmit={form.handleSubmit(submitTemp)}>
          <div
            id="dialog-box-modal-content-tempetature"
            className="dialog-box-modal-content"
          >
            <input id="tempTime" type="datetime-local" required />
            <input
              id="tempValue"
              value="36,6"
              inputMode="numeric"
              placeholder="Temperature, C"
              required
            />
            <input
              id="tempSaturation"
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
        </form>

        <div className="dialog-box-modal-btns">
          <button
            id="cancelTempButton"
            className="cancelButton"
            type="submit"
            onClick={props.closeTempModal}
          >
            Cancel
          </button>
          <button
            id="submitTempButton"
            className="submitButton"
            type="submit"
            onClick={submitTemp}
          >
            Ok
          </button>
        </div>
      </div>
    </dialog>
  );
};
