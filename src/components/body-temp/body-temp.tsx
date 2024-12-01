import { Controller, useForm } from "react-hook-form";
import "./body-temp.css";
import { Temperature, TemperatureSchema } from "@/models";
import { ZodError } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useLayoutEffect, useRef } from "react";
import DatePicker from "react-datepicker";

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

const patchTemperature = async (temperature: Temperature, id: number) => {
  const response = await fetch(`http://localhost:3000/temperatures/${id}`, {
    method: "PATCH",
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
      if (props.data) {
        await patchTemperature(temp, props.data.id);
      } else {
        await postTemperature(temp);
      }
      props.closeTempModal();
      window.location.reload();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.errors);
      }
    }
  };

  const defaultValues: Partial<Temperature> = props.data
    ? { ...props.data, timestamp: new Date(props.data.timestamp) }
    : {
        timestamp: new Date(),
      };

  const form = useForm<Temperature>({
    resolver: zodResolver(TemperatureSchema),
    defaultValues: defaultValues,
  });
  const errors = form.formState.errors;

  const dialog = useRef<HTMLDialogElement>();
  useLayoutEffect(() => {
    if (dialog.current) {
      dialog.current.showModal();
    }
  }, [dialog]);

  return (
    <dialog id="bodyTempModal" className="dialog-modal" ref={dialog}>
      <div className="dialog-box-modal">
        <div className="dialog-box-title">
          <h1 className="font-semibold leading-none tracking-tight">
            Body Temperature
          </h1>
        </div>
        <form onSubmit={form.handleSubmit(submitTemp)}>
          <div className="flex w-full flex-col">
            <div className="text-white pt-4">Date and time</div>
            <Controller
              control={form.control}
              name="timestamp"
              render={({ field }) => {
                console.log("value", field.value);
                return (
                  <DatePicker
                    showTimeSelect
                    dateFormat="dd.MM.YYYY HH:mm"
                    placeholderText="Select date"
                    onChange={(date) => field.onChange(date)}
                    selected={new Date(field.value)}
                  />
                );
              }}
            />
            {errors.timestamp && (
              <p className="form-error">{errors.timestamp?.message}</p>
            )}
            <div className="text-white pt-4">Temperature C</div>
            <input
              type="number"
              inputMode="numeric"
              placeholder="Temperature, C"
              required
              {...form.register("temperature")}
            />
            {errors.temperature && (
              <p className="form-error pt-4">{errors.temperature?.message}</p>
            )}
            <div className="text-white pt-4">Saturation</div>
            <input
              id="tempSaturation"
              inputMode="numeric"
              placeholder="Saturation, %"
              {...form.register("saturation")}
            />
            {errors.saturation && (
              <p className="form-error">{errors.saturation?.message}</p>
            )}
            <div className="text-white  pt-4">Symptoms</div>
            <input
              id="tempSymptoms"
              list="browser"
              placeholder="Symptoms"
              {...form.register("symptoms")}
            />
            {errors.symptoms && (
              <p className="form-error">{errors.symptoms?.message}</p>
            )}
            <div className="text-white pt-4">Respiratory requency</div>
            <input
              id="respFrequency"
              type="number"
              inputMode="numeric"
              placeholder="Respiratory frequency"
              {...form.register("respiratoryFrequency")}
            />
            {errors.respiratoryFrequency && (
              <p className="form-error">
                {errors.respiratoryFrequency?.message}
              </p>
            )}

            <div className="tempComment mt-4">
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
