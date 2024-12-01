import { useLayoutEffect, useRef } from "react";
import { useForm } from "react-hook-form";

type Props = {
  closeWeigthHeigthModal: () => void;
};

export const BodyWeigthHeight = (props: Props) => {
  const submitWeigthHeight = async (data: any) => {
    console.log("Data", data);
  };

  const dialog = useRef<HTMLDialogElement>();
  useLayoutEffect(() => {
    if (dialog.current) {
      dialog.current.showModal();
    }
  }, [dialog]);

  const form = useForm({});

  return (
    <dialog id="bodyWeigthHeightModal" className="dialog-modal" ref={dialog}>
      <div className="dialog-box-modal">
        <div className="dialog-box-title">
          <h1>Body Weigth / Height</h1>
        </div>
        <form onSubmit={form.handleSubmit(submitWeigthHeight)}>
          <div className="flex flex-col gap-4 p-4">
            <input
              id="tempTime"
              type="datetime-local"
              inputMode="numeric"
              placeholder="Weight (kg)"
              required
            />
            <input
              id="heightValue"
              type="number"
              inputMode="numeric"
              placeholder="Height (cm)"
              required
            />
            <input
              id="bmiIndex"
              type="number"
              placeholder="IBody Mass Index (BMI)"
              disabled
            />
            <div className="tempComment">
              <label style={{ fontSize: "small" }}>Comment</label>
              <input id="weigthHeightComment" type="text" placeholder="Text" />
            </div>
          </div>
        </form>
        <div className="dialog-box-modal-btns">
          <button
            id="cancelWeigthHeightButton"
            className="cancelButton"
            type="submit"
            onClick={props.closeWeigthHeigthModal}
          >
            Cancel
          </button>
          <button
            id="submitWeigthHeightButton"
            className="submitButton"
            type="submit"
            onClick={form.handleSubmit(submitWeigthHeight)}
          >
            Ok
          </button>
        </div>
      </div>
    </dialog>
  );
};
