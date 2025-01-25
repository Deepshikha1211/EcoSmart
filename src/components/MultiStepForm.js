import React, { useState } from "react";


const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selections, setSelections] = useState({
    productType: '',
    qrCode: '',
    brand: '',
    booth: ''
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmitRequest = () => {
    setIsSubmitted(true);
  };

  const handleSelection = (field, value) => {
    setSelections(prev => ({ ...prev, [field]: value }));
  };

  const isNextEnabled = () => {
    switch (step) {
      case 1:
        return selections.productType !== '';
      case 2:
        return selections.qrCode !== '';
      case 3:
        return selections.brand !== '';
      case 4:
        return selections.booth !== '';
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-container">
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your recycling request has been submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1>Make a Recycling Request</h1>
      <div className="steps-indicator">
        <span className={step === 1 ? "active" : ""}>1</span>
        <span className={step === 2 ? "active" : ""}>2</span>
        <span className={step === 3 ? "active" : ""}>3</span>
        <span className={step === 4 ? "active" : ""}>4</span>
      </div>

      {step === 1 && (
        <div className="step">
          <h2>Select Product Type</h2>
          <div className="options">
            <ul>
              {['Plastics', 'Electronics', 'Paper', 'Glass', 'Metals'].map((type) => (
                <li key={type}>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value={type}
                      checked={selections.productType === type}
                      onChange={(e) => handleSelection('productType', e.target.value)}
                    />
                    {type}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="step">
          <h2>Scan QR Code</h2>
          <div className="options">
            <input
              type="text"
              placeholder="Enter QR Code"
              value={selections.qrCode}
              onChange={(e) => handleSelection('qrCode', e.target.value)}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="step">
          <h2>Choose Brand</h2>
          <div className="options">
            <select
              value={selections.brand}
              onChange={(e) => handleSelection('brand', e.target.value)}
            >
              <option value="" disabled>Select Brand</option>
              <option value="brandA">Brand A</option>
              <option value="brandB">Brand B</option>
              <option value="brandC">Brand C</option>
            </select>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="step">
          <h2>Find Recycling Booth</h2>
          <div className="options">
            <ul>
              {[
                { name: 'City Center Booth', distance: '0.5 km' },
                { name: 'Westside Mall Booth', distance: '1.2 km' },
                { name: 'Green Park Booth', distance: '2.3 km' }
              ].map((booth) => (
                <li key={booth.name}>
                  <label>
                    <input
                      type="radio"
                      name="booth"
                      value={booth.name}
                      checked={selections.booth === booth.name}
                      onChange={(e) => handleSelection('booth', e.target.value)}
                    />
                    {`${booth.name} (${booth.distance})`}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="submit-btn"
            onClick={handleSubmitRequest}
            disabled={!isNextEnabled()}
          >
            Submit Request
          </button>
        </div>
      )}

      <div className="navigation-buttons">
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < 4 && (
          <button
            onClick={nextStep}
            disabled={!isNextEnabled()}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
