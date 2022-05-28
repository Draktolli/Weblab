supertokens.init({
  apiDomain: "http://localhost:1234",
  apiBasePath: "/api"
});

document.getElementById("exit").addEventListener('click', async function(event) {
  async function logout() {
    await supertokens.signOut();
    window.location.href = "/";
  }
  if (await supertokens.doesSessionExist()) {
    logout();
    supertokens.attemptRefreshingSession();
  }
})
