import { useForm } from "react-hook-form";

type Props = {
  closeWeigthHeigthModal: () => void;
};

export const BodyWeigthHeight = () => {
  return (
    <dialog id="bodyWeigthHeightModal" className="dialog-modal" open={true}>
      <div className="dialog-box-modal">
        <div className="dialog-box-title">
          <h1>Body Weigth / Height</h1>
        </div>
        <form onSubmit={form.handleSubmit(submitWeigthHeight)}>
          <div
            id="dialog-box-modal-content-weight-height"
            className="dialog-box-modal-content"
          >
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
            onClick={form.handleSubmit(submitWeigthHeigth)}
          >
            Ok
          </button>
        </div>
      </div>
    </dialog>
  );
};
