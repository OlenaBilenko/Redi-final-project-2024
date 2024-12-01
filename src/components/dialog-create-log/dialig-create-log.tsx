export const DialogCreateLog = () => {
  return (
    <dialog id="addLogModal" className="dialog-add-log">
      <div className="dialog-box">
        <div className="dialog-box-title">
          <h1>Add log</h1>
          <button id="addLogModalCancel">X</button>
        </div>
        <div className="dialog-box-content">
          <div id="bodyTempLog" className="dialog-box-content-temp">
            <img
              src="./log-modal/img/thermometer-solid.svg"
              alt="thermometer"
            ></img>
            <h4>Body Temperature</h4>
          </div>
          <div
            id="bodyWeigthHeightLog"
            className="dialog-box-content-weigth-heigth"
          >
            <img
              src="./log-modal/img/weight-scale-solid.svg"
              alt="weight/height"
            ></img>
            <h4>Body Weight/Height</h4>
          </div>
          <div id="medicationLog" className="dialog-box-content-medication">
            <img src="./log-modal/img/pills-solid.svg" alt="medication"></img>
            <h4>Medication</h4>
          </div>
        </div>
        <div className="dialog-box-footer"></div>
      </div>
    </dialog>
  );
};
