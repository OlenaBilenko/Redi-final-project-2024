import { useState } from "react";
import { DialogCreateLog } from "../dialog-create-log/dialog-create-log";
import "./log-modal-button.css";

export const AddLogModalButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <div className="add-button">
        <button
          id="buttonAddLog"
          className="btn-log"
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          +
        </button>
      </div>
      {dialogOpen && <DialogCreateLog setDialogOpen={setDialogOpen} />}
    </>
  );
};
