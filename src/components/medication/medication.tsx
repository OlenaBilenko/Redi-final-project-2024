import { useLayoutEffect, useRef } from "react";
import { useForm } from "react-hook-form";

type Props = {
  closeMedicationModal: () => void;
};

export const Medication = (props: Props) => {
  const submitMedication = async (data: any) => {
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
    <dialog id="medicationModal" className="dialog-modal" ref={dialog}>
      <div className="dialog-box-modal">
        <div className="dialog-box-title">
          <h1>Add Medication</h1>
        </div>
        <form onSubmit={form.handleSubmit(submitMedication)}>
          <div
            id="dialog-box-modal-content-medication"
            className="dialog-box-modal-content"
          >
            <input
              id="nameMedicationModal"
              type="text"
              placeholder="Name of Medication"
              required
            />
            <input
              id="dosageMedicationModal"
              type="number"
              inputMode="numeric"
              placeholder="Dosage"
              required
            />
            <input
              id="quantityMedicationModal"
              type="number"
              inputMode="numeric"
              placeholder="Quantity"
              required
            />
            <div className="tempComment">
              <label style={{ fontSize: "small" }}>Comment</label>
              <input id="tempComment" type="text" placeholder="Text" />
            </div>
          </div>
        </form>

        <div className="dialog-box-modal-btns">
          <button
            id="cancelMedicationButton"
            className="cancelButton"
            type="submit"
            onClick={props.closeMedicationModal}
          >
            Cancel
          </button>
          <button
            id="submitMedicationButton"
            className="submitButton"
            type="submit"
            onClick={form.handleSubmit(submitMedication)}
          >
            Ok
          </button>
        </div>
      </div>
    </dialog>
  );
};
