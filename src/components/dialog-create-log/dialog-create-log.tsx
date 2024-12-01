import { useLayoutEffect, useRef } from "react";
import "./dialog-create-log.css";
import Pills from "../../assets/img/pills-solid.svg";
import Thermometer from "../../assets/img/thermometer-solid.svg";
import Weight from "../../assets/img/weight-scale-solid.svg";

type Props = {
  setDialogOpen: (v: boolean) => void;
};

export const DialogCreateLog = (props: Props) => {
  const dialog = useRef<HTMLDialogElement>();
  useLayoutEffect(() => {
    if (dialog.current) {
      dialog.current.showModal();
    }
  }, [dialog]);

  return (
    <dialog id="addLogModal" className="dialog-add-log" ref={dialog}>
      <div className="dialog-box">
        <div className="dialog-box-title">
          <h1>Add log</h1>
          <button
            id="addLogModalCancel"
            onClick={() => {
              props.setDialogOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="dialog-box-content">
          <div id="bodyTempLog" className="dialog-box-content-temp">
            <img src={Thermometer} alt="thermometer"></img>
            <h4>Body Temperature</h4>
          </div>
          <div
            id="bodyWeigthHeightLog"
            className="dialog-box-content-weigth-heigth"
          >
            <img src={Weight} alt="weight/height"></img>
            <h4>Body Weight/Height</h4>
          </div>
          <div id="medicationLog" className="dialog-box-content-medication">
            <img src={Pills} alt="medication"></img>
            <h4>Medication</h4>
          </div>
        </div>
        <div className="dialog-box-footer"></div>
      </div>
    </dialog>
  );
};
