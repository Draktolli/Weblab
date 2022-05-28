supertokens.init({
  apiDomain: 'http://localhost:1234',
  apiBasePath: '/api',
});

document
  .getElementById('login_via_github')
  .addEventListener('click', async function (event) {
  console.log('хуй')
    const responseForm = await fetch(
      'http://localhost:1234/api/authorisationurl?thirdPartyId=github',
      {
        method: 'GET',
        headers: {
          rid: 'thirdparty',
        },
      },
    ).then((responseForm) => responseForm.json());
    let urlObj = new URL(responseForm.url);
    urlObj.searchParams.append(
      'redirect_uri',
      'http://localhost:1234/auth/callback/github',
    );
    window.location.href = urlObj.toString();
  });
