import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [gitProfile, setGitProfile] = useState(null);
  const [gitRepo, setGitRepo] = useState(null);
  const [sha, setSha] = useState(null);

  return (
    <form style={{ display: "flex", gap: "10px" }}>
      <label htmlFor='gitProfile'>User Name: </label>
      <input
        id={"gitProfile"}
        onChange={(e) => {
          const value = e.target.value;
          setGitProfile(value);
        }}></input>

      <label htmlFor='repo'>Repository: </label>
      <input
        id={"repo"}
        onChange={(e) => {
          const value = e.target.value;
          setGitRepo(value);
        }}></input>

      <label htmlFor='sha'>Last Commmit Sha: </label>
      <input
        id={"sha"}
        onChange={(e) => {
          const value = e.target.value;
          setSha(value);
        }}></input>

      <button
        type='submit'
        onClick={async (e) => {
          e.preventDefault();
          onSubmit({ gitProfile, gitRepo, sha });
        }}>
        Submit
      </button>
    </form>
  );
};

export default Form;
