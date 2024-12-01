export const Medication = () => {
  return (
    <dialog id="medicationModal" className="dialog-modal">
      <div className="dialog-box-modal">
        <div className="dialog-box-title">
          <h1>Add Medication</h1>
        </div>
        <form>
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
          >
            Cancel
          </button>
          <button
            id="submitMedicationButton"
            className="submitButton"
            type="submit"
          >
            Ok
          </button>
        </div>
      </div>
    </dialog>
  );
};
