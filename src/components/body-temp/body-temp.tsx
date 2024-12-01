import { useForm } from "react-hook-form";
import "./body-temp.css";
import { Temperature, TemperatureSchema } from "@/models";
import { z, ZodError } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLayoutEffect, useRef } from "react";

type Props = {
  data?: Temperature;
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
  const submitTemp = async (temp: Temperature) => {
    try {
      console.log("Data", temp);
      // const newTemperatureRecord: Temperature = {
      //   id: 0,
      //   temperature: 36.5,
      //   timestamp: new Date().toISOString(),
      //   // saturation: 98,
      //   // symptoms: "none",
      //   // respiratoryRate: 65,
      //   // comment: "none",
      // };

      await postTemperature(temp);
      props.closeTempModal();
      window.location.reload();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.errors);
      }
    }
  };

  const defaultValues: Partial<Temperature> = props.data
    ? props.data
    : {
        timestamp: new Date().toISOString,
      };

  console.log("defaults", defaultValues, "data", props.data);
  const form = useForm<Temperature>({
    resolver: zodResolver(TemperatureSchema),
    defaultValues: defaultValues,
  });
  const errors = form.formState.errors;
  console.log("errors", errors);

  const dialog = useRef<HTMLDialogElement>();
  useLayoutEffect(() => {
    dialog.current.showModal();
  }, [dialog]);

  return (
    <dialog id="bodyTempModal" className="dialog-modal" ref={dialog}>
      <div className="dialog-box-modal">
        <div className="dialog-box-title">
          <h1>Body Temperature</h1>
        </div>
        <form onSubmit={form.handleSubmit(submitTemp)}>
          <div
            id="dialog-box-modal-content-tempetature"
            className="dialog-box-modal-content"
          >
            <input
              id="tempTime"
              type="datetime-local"
              required
              {...form.register("timestamp", { valueAsDate: true })}
            />
            {errors.timestamp && (
              <p className="dialog-box-title">{errors.timestamp?.message}</p>
            )}
            <input
              id="tempValue"
              type="number"
              inputMode="numeric"
              placeholder="Temperature, C"
              required
              {...form.register("temperature")}
            />
            {errors.temperature && (
              <p className="dialog-box-title">{errors.temperature?.message}</p>
            )}

            <input
              id="tempSaturation"
              inputMode="numeric"
              placeholder="Saturation, %"
              {...form.register("saturation")}
            />
            {errors.saturation && (
              <p className="dialog-box-title">{errors.saturation?.message}</p>
            )}
            <input
              id="tempSymptoms"
              list="browser"
              placeholder="Symptoms"
              {...form.register("symptoms")}
            />
            {errors.symptoms && (
              <p className="dialog-box-title">{errors.symptoms?.message}</p>
            )}
            <input
              id="respFrequency"
              type="number"
              inputMode="numeric"
              placeholder="Respiratory frequency"
              {...form.register("respiratoryRate")}
            />
            {errors.respiratoryRate && (
              <p className="dialog-box-title">
                {errors.respiratoryRate?.message}
              </p>
            )}
            <div className="tempComment">
              <label style={{ fontSize: "small" }}>Comment</label>
              <input
                id="tempComment"
                type="text"
                placeholder="Text"
                {...form.register("comment")}
              />
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
            onClick={form.handleSubmit(submitTemp)}
          >
            Ok
          </button>
        </div>
      </div>
    </dialog>
  );
};
