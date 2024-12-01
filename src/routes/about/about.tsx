export const About: React.FC = () => {
  return (
    <>
      <h4 className="p-4">
        The idea of my project is to create an application for people suffering
        from rare genetic diseases of the respiratory system, such as cystic
        fibrosis.
      </h4>
      <h4 className="p-4">
        These patients take a lot of medications and do a lot of inhalations, so
        it is very important to follow a daily routine and control the
        medication intake.
      </h4>
      <h4 className="p-4">The App has the following areas of application:</h4>
      <ul className="p-4">
        <li>
          - Patients can record, track and control their symptoms and health
          parameters during daily activity and especially during an exacerbation
          of the disease;
        </li>
        <li>
          - Doctors can use the data collected by this application to monitor
          and optimize the treatment of a particular patient;
        </li>
        <li>
          - (optional) Medical specialists can analyze data on patient health
          during trials of new medications.
        </li>
      </ul>
      <h4 className="p-4">
        The Body Temperature dialog box allows you to enter data about the
        patient's condition during an illness episode. The fields with date and
        temperature are required.
      </h4>
      <h4 className="p-4">
        The Body Weight/Height dialog box allows you to enter data about the
        patient's height and weight and automatically calculate the body mass
        index (BMI).
      </h4>
      <h4 className="p-4">
        The Add Medication dialog box allows you to enter information about the
        medications that the patient is taking during treatment.
      </h4>
      <br />
      <br />
    </>
  );
};
