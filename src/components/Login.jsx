import { useState } from "react";
import { apiTmdb } from "../api/apiTmdb";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    await apiTmdb
      .get("authentication/token/new")
      .then((response1) => {
        apiTmdb
          .post("authentication/token/validate_with_login", {
            username: username,
            password: password,
            request_token: response1.data.request_token,
          })
          .then((response2) => {
            apiTmdb
              .post("authentication/session/new", {
                request_token: response2.data.request_token,
              })
              .then((response3) => {
                localStorage.setItem("session", JSON.stringify(response3.data.session_id));
                apiTmdb
                  .get("account", {
                    params: { session_id: response3.data.session_id },
                  })
                  .then((response4) => {
                    localStorage.setItem("account", JSON.stringify(response4.data));
                    window.location.reload();
                    console.log(response4.data);
                  });
              });
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <>
      <div className="modal fade" id="modalLogin" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="card login-form">
              <div className="card-body">
                <h1 className="card-title text-center">LOGIN</h1>
              </div>
              <div className="card-text">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputUsername1" className="form-label">
                      Username
                    </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <div className="d-grid gap-2">
                    <button onClick={(e) => handleLogin(e)} type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
