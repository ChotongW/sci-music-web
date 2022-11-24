import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../api/axios";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Box } from "@mui/material";

const ID_REGEX = /^\d{9}$/;
const USER_REGEX = /^[A-z][A-z0-9-_](?=.*[!@#$%]).{3,31}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/authen/register";

const formDesign = {
  display: "flex",
  justify: "center",
  align: "center",
  height: "100vh",
};

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [id, setID] = useState("");
  const [validID, setValidID] = useState(false);
  const [idFocus, setIdFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [onLoginuser, setonLoginuser] = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (onLoginuser) {
      navigate("/");
    }
  }, [onLoginuser]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidID(ID_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = ID_REGEX.test(id);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ id: id, email: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
        alert("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
        alert("Username Taken");
      } else {
        setErrMsg("Registration Failed");
        alert("Registration Failed");
      }
      localStorage.clear();
      setonLoginuser(false);
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/login">Sign In</Link>
          </p>
        </section>
      ) : (
        <div>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>

          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="stuid">
                Student ID:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validID ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validID || !user ? "hide" : "invalid"}
                />
              </label>
              <input
                type="text"
                id="stuid"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setID(e.target.value)}
                value={id}
                required
                aria-invalid={validID ? "false" : "true"}
                aria-describedby="stuidnot"
                onFocus={() => setIdFocus(true)}
                onBlur={() => setIdFocus(false)}
              />
              <p
                id="stuidnote"
                className={
                  idFocus && id && !validID ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                9 digits.
                <br />
                ex. 630510644
              </p>

              <label htmlFor="username">
                Email:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validName ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validName || !user ? "hide" : "invalid"}
                />
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 32 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>

              <label htmlFor="password">
                Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPwd ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPwd || !pwd ? "hide" : "invalid"}
                />
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>

              <label htmlFor="confirm_pwd">
                Confirm Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validMatch && matchPwd ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validMatch || !matchPwd ? "hide" : "invalid"}
                />
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>

              <button
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                Sign Up
              </button>
            </form>
          </div>

          <p>
            Already registered?
            <br />
            <span className="line">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Register;
