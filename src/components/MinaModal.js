import { useRef } from "react";
import MinaIcon from "./MinaIcon";

import "./minamodal.css";

const MinaModal = ({
  proofFileContents,
  setProofFileContents,
  onModalClose,
  onModalSubmit,
}) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (_) => {
    setProofFileContents("");
    hiddenFileInput.current.click();
  };

  const handleProofFileUpload = async (e) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setProofFileContents(e.target.result);
    };
    if (e.target.files[0]) reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="mina-modal">
      <div className="mina-modal__header">
        <a
          href="https://minaprotocol.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MinaIcon fill={"black"} kind="MinaLogo" height={42} width={146} />
        </a>
        <span onClick={(_) => onModalClose(false)}>
          <MinaIcon fill={"black"} kind="CloseMenu" height={37} width={37} />
        </span>
      </div>
      <div className="mina-modal__body">
        <h3>Upload your credit score proof</h3>
        <p>Upload your private credit score proof provided from the Mina app</p>
        <span className="proof-submit">
          {proofFileContents === "" ? (
            <button
              className="mina-button mina-button--proof"
              onClick={handleClick}
            >
              Upload Proof
              <MinaIcon fill={"black"} kind="ArrowRightSmall" />
            </button>
          ) : (
            <p onClick={handleClick} className="mina-proof-uploaded-label">
              Proof Uploaded!
            </p>
          )}
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleProofFileUpload}
            style={{ display: "none" }}
          />
          <span>
            <span>Don't have the Mina app?</span>
            <a
              className="mina-app-download"
              href="https://storage.cloud.google.com/snapp-electron-app-test/snapp-credit-check.deb"
            >
              Download
              <MinaIcon kind="ArrowRightMedium" />
            </a>
          </span>
        </span>
      </div>
      <div className="mina-modal__footer">
        <button
          className="mina-button mina-button--cancel"
          onClick={(_) => onModalClose(false)}
        >
          Cancel
        </button>
        <button
          className="mina-button mina-button--submit"
          onClick={(_) => {
            onModalSubmit();
          }}
        >
          Submit
          <MinaIcon kind="ArrowRightSmall" />
        </button>
      </div>
    </div>
  );
};

export default MinaModal;
