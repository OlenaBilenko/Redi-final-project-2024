import { useState } from "react";
import { DialogCreateLog } from "../dialog-create-log/dialog-create-log";
import "./log-modal-button.css";

type Props = {
  setDialogOpen: (v: boolean) => void;
  openTempModal: () => void;
  closeModal: () => void;
  openWeigthHeigthModal: () => void;
  openMedicationModal: () => void;
};

export const AddLogModalButton = (props: Props) => {
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
      {dialogOpen && (
        <DialogCreateLog
          setDialogOpen={setDialogOpen}
          openTempModal={props.openTempModal}
          closeModal={props.closeModal}
          openWeigthHeigthModal={props.openWeigthHeigthModal}
          openMedicationModal={props.openMedicationModal}
        />
      )}
    </>
  );
};
