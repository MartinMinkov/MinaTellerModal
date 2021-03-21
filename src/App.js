import React, { useState } from "react";
import MinaModal from "./components/MinaModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [proofFileContents, setProofFileContents] = useState("");

  const onModalSubmit = () => {
    console.log(proofFileContents);
  };

  return (
    <>
      <div className="App">
        {isModalOpen ? (
          <MinaModal
            proofFileContents={proofFileContents}
            setProofFileContents={setProofFileContents}
            onModalClose={setIsModalOpen}
            onModalSubmit={onModalSubmit}
          />
        ) : null}
      </div>
      <button
        onClick={(_) => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        Show Modal
      </button>
    </>
  );
}

export default App;
